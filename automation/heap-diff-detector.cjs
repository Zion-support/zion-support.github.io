#!/usr/bin/env node
/**
 * Autonomous Memory Leak Detector & Heap Snapshot Comparator
 *
 * Compares heap snapshots across time to detect abnormal object retention growth.
 * Works with PM2-managed Node processes via `process.memoryUsage()` and optional heapdump.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'heap-diff');
const SNAPSHOT_DIR = path.join(STATE_DIR, 'snapshots');

// Thresholds
const RETAINED_GROWTH_RATE = 0.20; // 20% increase over 24h baseline = alert
const MIN_HEAP_SIZE_MB = 50; // only analyze if heap > 50MB (avoid noise on small processes)
const HISTORY_DAYS = 30;

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

function loadJson(file, fallback = null) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); }
  catch { return fallback; }
}

function saveJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Capture current heap stats from running PM2 processes
function captureHeapFromPM2() {
  try {
    // Use pm2 jlist to get process info; we'll use memory usage from there
    const output = execSync('pm2 jlist --format json', { encoding: 'utf8' });
    const processes = JSON.parse(output);
    const heapData = [];

    for (const p of processes) {
      if (!p.pid) continue;
      const mem = p.memory || {};
      const heapTotal = mem.heapTotal || 0; // bytes
      const heapUsed = mem.heapUsed || 0;
      const rss = mem.rss || 0;
      const external = mem.external || 0;

      heapData.push({
        name: p.name,
        pid: p.pid,
        heapTotalMB: Math.round(heapTotal / 1024 / 1024 * 100) / 100,
        heapUsedMB: Math.round(heapUsed / 1024 / 1024 * 100) / 100,
        rssMB: Math.round(rss / 1024 / 1024 * 100) / 100,
        externalMB: Math.round(external / 1024 / 1024 * 100) / 100,
        timestamp: nowISO()
      });
    }

    return heapData;
  } catch (e) {
    console.error('❌ Failed to query PM2:', e.message);
    return [];
  }
}

// Alternative: use a Node CLI script to capture heap from a target PID via --inspect
function captureHeapViaInspect(pid) {
  // Not implemented; placeholder for future with v8.getHeapSnapshot()
  return null;
}

function loadHistory() {
  const historyFile = path.join(STATE_DIR, 'history.json');
  const h = loadJson(historyFile, { entries: [] });
  // prune old entries
  h.entries = h.entries.filter(e => new Date(e.ts) > new Date(Date.now() - HISTORY_DAYS*24*60*60*1000));
  return h;
}

function computeGrowth(current, baselineList) {
  // baselineList: array of past readings for same process name (or any)
  if (!baselineList.length) return null;
  // Use median of last 24h to avoid spike skew
  const yesterday = baselineList.filter(e => new Date(e.ts) > new Date(Date.now() - 24*60*60*1000));
  if (yesterday.length === 0) return null;
  const medianBaseline = median(yesterday.map(e => e.heapUsedMB));
  const growth = (current - medianBaseline) / medianBaseline;
  return growth;
}

function median(arr) {
  const sorted = [...arr].sort((a,b)=>a-b);
  const mid = Math.floor(sorted.length/2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid-1]+sorted[mid])/2;
}

function main() {
  console.log('🔍 Memory Leak Detector — starting\n');
  ensureDir(SNAPSHOT_DIR);
  ensureDir(STATE_DIR);

  const currentReadings = captureHeapFromPM2();
  if (currentReadings.length === 0) {
    console.error('❌ No PM2 processes found. Ensure PM2 is running.\n');
    process.exit(1);
  }

  console.log(`📊 Captured heap from ${currentReadings.length} PM2 process(es)\n`);

  const history = loadHistory();
  const report = {
    timestamp: nowISO(),
    processes: [],
    alerts: []
  };

  for (const proc of currentReadings) {
    const entry = { ...proc, growthRate: null, alert: false, reason: null };

    // Only analyze processes with meaningful heap
    if (proc.heapUsedMB < MIN_HEAP_SIZE_MB) {
      entry.reason = `Heap too small (<${MIN_HEAP_SIZE_MB}MB) — skipping`;
      report.processes.push(entry);
      continue;
    }

    // Find matching baseline entries (by name)
    const baseline = history.entries.filter(e => e.name === proc.name);
    const growth = computeGrowth(proc.heapUsedMB, baseline);
    entry.growthRate = growth ? Math.round(growth * 100 * 100) / 100 : null; // percentage

    if (growth !== null && growth > RETAINED_GROWTH_RATE) {
      entry.alert = true;
      entry.reason = `Retained heap grew ~${Math.round(growth*100)}% vs 24h median`;
      report.alerts.push(entry);
    }

    report.processes.push(entry);
  }

  // Write latest snapshot
  const snapshotFile = path.join(SNAPSHOT_DIR, `heap-${Date.now()}.json`);
  saveJson(snapshotFile, report);
  console.log(`📄 Snapshot saved: ${snapshotFile}`);

  // Update history
  history.entries.push(...currentReadings.map(p => ({
    ts: nowISO(),
    name: p.name,
    pid: p.pid,
    heapUsedMB: p.heapUsedMB,
    rssMB: p.rssMB
  })));
  saveJson(path.join(STATE_DIR, 'history.json'), history);

  // Console summary
  console.log('\n📋 Summary:');
  for (const p of report.processes) {
    const mark = p.alert ? '🔴' : p.growthRate !== null ? `📈${p.growthRate}%` : '⚪';
    console.log(` ${mark} ${p.name} (PID ${p.pid}) — ${p.heapUsedMB}MB used ${p.reason ? `| ${p.reason}` : ''}`);
  }
  console.log('');

  if (report.alerts.length > 0) {
    console.log('🚨 Potential memory leaks detected!\n');
    process.exit(1);
  } else {
    console.log('✅ No abnormal heap growth detected.\n');
    process.exit(0);
  }
}

main();

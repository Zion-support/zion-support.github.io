#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const HISTORY_FILE = path.join(REPORTS_DIR, 'pm2-restart-guardian-history.json');

const intervalSeconds = parseInt(process.env.PM2_GUARD_INTERVAL_SECONDS || '300', 10);
const restartDeltaThreshold = parseInt(process.env.PM2_RESTART_DELTA_THRESHOLD || '3', 10);
const healCooldownMinutes = parseInt(process.env.PM2_HEAL_COOLDOWN_MINUTES || '10', 10);
const healWindowMinutes = parseInt(process.env.PM2_HEAL_WINDOW_MINUTES || '60', 10);
const healMaxPerWindow = parseInt(process.env.PM2_HEAL_MAX_PER_WINDOW || '3', 10);
const jitterRatio = Math.max(0, Math.min(0.5, Number(process.env.PM2_GUARD_JITTER_RATIO || '0.1')));
const autoHeal = process.env.PM2_AUTO_HEAL === 'true';
const runOnceMode = process.env.PM2_GUARD_RUN_ONCE === '1' || process.env.PM2_GUARD_RUN_ONCE === 'true';

const lastRestartCount = new Map();
const lastHealedAt = new Map();
const healHistoryByProc = new Map();

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[PM2-Guardian] ${timestamp} | ${message}`);
}

function readPm2List() {
  const raw = execSync('pm2 jlist', {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  });
  return JSON.parse(raw);
}

function writeReport(report) {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  fs.writeFileSync(
    path.join(REPORTS_DIR, 'pm2-restart-guardian-latest.json'),
    JSON.stringify(report, null, 2)
  );
}

function readHistory() {
  try {
    if (!fs.existsSync(HISTORY_FILE)) return [];
    const parsed = JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeHistory(entries) {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(entries.slice(-200), null, 2));
}

function pruneHealTimestamps(procName, now) {
  const existing = healHistoryByProc.get(procName) || [];
  const cutoff = now - healWindowMinutes * 60 * 1000;
  const pruned = existing.filter((ts) => ts >= cutoff);
  healHistoryByProc.set(procName, pruned);
  return pruned;
}

function maybeHeal(proc, reasons) {
  if (!autoHeal) return false;
  const now = Date.now();
  const last = lastHealedAt.get(proc.name) || 0;
  if (now - last < healCooldownMinutes * 60 * 1000) {
    return false;
  }

  const recentHeals = pruneHealTimestamps(proc.name, now);
  if (recentHeals.length >= healMaxPerWindow) {
    return false;
  }

  try {
    execSync(`pm2 restart "${proc.name}"`, {
      cwd: ROOT,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
    });
    lastHealedAt.set(proc.name, now);
    healHistoryByProc.set(proc.name, [...recentHeals, now]);
    log(`Auto-healed ${proc.name} (${reasons.join('; ')})`);
    return true;
  } catch (error) {
    log(`Auto-heal failed for ${proc.name}: ${error.message}`);
    return false;
  }
}

function evaluate(processes) {
  const unhealthy = [];
  let healedCount = 0;

  for (const proc of processes) {
    const status = proc?.pm2_env?.status || 'unknown';
    const restartTime = proc?.pm2_env?.restart_time || 0;
    const previousRestartTime = lastRestartCount.has(proc.name)
      ? lastRestartCount.get(proc.name)
      : restartTime;
    const restartDelta = Math.max(0, restartTime - previousRestartTime);
    lastRestartCount.set(proc.name, restartTime);

    const reasons = [];
    if (status !== 'online' && status !== 'stopped') {
      reasons.push(`status=${status}`);
    }
    if (restartDelta >= restartDeltaThreshold) {
      reasons.push(`restart_delta=${restartDelta}`);
    }

    if (reasons.length > 0) {
      const healed = maybeHeal(proc, reasons);
      if (healed) healedCount += 1;
      unhealthy.push({
        name: proc.name,
        status,
        restartTime,
        restartDelta,
        reasons,
        healed,
      });
    }
  }

  return { unhealthy, healedCount };
}

function runOnce() {
  try {
    const processes = readPm2List();
    const { unhealthy, healedCount } = evaluate(processes);
    const nowIso = new Date().toISOString();

    const report = {
      timestamp: nowIso,
      intervalSeconds,
      restartDeltaThreshold,
      autoHeal,
      healCooldownMinutes,
      healWindowMinutes,
      healMaxPerWindow,
      jitterRatio,
      totalProcesses: processes.length,
      unhealthyCount: unhealthy.length,
      healedCount,
      unhealthy,
    };

    writeReport(report);
    const history = readHistory();
    history.push({
      timestamp: nowIso,
      unhealthyCount: unhealthy.length,
      healedCount,
      totalProcesses: processes.length,
    });
    writeHistory(history);
    log(`Check complete: unhealthy=${unhealthy.length}, healed=${healedCount}`);
  } catch (error) {
    log(`Check failed: ${error.message}`);
  }
}

function start() {
  log(
    `Starting PM2 restart guardian (interval=${intervalSeconds}s, threshold=${restartDeltaThreshold}, autoHeal=${autoHeal}, cooldown=${healCooldownMinutes}m, maxHealsPerWindow=${healMaxPerWindow}/${healWindowMinutes}m, jitterRatio=${jitterRatio})`
  );
  runOnce();
  const scheduleNext = () => {
    const baseMs = intervalSeconds * 1000;
    const jitterMs = Math.floor((Math.random() * 2 - 1) * baseMs * jitterRatio);
    const waitMs = Math.max(1000, baseMs + jitterMs);
    setTimeout(() => {
      runOnce();
      scheduleNext();
    }, waitMs);
  };
  scheduleNext();
}

if (runOnceMode) {
  log('Running PM2 restart guardian in one-shot mode');
  runOnce();
} else {
  start();
}

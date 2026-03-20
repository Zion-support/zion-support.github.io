#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const OUTPUT_FILE = path.join(REPORTS_DIR, 'pm2-priority-throttler-latest.json');

const intervalSeconds = parseInt(process.env.PM2_THROTTLER_INTERVAL_SECONDS || '300', 10);
const cpuThreshold = parseFloat(process.env.PM2_THROTTLER_CPU_THRESHOLD || '85');
const memoryThresholdMb = parseInt(process.env.PM2_THROTTLER_MEMORY_MB_THRESHOLD || '6144', 10);
const dryRun = process.env.PM2_THROTTLER_DRY_RUN === '1' || process.env.PM2_THROTTLER_DRY_RUN === 'true';
const runOnceMode =
  process.env.PM2_THROTTLER_RUN_ONCE === '1' || process.env.PM2_THROTTLER_RUN_ONCE === 'true';

const lowPriorityApps = String(process.env.PM2_LOW_PRIORITY_APPS || 'openclaw-autonomous-prompts')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

function log(message) {
  console.log(`[PM2-THROTTLER] ${new Date().toISOString()} | ${message}`);
}

function readPm2List() {
  const raw = execSync('pm2 jlist', { cwd: ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  return JSON.parse(raw);
}

function runCommand(command) {
  execSync(command, { cwd: ROOT, stdio: ['pipe', 'pipe', 'pipe'] });
}

function writeReport(payload) {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2));
}

function evaluate() {
  const now = new Date().toISOString();
  const processes = readPm2List();
  const totalCpu = processes.reduce((acc, proc) => acc + Number(proc?.monit?.cpu || 0), 0);
  const totalMemoryMb = Math.round(
    processes.reduce((acc, proc) => acc + Number(proc?.monit?.memory || 0), 0) / (1024 * 1024)
  );

  const pressure = totalCpu >= cpuThreshold || totalMemoryMb >= memoryThresholdMb;
  const targeted = processes.filter((proc) => lowPriorityApps.includes(proc.name));
  const actions = [];

  for (const proc of targeted) {
    const status = proc?.pm2_env?.status || 'unknown';
    const name = proc.name;
    if (pressure && status === 'online') {
      actions.push({ app: name, action: 'stop', skipped: dryRun });
      if (!dryRun) runCommand(`pm2 stop ${name}`);
    } else if (!pressure && (status === 'stopped' || status === 'waiting restart')) {
      actions.push({ app: name, action: 'restart', skipped: dryRun });
      if (!dryRun) runCommand(`pm2 restart ${name} --update-env`);
    }
  }

  const payload = {
    timestamp: now,
    totalProcesses: processes.length,
    totalCpu,
    totalMemoryMb,
    cpuThreshold,
    memoryThresholdMb,
    pressure,
    dryRun,
    lowPriorityApps,
    actions,
  };
  writeReport(payload);
  log(`Throttle check complete: pressure=${pressure} actions=${actions.length}`);
}

function start() {
  log(
    `Starting PM2 priority throttler (interval=${intervalSeconds}s, cpuThreshold=${cpuThreshold}, memoryThresholdMb=${memoryThresholdMb}, dryRun=${dryRun})`
  );
  evaluate();
  setInterval(evaluate, Math.max(1000, intervalSeconds * 1000));
}

if (runOnceMode) {
  log('Running PM2 priority throttler in one-shot mode');
  evaluate();
} else {
  start();
}

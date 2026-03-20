#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');

const intervalSeconds = parseInt(process.env.PM2_GUARD_INTERVAL_SECONDS || '300', 10);
const restartDeltaThreshold = parseInt(process.env.PM2_RESTART_DELTA_THRESHOLD || '3', 10);
const autoHeal = process.env.PM2_AUTO_HEAL === 'true';

const baselineRestarts = new Map();
const lastHealedAt = new Map();

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

function maybeHeal(proc, reasons) {
  if (!autoHeal) return false;
  const now = Date.now();
  const last = lastHealedAt.get(proc.name) || 0;
  if (now - last < 10 * 60 * 1000) {
    return false;
  }

  try {
    execSync(`pm2 restart "${proc.name}"`, {
      cwd: ROOT,
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
    });
    lastHealedAt.set(proc.name, now);
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
    const base = baselineRestarts.has(proc.name) ? baselineRestarts.get(proc.name) : restartTime;
    baselineRestarts.set(proc.name, base);
    const restartDelta = restartTime - base;

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

    const report = {
      timestamp: new Date().toISOString(),
      intervalSeconds,
      restartDeltaThreshold,
      autoHeal,
      totalProcesses: processes.length,
      unhealthyCount: unhealthy.length,
      healedCount,
      unhealthy,
    };

    writeReport(report);
    log(`Check complete: unhealthy=${unhealthy.length}, healed=${healedCount}`);
  } catch (error) {
    log(`Check failed: ${error.message}`);
  }
}

function start() {
  log(
    `Starting PM2 restart guardian (interval=${intervalSeconds}s, threshold=${restartDeltaThreshold}, autoHeal=${autoHeal})`
  );
  runOnce();
  setInterval(runOnce, intervalSeconds * 1000);
}

start();

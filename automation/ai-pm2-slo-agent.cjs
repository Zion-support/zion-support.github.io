#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const HISTORY_FILE = path.join(REPORTS_DIR, 'pm2-slo-history.json');
const intervalSeconds = parseInt(process.env.PM2_SLO_INTERVAL_SECONDS || '300', 10);
const maxRestartDelta = parseInt(process.env.PM2_SLO_MAX_RESTART_DELTA || '2', 10);
const jitterRatio = Math.max(0, Math.min(0.5, Number(process.env.PM2_SLO_JITTER_RATIO || '0.1')));
const runOnceMode = process.env.PM2_SLO_RUN_ONCE === '1' || process.env.PM2_SLO_RUN_ONCE === 'true';
const ignoreStoppedApps = new Set(
  (process.env.PM2_SLO_IGNORE_STOPPED_APPS || '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean)
);
const unhealthyStatuses = new Set(['errored', 'stopped', 'waiting restart', 'launching']);

function log(message) {
  console.log(`[PM2-SLO] ${new Date().toISOString()} | ${message}`);
}

function readPm2List() {
  const raw = execSync('pm2 jlist', { cwd: ROOT, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
  return JSON.parse(raw);
}

function readHistory() {
  try {
    if (!fs.existsSync(HISTORY_FILE)) return {};
    return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
  } catch {
    return {};
  }
}

function writeJson(filePath, data) {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function evaluate() {
  try {
    const current = readPm2List();
    const history = readHistory();
    const appReports = [];
    let unhealthyCount = 0;

    for (const proc of current) {
      const name = proc.name;
      const status = proc?.pm2_env?.status || 'unknown';
      const restartTime = proc?.pm2_env?.restart_time || 0;
      const prev = history[name] || { restartTime };
      const restartDelta = Math.max(0, restartTime - prev.restartTime);

      const reasons = [];
      if (unhealthyStatuses.has(status)) {
        const ignoredStopped = status === 'stopped' && ignoreStoppedApps.has(name);
        if (!ignoredStopped) {
          reasons.push(`status=${status}`);
        }
      }
      if (restartDelta > maxRestartDelta) reasons.push(`restart_delta=${restartDelta}`);
      const healthy = reasons.length === 0;
      if (!healthy) unhealthyCount += 1;

      appReports.push({
        name,
        status,
        restartTime,
        restartDelta,
        cpu: proc?.monit?.cpu ?? null,
        memory: proc?.monit?.memory ?? null,
        healthy,
        reasons,
      });

      history[name] = { restartTime, timestamp: new Date().toISOString() };
    }

    const report = {
      timestamp: new Date().toISOString(),
      intervalSeconds,
      maxRestartDelta,
      jitterRatio,
      totalApps: appReports.length,
      unhealthyCount,
      apps: appReports.sort((a, b) => a.name.localeCompare(b.name)),
    };

    writeJson(HISTORY_FILE, history);
    writeJson(path.join(REPORTS_DIR, 'pm2-slo-latest.json'), report);
    log(`SLO check complete: unhealthy=${unhealthyCount}/${appReports.length}`);
  } catch (error) {
    log(`SLO check failed: ${error.message}`);
  }
}

function start() {
  log(
    `Starting PM2 SLO agent (interval=${intervalSeconds}s, maxRestartDelta=${maxRestartDelta}, jitterRatio=${jitterRatio})`
  );
  evaluate();
  const scheduleNext = () => {
    const baseMs = intervalSeconds * 1000;
    const jitterMs = Math.floor((Math.random() * 2 - 1) * baseMs * jitterRatio);
    const waitMs = Math.max(1000, baseMs + jitterMs);
    setTimeout(() => {
      evaluate();
      scheduleNext();
    }, waitMs);
  };
  scheduleNext();
}

if (runOnceMode) {
  log('Running PM2 SLO agent in one-shot mode');
  evaluate();
} else {
  start();
}

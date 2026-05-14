#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const SLO_FILE = path.join(REPORTS_DIR, 'pm2-slo-latest.json');
const OUTPUT_FILE = path.join(REPORTS_DIR, 'pm2-slo-escalation-latest.json');
const HISTORY_FILE = path.join(REPORTS_DIR, 'pm2-slo-escalation-history.json');

const intervalSeconds = parseInt(process.env.PM2_SLO_ESCALATION_INTERVAL_SECONDS || '300', 10);
const unhealthyThreshold = parseInt(process.env.PM2_SLO_ESCALATION_UNHEALTHY_THRESHOLD || '3', 10);
const streakThreshold = parseInt(process.env.PM2_SLO_ESCALATION_STREAK_THRESHOLD || '3', 10);
const runOnceMode =
  process.env.PM2_SLO_ESCALATION_RUN_ONCE === '1' || process.env.PM2_SLO_ESCALATION_RUN_ONCE === 'true';

function log(message) {
  console.log(`[PM2-SLO-ESCALATION] ${new Date().toISOString()} | ${message}`);
}

function readJson(filePath, fallback = null) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, data) {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function evaluate() {
  const now = new Date().toISOString();
  const slo = readJson(SLO_FILE, {});
  const history = readJson(HISTORY_FILE, { streak: 0, entries: [] });
  const useCriticalOnly =
    process.env.PM2_SLO_ESCALATION_USE_CRITICAL_ONLY === '1' ||
    process.env.PM2_SLO_ESCALATION_USE_CRITICAL_ONLY === 'true';
  const criticalCount = Number(slo.criticalCount ?? NaN);
  const unhealthyCount = Number(slo.unhealthyCount || 0);
  const escalationMetric = useCriticalOnly && !Number.isNaN(criticalCount) ? criticalCount : unhealthyCount;
  const totalApps = Number(slo.totalApps || 0);
  const exceedsThreshold = escalationMetric >= unhealthyThreshold;
  const streak = exceedsThreshold ? Number(history.streak || 0) + 1 : 0;
  const shouldEscalate = streak >= streakThreshold;

  const unhealthyApps = Array.isArray(slo.apps)
    ? slo.apps
        .filter((app) => {
          if (!app || app.healthy !== false) return false;
          if (useCriticalOnly) return app.severity === 'critical';
          return true;
        })
        .map((app) => app.name)
    : [];

  const report = {
    timestamp: now,
    sourceReport: SLO_FILE,
    unhealthyCount,
    totalApps,
    unhealthyThreshold,
    streakThreshold,
    currentStreak: streak,
    shouldEscalate,
    escalationReason: shouldEscalate
      ? `PM2 escalation metric (${escalationMetric}${useCriticalOnly ? ' critical' : ' unhealthy'}) exceeded threshold (${unhealthyThreshold}) for ${streak} consecutive checks.`
      : 'No persistent escalation condition detected.',
    unhealthyApps,
  };

  const nextHistory = {
    streak,
    entries: [...(history.entries || []), report].slice(-200),
  };

  writeJson(OUTPUT_FILE, report);
  writeJson(HISTORY_FILE, nextHistory);
  log(`Escalation check complete: unhealthy=${unhealthyCount}, streak=${streak}, escalate=${shouldEscalate}`);
}

function start() {
  log(`Starting PM2 SLO escalation agent (interval=${intervalSeconds}s, threshold=${unhealthyThreshold})`);
  evaluate();
  setInterval(evaluate, Math.max(1000, intervalSeconds * 1000));
}

if (runOnceMode) {
  log('Running PM2 SLO escalation agent in one-shot mode');
  evaluate();
} else {
  start();
}

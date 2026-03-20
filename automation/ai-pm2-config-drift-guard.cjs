#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PKG_PATH = path.join(ROOT, 'package.json');
const ECOSYSTEM_PATH = path.join(ROOT, 'ecosystem.config.cjs');
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const intervalMinutes = parseInt(process.env.PM2_DRIFT_INTERVAL_MINUTES || '360', 10);

function log(message) {
  const ts = new Date().toISOString();
  console.log(`[PM2-DriftGuard] ${ts} | ${message}`);
}

function safeReadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function collectNpmPm2Scripts(pkg) {
  const scripts = pkg.scripts || {};
  const map = new Map();
  for (const [name, cmd] of Object.entries(scripts)) {
    if (!cmd.includes('pm2') || !cmd.includes('--only')) continue;
    const match = cmd.match(/--only\s+([a-zA-Z0-9-_,]+)/);
    if (!match) continue;
    const apps = match[1].split(',').map((s) => s.trim()).filter(Boolean);
    map.set(name, apps);
  }
  return map;
}

function runOnce() {
  const report = {
    timestamp: new Date().toISOString(),
    driftCount: 0,
    missingInEcosystem: [],
    npmScriptsWithMissingApps: [],
  };

  try {
    const pkg = safeReadJson(PKG_PATH);
    delete require.cache[require.resolve(ECOSYSTEM_PATH)];
    const ecosystem = require(ECOSYSTEM_PATH);
    const apps = Array.isArray(ecosystem.apps) ? ecosystem.apps : [];
    const appNames = new Set(apps.map((a) => a.name).filter(Boolean));
    const pm2Scripts = collectNpmPm2Scripts(pkg);

    for (const [scriptName, referencedApps] of pm2Scripts.entries()) {
      const missing = referencedApps.filter((app) => !appNames.has(app));
      if (missing.length > 0) {
        report.npmScriptsWithMissingApps.push({
          scriptName,
          missingApps: missing,
        });
        for (const app of missing) {
          if (!report.missingInEcosystem.includes(app)) {
            report.missingInEcosystem.push(app);
          }
        }
      }
    }

    report.driftCount = report.missingInEcosystem.length;
    if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
    fs.writeFileSync(
      path.join(REPORTS_DIR, 'pm2-config-drift-guard-latest.json'),
      JSON.stringify(report, null, 2)
    );

    log(`Drift scan complete. driftCount=${report.driftCount}`);
    if (report.driftCount > 0) {
      for (const item of report.npmScriptsWithMissingApps) {
        log(`Drift: ${item.scriptName} references missing apps: ${item.missingApps.join(', ')}`);
      }
    }
  } catch (error) {
    log(`Drift scan failed: ${error.message}`);
  }
}

function startContinuous() {
  log(`Starting PM2 config drift guard (interval=${intervalMinutes}m)`);
  runOnce();
  setInterval(runOnce, intervalMinutes * 60 * 1000);
}

startContinuous();

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PKG_PATH = path.join(ROOT, 'package.json');
const ECOSYSTEM_PATH = path.join(ROOT, 'ecosystem.config.cjs');
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const HISTORY_FILE = path.join(REPORTS_DIR, 'pm2-config-drift-guard-history.json');
const intervalMinutes = parseInt(process.env.PM2_DRIFT_INTERVAL_MINUTES || '360', 10);
const autoFix = process.argv.includes('--auto-fix') || process.env.PM2_DRIFT_AUTO_FIX === '1';
const runOnceMode = process.env.PM2_DRIFT_RUN_ONCE === '1' || process.env.PM2_DRIFT_RUN_ONCE === 'true';
const historyLimit = parseInt(process.env.PM2_DRIFT_HISTORY_LIMIT || '200', 10);

function log(message) {
  const ts = new Date().toISOString();
  console.log(`[PM2-DriftGuard] ${ts} | ${message}`);
}

function safeReadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
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
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(entries.slice(-historyLimit), null, 2));
}

function collectNpmPm2Scripts(pkg) {
  const scripts = pkg.scripts || {};
  const map = new Map();
  const directRefs = [];
  const removedHints = [];

  for (const [name, cmd] of Object.entries(scripts)) {
    if (!cmd.includes('pm2')) continue;

    if (cmd.includes('removed from ecosystem')) {
      removedHints.push({ scriptName: name, command: cmd });
    }

    const onlyMatch = cmd.match(/--only\s+([a-zA-Z0-9-_,]+)/);
    if (onlyMatch) {
      const apps = onlyMatch[1].split(',').map((s) => s.trim()).filter(Boolean);
      map.set(name, apps);
    }

    const isConfigTarget =
      /\bpm2\s+(?:start|restart|stop|delete)\s+[^ ]+\.config\.[cm]?js\b/.test(cmd) ||
      cmd.includes('ecosystem.config.cjs');
    const directMatch = cmd.match(/\bpm2\s+(?:start|stop|restart|logs|status|delete)\s+([a-zA-Z0-9-_]+)/);
    if (directMatch && !isConfigTarget && !cmd.includes('pm2 stop all') && !cmd.includes('pm2 delete all')) {
      directRefs.push({
        scriptName: name,
        app: directMatch[1],
        command: cmd,
      });
    }
  }
  return { map, directRefs, removedHints };
}

function runOnce() {
  const report = {
    timestamp: new Date().toISOString(),
    driftCount: 0,
    missingInEcosystem: [],
    npmScriptsWithMissingApps: [],
    npmDirectCommandsWithMissingApps: [],
    ecosystemAppsWithMissingScripts: [],
    stalePm2HintScripts: [],
    contradictions: [],
    autoFixChanges: [],
  };

  try {
    const pkg = safeReadJson(PKG_PATH);
    delete require.cache[require.resolve(ECOSYSTEM_PATH)];
    const ecosystem = require(ECOSYSTEM_PATH);
    const apps = Array.isArray(ecosystem.apps) ? ecosystem.apps : [];
    const appNames = new Set(apps.map((a) => a.name).filter(Boolean));
    const scriptByApp = new Map();
    for (const app of apps) {
      if (!app?.name) continue;
      scriptByApp.set(app.name, app.script);
      const hasFileScript =
        typeof app.script === 'string' &&
        (app.script.startsWith('./') || app.script.startsWith('../') || app.script.startsWith('/'));
      const scriptPath = hasFileScript ? path.join(ROOT, app.script || '') : null;
      if (
        typeof app.script !== 'string' ||
        app.script.length === 0 ||
        (hasFileScript && scriptPath && !fs.existsSync(scriptPath))
      ) {
        report.ecosystemAppsWithMissingScripts.push({
          app: app.name,
          script: app.script || null,
        });
      }
    }

    const { map: pm2Scripts, directRefs, removedHints } = collectNpmPm2Scripts(pkg);

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

    for (const direct of directRefs) {
      if (!appNames.has(direct.app)) {
        report.npmDirectCommandsWithMissingApps.push(direct);
        if (!report.missingInEcosystem.includes(direct.app)) {
          report.missingInEcosystem.push(direct.app);
        }
      }
    }

    report.stalePm2HintScripts = removedHints;
    for (const hint of removedHints) {
      if (/start|stop|logs/.test(hint.scriptName)) {
        report.contradictions.push({
          scriptName: hint.scriptName,
          reason: 'Script is marked removed from ecosystem and should be reviewed for stale PM2 guidance.',
        });
      }
    }

    if (autoFix && report.npmScriptsWithMissingApps.length > 0) {
      const backupPath = `${PKG_PATH}.bak`;
      fs.copyFileSync(PKG_PATH, backupPath);
      for (const item of report.npmScriptsWithMissingApps) {
        const current = pkg.scripts[item.scriptName];
        if (typeof current !== 'string') continue;
        const before = current;
        const fixed = current
          .replace(/--only\s+([a-zA-Z0-9-_,]+)/, (_m, grp) => {
            const kept = grp
              .split(',')
              .map((s) => s.trim())
              .filter((name) => appNames.has(name));
            return kept.length > 0 ? `--only ${kept.join(',')}` : `--only ${grp}`;
          })
          .replace(/\s+/g, ' ')
          .trim();
        pkg.scripts[item.scriptName] = fixed;
        report.autoFixChanges.push({
          scriptName: item.scriptName,
          before,
          after: fixed,
        });
      }
      const pkgSource = JSON.stringify(pkg, null, 2);
      fs.writeFileSync(PKG_PATH, `${pkgSource}\n`);
      report.autoFixApplied = true;
      report.autoFixBackupPath = backupPath;
    } else {
      report.autoFixApplied = false;
    }

    report.driftCount =
      report.missingInEcosystem.length +
      report.ecosystemAppsWithMissingScripts.length +
      report.contradictions.length;
    if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
    fs.writeFileSync(
      path.join(REPORTS_DIR, 'pm2-config-drift-guard-latest.json'),
      JSON.stringify(report, null, 2)
    );
    const history = readHistory();
    history.push({
      timestamp: report.timestamp,
      driftCount: report.driftCount,
      missingInEcosystemCount: report.missingInEcosystem.length,
      missingScriptPathsCount: report.ecosystemAppsWithMissingScripts.length,
      contradictionsCount: report.contradictions.length,
      autoFixApplied: report.autoFixApplied,
      autoFixChanges: report.autoFixChanges.length,
    });
    writeHistory(history);

    log(`Drift scan complete. driftCount=${report.driftCount}`);
    if (report.driftCount > 0) {
      for (const item of report.npmScriptsWithMissingApps) {
        log(`Drift: ${item.scriptName} references missing apps: ${item.missingApps.join(', ')}`);
      }
      for (const item of report.npmDirectCommandsWithMissingApps) {
        log(`Drift: ${item.scriptName} references missing direct app: ${item.app}`);
      }
      for (const item of report.ecosystemAppsWithMissingScripts) {
        log(`Drift: ecosystem app ${item.app} has missing script path: ${item.script}`);
      }
    }
  } catch (error) {
    log(`Drift scan failed: ${error.message}`);
  }
}

function startContinuous() {
  log(`Starting PM2 config drift guard (interval=${intervalMinutes}m, autoFix=${autoFix ? 'on' : 'off'})`);
  runOnce();
  setInterval(runOnce, intervalMinutes * 60 * 1000);
}

if (runOnceMode) {
  log('Running PM2 config drift guard in one-shot mode');
  runOnce();
} else {
  startContinuous();
}

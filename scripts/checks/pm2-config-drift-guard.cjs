#!/usr/bin/env node
'use strict';

// Read-only PM2 configuration audit. Always write evidence before exiting.
// Never start PM2, execute an agent, or change production settings.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(process.argv[2] || process.cwd());
const reportPath = path.join(root, 'automation', 'reports', 'pm2-config-drift-guard-latest.json');
const report = {
  schema: 'zion.pm2.config-drift.v1',
  generatedAt: new Date().toISOString(),
  sourceSha: process.env.GITHUB_SHA || null,
  driftCount: 0,
  errors: [],
  duplicateAppNames: [],
  npmScriptsWithMissingApps: [],
  npmDirectCommandsWithMissingApps: [],
  ecosystemAppsWithMissingScripts: [],
  checkedApps: 0
};

const error = (code, detail) => report.errors.push({code, detail});
const readFile = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
let packageJson = null;
let ecosystem = null;

try {
  packageJson = JSON.parse(readFile('package.json'));
  if (!packageJson || typeof packageJson.scripts !== 'object') {
    error('INVALID_PACKAGE', 'package.json scripts must be an object');
  }
} catch (e) {
  error('PACKAGE_READ_OR_PARSE', String(e.message).slice(0, 300));
}

try {
  const source = readFile('ecosystem.config.cjs');
  const context = {module: {exports: {}}, exports: {}};
  vm.runInNewContext(source, context, {filename: 'ecosystem.config.cjs', timeout: 1000});
  ecosystem = context.module.exports;
  if (!ecosystem || !Array.isArray(ecosystem.apps)) {
    error('INVALID_ECOSYSTEM', 'ecosystem.config.cjs must export an apps array');
    ecosystem = null;
  }
} catch (e) {
  // Limit errors to a message; do not include source code or environment variables.
  error('ECOSYSTEM_READ_OR_PARSE', String(e.message).split('\n')[0].slice(0, 300));
}

const appNames = new Set();
if (ecosystem) {
  for (const app of ecosystem.apps) {
    report.checkedApps++;
    const name = String(app && app.name || '').trim();
    const script = app && typeof app.script === 'string' ? app.script.trim() : '';
    if (!name) {
      error('UNNAMED_APP', 'ecosystem contains an app without a name');
      continue;
    }
    if (appNames.has(name)) report.duplicateAppNames.push(name);
    appNames.add(name);
    if (!script) {
      report.ecosystemAppsWithMissingScripts.push({app: name, script: null});
      continue;
    }
    const absolute = path.resolve(root, script);
    if (!(absolute === root || absolute.startsWith(root + path.sep))) {
      error('APP_PATH_OUTSIDE_REPOSITORY', name);
      continue;
    }
    if (!fs.existsSync(absolute) || !fs.statSync(absolute).isFile()) {
      report.ecosystemAppsWithMissingScripts.push({app: name, script});
    }
  }
}

// Match explicit 'pm2 restart app-name' style commands, not npm aliases,
// ecosystem filenames, flags, or arbitrary PM2 CLI arguments.
if (packageJson && packageJson.scripts && ecosystem) {
  for (const [scriptName, scriptBody] of Object.entries(packageJson.scripts)) {
    if (typeof scriptBody !== 'string') continue;
    const commands = [...scriptBody.matchAll(/\bpm2\s+(?:restart|reload|stop|delete|start)\s+([A-Za-z0-9_-]+)(?=\s|$|[;&|])/g)];
    for (const match of commands) {
      const app = match[1];
      if (!appNames.has(app) && !['all', 'ecosystem', 'ecosystem.config'].includes(app)) {
        report.npmScriptsWithMissingApps.push({scriptName, missingApps: [app]});
      }
    }
  }
}

report.driftCount = report.errors.length + report.duplicateAppNames.length +
  report.npmScriptsWithMissingApps.length + report.npmDirectCommandsWithMissingApps.length +
  report.ecosystemAppsWithMissingScripts.length;
fs.mkdirSync(path.dirname(reportPath), {recursive: true});
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
console.log(`PM2 read-only config audit: ${report.checkedApps} apps, ${report.driftCount} drift findings. Report: ${path.relative(root, reportPath)}`);
if (report.driftCount) {
  console.error(`::error::PM2 config drift detected (${report.driftCount}); review the uploaded JSON report.`);
  process.exitCode = 1;
}

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = process.cwd();
const automationDir = path.join(rootDir, 'automation');
const scriptsAutomationDir = path.join(rootDir, 'scripts', 'automation');
const packageJsonPath = path.join(rootDir, 'package.json');
const ecosystemPath = path.join(rootDir, 'ecosystem.config.cjs');
const runtimeDirs = ['logs', 'reports', 'data'];
const ignoredDirs = new Set(['node_modules', '.git', '.next', 'dist', 'build', ...runtimeDirs]);

function ensureRuntimeDirs() {
  for (const dir of runtimeDirs) {
    fs.mkdirSync(path.join(automationDir, dir), { recursive: true });
  }
}

function walkScriptFiles(baseDir, fileCollector = []) {
  if (!fs.existsSync(baseDir)) {
    return fileCollector;
  }

  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        walkScriptFiles(fullPath, fileCollector);
      }
      continue;
    }

    if (entry.isFile() && (entry.name.endsWith('.cjs') || entry.name.endsWith('.js'))) {
      fileCollector.push(fullPath);
    }
  }

  return fileCollector;
}

function checkSyntax(absolutePath) {
  const relativePath = path.relative(rootDir, absolutePath);
  const result = spawnSync(process.execPath, ['--check', relativePath], {
    cwd: rootDir,
    encoding: 'utf8',
  });

  return {
    script: relativePath,
    success: result.status === 0,
    stderr: result.stderr || '',
    stdout: result.stdout || '',
  };
}

function normalizeCommandPath(rawPath) {
  if (!rawPath) {
    return null;
  }

  const trimmed = rawPath.trim().replace(/^["']|["']$/g, '');
  const clean = trimmed.replace(/[;|&]+$/, '');
  if (!clean || clean.includes('$')) {
    return null;
  }
  return clean;
}

function isLocalPath(commandPath) {
  return (
    commandPath.startsWith('./') ||
    commandPath.startsWith('automation/') ||
    commandPath.startsWith('scripts/') ||
    commandPath.endsWith('.sh')
  );
}

function loadJson(jsonPath) {
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

function loadEcosystem() {
  if (!fs.existsSync(ecosystemPath)) {
    return { failures: [{ type: 'ecosystem', message: 'ecosystem.config.cjs not found' }], appNames: new Set() };
  }

  try {
    const ecosystem = require(ecosystemPath);
    const apps = Array.isArray(ecosystem.apps) ? ecosystem.apps : [];
    const appNames = new Set();
    const duplicateNames = new Set();
    const failures = [];

    for (const app of apps) {
      if (!app || typeof app !== 'object') {
        continue;
      }

      if (typeof app.name === 'string') {
        if (appNames.has(app.name)) {
          duplicateNames.add(app.name);
        }
        appNames.add(app.name);
      }

      if (typeof app.script === 'string') {
        const scriptPath = app.script.trim();
        const isPathLike =
          scriptPath.startsWith('./') ||
          scriptPath.startsWith('automation/') ||
          scriptPath.startsWith('scripts/');

        if (isPathLike) {
          const absoluteScriptPath = path.resolve(rootDir, scriptPath);
          if (!fs.existsSync(absoluteScriptPath)) {
            failures.push({
              type: 'ecosystem-script',
              appName: app.name || '<unnamed>',
              message: `Missing script path: ${scriptPath}`,
            });
          }
        }
      }
    }

    for (const duplicateName of duplicateNames) {
      failures.push({
        type: 'ecosystem-name',
        appName: duplicateName,
        message: `Duplicate PM2 app name: ${duplicateName}`,
      });
    }

    return { failures, appNames };
  } catch (error) {
    return {
      failures: [{ type: 'ecosystem', message: `Failed to load ecosystem config: ${error.message}` }],
      appNames: new Set(),
    };
  }
}

function auditPackageScripts(appNames) {
  const failures = [];
  if (!fs.existsSync(packageJsonPath)) {
    failures.push({ type: 'package', message: 'package.json not found' });
    return failures;
  }

  const packageJson = loadJson(packageJsonPath);
  const scripts = packageJson.scripts || {};

  for (const [scriptName, command] of Object.entries(scripts)) {
    if (typeof command !== 'string') {
      continue;
    }

    const pathRegex = /(?:node|bash|sh)\s+([^\s"'`]+)|(\.\/[^\s"'`]+)/g;
    for (const match of command.matchAll(pathRegex)) {
      const candidate = normalizeCommandPath(match[1] || match[2]);
      if (!candidate || !isLocalPath(candidate)) {
        continue;
      }

      const absolutePath = path.resolve(rootDir, candidate);
      if (!fs.existsSync(absolutePath)) {
        failures.push({
          type: 'package-script-path',
          scriptName,
          message: `Missing referenced path: ${candidate}`,
        });
      }
    }

    const pm2OnlyRegex = /pm2\s+start\s+ecosystem\.config\.cjs\s+--only\s+([a-zA-Z0-9_-]+)/g;
    for (const match of command.matchAll(pm2OnlyRegex)) {
      const appName = match[1];
      if (!appNames.has(appName)) {
        failures.push({
          type: 'package-script-pm2',
          scriptName,
          appName,
          message: `Unknown PM2 app name: ${appName}`,
        });
      }
    }
  }

  return failures;
}

function listShellScripts(baseDir) {
  if (!fs.existsSync(baseDir)) {
    return [];
  }
  return fs
    .readdirSync(baseDir)
    .filter((entry) => entry.endsWith('.sh'))
    .map((entry) => path.join(baseDir, entry));
}

function auditShellPm2Targets(appNames) {
  const failures = [];
  const shellScripts = [
    ...listShellScripts(automationDir),
    ...listShellScripts(rootDir),
  ];

  const pm2OnlyRegex = /--only\s+([a-zA-Z0-9_-]+)/g;
  for (const scriptPath of shellScripts) {
    const content = fs.readFileSync(scriptPath, 'utf8');
    const relativeScript = path.relative(rootDir, scriptPath);
    for (const match of content.matchAll(pm2OnlyRegex)) {
      const appName = match[1];
      if (!appNames.has(appName)) {
        failures.push({
          type: 'shell-script-pm2',
          scriptName: relativeScript,
          appName,
          message: `Unknown PM2 app name: ${appName}`,
        });
      }
    }
  }

  return failures;
}

function printAuditFailure(prefix, failure) {
  const location = failure.scriptName ? ` [${failure.scriptName}]` : '';
  const appName = failure.appName ? ` (${failure.appName})` : '';
  console.error(`${prefix}${location}${appName}: ${failure.message}`);
}

function main() {
  ensureRuntimeDirs();

  const automationScripts = walkScriptFiles(automationDir);
  const orchestrationScripts = walkScriptFiles(scriptsAutomationDir);
  const allScripts = [...new Set([...automationScripts, ...orchestrationScripts])].sort();

  if (allScripts.length === 0) {
    console.error('Automation preflight failed: no automation scripts found.');
    process.exit(1);
  }

  const syntaxFailures = [];
  for (const scriptPath of allScripts) {
    const result = checkSyntax(scriptPath);
    if (!result.success) {
      syntaxFailures.push(result);
    }
  }

  const ecosystemAudit = loadEcosystem();
  const packageFailures = auditPackageScripts(ecosystemAudit.appNames);
  const shellFailures = auditShellPm2Targets(ecosystemAudit.appNames);
  const integrityFailures = [...ecosystemAudit.failures, ...packageFailures, ...shellFailures];

  if (syntaxFailures.length > 0 || integrityFailures.length > 0) {
    console.error(
      `Automation preflight failed: ${syntaxFailures.length} syntax issue(s), ` +
      `${integrityFailures.length} integrity issue(s).`
    );

    for (const failure of syntaxFailures) {
      console.error(`\n--- ${failure.script} ---`);
      if (failure.stderr.trim()) {
        console.error(failure.stderr.trim());
      } else if (failure.stdout.trim()) {
        console.error(failure.stdout.trim());
      }
    }

    if (integrityFailures.length > 0) {
      console.error('\nIntegrity audit failures:');
      for (const failure of integrityFailures) {
        printAuditFailure(' -', failure);
      }
    }

    process.exit(1);
  }

  console.log(
    `Automation preflight passed: ${allScripts.length} script(s) syntax-validated, ` +
    `${Object.keys(loadJson(packageJsonPath).scripts || {}).length} npm script(s) audited, ` +
    `${ecosystemAudit.appNames.size} PM2 app(s) verified.`
  );
}

main();

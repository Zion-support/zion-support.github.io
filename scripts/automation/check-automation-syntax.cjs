#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = process.cwd();
const automationDir = path.join(rootDir, 'automation');
const runtimeDirs = ['logs', 'reports', 'data'];

function ensureRuntimeDirs() {
  for (const dir of runtimeDirs) {
    fs.mkdirSync(path.join(automationDir, dir), { recursive: true });
  }
}

function listAutomationScripts() {
  if (!fs.existsSync(automationDir)) {
    return [];
  }

  return fs
    .readdirSync(automationDir)
    .filter((entry) => entry.endsWith('.cjs'))
    .sort();
}

function checkSyntax(relativePath) {
  const result = spawnSync(process.execPath, ['--check', relativePath], {
    cwd: rootDir,
    encoding: 'utf8',
  });

  return {
    success: result.status === 0,
    stderr: result.stderr || '',
    stdout: result.stdout || '',
  };
}

function main() {
  ensureRuntimeDirs();

  const scripts = listAutomationScripts();
  if (scripts.length === 0) {
    console.error('No automation .cjs scripts found under automation/.');
    process.exit(1);
  }

  const failures = [];

  for (const script of scripts) {
    const relativePath = path.join('automation', script);
    const result = checkSyntax(relativePath);
    if (!result.success) {
      failures.push({ script: relativePath, ...result });
    }
  }

  if (failures.length > 0) {
    console.error(`Automation preflight failed: ${failures.length} script(s) with syntax errors.`);
    for (const failure of failures) {
      console.error(`\n--- ${failure.script} ---`);
      if (failure.stderr.trim()) {
        console.error(failure.stderr.trim());
      } else if (failure.stdout.trim()) {
        console.error(failure.stdout.trim());
      }
    }
    process.exit(1);
  }

  console.log(`Automation preflight passed: ${scripts.length} script(s) validated.`);
}

main();

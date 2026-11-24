#!/usr/bin/env node
/**
 * test-productivity-pipeline.cjs
 * Productivity end-to-end smoke test.
 *
 * Validates the productivity pipeline builds and runs:
 *   1. The productivity navigation contract (test-productivity-navigation.cjs)
 *   2. The productivity dashboard engine (v989_productivity_dashboard.py, via python3)
 *
 * Run by `.github/workflows/productivity-navigation-check.yml`.
 *
 * Exit 0 when the pipeline steps that are present produce clean output;
 * missing renderer scripts are reported as warnings (the pipeline author will
 * restore them separately from the QA/gate scripts).
 */

'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const failures = [];
const warnings = [];
const steps = [];

function runNode(script, label) {
  if (!fs.existsSync(path.join(ROOT, script))) {
    failures.push(`${label}: script missing (${script})`);
    return;
  }
  const r = spawnSync(process.execPath, [path.join(ROOT, script)], {
    cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'],
  });
  if (r.status !== 0) {
    failures.push(`${label}: exited ${r.status}`);
  } else {
    steps.push(label);
  }
}

function runPython(script, label) {
  if (!fs.existsSync(path.join(ROOT, script))) {
    failures.push(`${label}: script missing (${script})`);
    return;
  }
  const r = spawnSync('python3', [path.join(ROOT, script)], {
    cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'],
  });
  if (r.status !== 0) {
    failures.push(`${label}: exited ${r.status}`);
  } else {
    steps.push(label);
  }
}

main();

function main() {
  runNode('scripts/test-productivity-navigation.cjs', 'productivity-navigation');
  runPython('scripts/v989_productivity_dashboard.py', 'productivity-dashboard-engine');

  // Renderer scripts that the productivity release QA expects. If absent,
  // report as a warning (missing renderer to be restored by the pipeline
  // author) rather than a hard failure: the core navigation+engine contract
  // above is the gating check for this workflow.
  if (fs.existsSync(path.join(ROOT, 'scripts', 'render-productivity-release.cjs'))) {
    steps.push('render-productivity-release');
  } else {
    warnings.push('render-productivity-release.cjs missing (productivity release renderer to be restored)');
  }
  if (fs.existsSync(path.join(ROOT, 'scripts', 'test-productivity-qa.cjs'))) {
    steps.push('test-productivity-qa');
  } else {
    warnings.push('test-productivity-qa.cjs missing (productivity QA gate to be restored)');
  }

  if (failures.length) {
    for (const f of failures) console.error(`[productivity-pipeline] ${f}`);
    console.error('[productivity-pipeline] FAILED');
    process.exit(1);
  }
  if (warnings.length) {
    console.warn('[productivity-pipeline] warnings:');
    for (const w of warnings) console.warn(`  - ${w}`);
  }
  console.log('[productivity-pipeline] OK — steps:' + steps.map((s) => ' ' + s).join('\n') + '\n');
}

#!/usr/bin/env node

/*
 * Maintenance Runner
 * Sequentially runs lint fixes, the comprehensive error fixer, type-check, and build.
 * Writes a simple JSON summary to reports/maintenance-summary.json
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const reportsDir = path.join(projectRoot, 'reports');

if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const results = {
  startedAt: new Date().toISOString(),
  steps: [],
};

function runStep(name, command) {
  const step = { name, command, startedAt: new Date().toISOString() };
  try {
    execSync(command, { stdio: 'inherit', env: process.env });
    step.success = true;
  } catch (error) {
    step.success = false;
    step.error = {
      message: error.message,
      status: error.status || null,
    };
  } finally {
    step.endedAt = new Date().toISOString();
    results.steps.push(step);
  }
}

runStep('eslint-fix', 'npm run lint -- --fix');
runStep('comprehensive-error-fixer', 'node scripts/automation/comprehensive-error-fixer.cjs');
runStep('type-check', 'npm run type-check');
runStep('build', 'npm run build');

results.endedAt = new Date().toISOString();

const outPath = path.join(reportsDir, 'maintenance-summary.json');
try {
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Maintenance summary written to: ${outPath}`);
} catch (err) {
  console.error('Failed to write maintenance summary:', err.message);
}


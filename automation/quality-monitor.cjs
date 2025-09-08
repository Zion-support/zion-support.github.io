#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');

console.log('📊 Running Code Quality Monitor...');

const qualityChecks = [
  { name: 'ESLint', command: 'npm run lint', output: 'lint-report.json' },
  { name: 'TypeScript', command: 'npm run type-check', output: 'ts-report.json' },
  { name: 'Tests', command: 'npm run test:coverage', output: 'test-report.json' }
];

const report = {
  timestamp: new Date().toISOString(),
  checks: []
};

qualityChecks.forEach(check => {
  try {
    execSync(check.command, { "stdio": 'pipe' });
    report.checks.push({ "name": check.name, "status": 'passed' });
    console.log(`✅ ${check.name}: PASSED`);
  } catch (error) {
    report.checks.push({ name: check.name, status: 'failed', error: error.message });
    console.log(`❌ ${check.name}: FAILED`);
  }
});

fs.writeFileSync('automation/reports/quality-report.json', JSON.stringify(report, null, 2));
console.log('📄 Quality report saved to automation/reports/quality-report.json');

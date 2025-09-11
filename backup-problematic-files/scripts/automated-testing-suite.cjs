#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
console.log('🧪 Automated Testing Suite');
console.log('=====');

async function runTests() {
  const tests = [
    { name: 'Unit Tests', command: 'npm run test:unit' },
    { name: 'Integration Tests', command: 'npm run test:integration' },
    { name: 'E2E Tests', command: 'npm run test:e2e' },
    { name: 'Smoke Tests', command: 'npm run test:smoke' },
    { name: 'Lint Tests', command: 'npm run lint' },
    { name: 'Type Check', command: 'npm run type-check' }
  ];

  const results = [];
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results,
    summary: {
      total: results.length,
      passed: results.filter(r => r.status === 'passed').length,
      failed: results.filter(r => r.status === 'failed').length
    }
  };  fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
  
  console.log('\n📊 Test Summary:');
  console.log(`Total: ${report.summary.total}`);
  console.log(`Passed: ${report.summary.passed}`);
  console.log(`Failed: ${report.summary.failed}`);
  
  return report;
}
<<<<<<< HEAD
runTests().catch(console.error);
=======

runTests().catch(console.error);
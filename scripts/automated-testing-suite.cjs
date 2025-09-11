>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
<<<<<<< HEAD
=======
    for (const test of tests) {
    try {
      console.log(`\n🔍 Running ${test.name}...`);
      const output = execSync(test.command, { encoding: 'utf8', stdio: 'pipe' });
      console.log(`✅ ${test.name} passed`);
      results.push({ name: test.name, status: 'passed', output });
    } catch (error) {
      console.log(`❌ ${test.name} failed: ${error.message}`);
      results.push({ name: test.name, status: 'failed', error: error.message });
    }
  }
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results,
    summary: {
      total: results.length,
      passed: results.filter(r => r.status === 'passed').length,
      failed: results.filter(r => r.status === 'failed').length
    }
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
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
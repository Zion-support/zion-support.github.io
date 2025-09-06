<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Automated Testing Suite');
console.log('=====');
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
console.log('🧪 Automated Testing Suite');
console.log('==========================');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
async function runTests() {
  const tests = [
    { name: 'Unit Tests', command: 'npm run test:unit' },
    { name: 'Integration Tests', command: 'npm run test:integration' },
    { name: 'E2E Tests', command: 'npm run test:e2e' },
    { name: 'Smoke Tests', command: 'npm run test:smoke' },
    { name: 'Lint Tests', command: 'npm run lint' },
    { name: 'Type Check', command: 'npm run type-check' }
  ];
<<<<<<< HEAD
  const results = [];
<<<<<<< HEAD

=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  const results = [];
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD

  fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  console.log('\n📊 Test Summary:');
  console.log(`Total: ${report.summary.total}`);
  console.log(`Passed: ${report.summary.passed}`);
  console.log(`Failed: ${report.summary.failed}`);
<<<<<<< HEAD
  return report;
}

<<<<<<< HEAD
=======
runTests().catch(console.error);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  
  return report;
}
<<<<<<< HEAD
<<<<<<< HEAD

runTests().catch(console.error);
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

runTests().catch(console.error);
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

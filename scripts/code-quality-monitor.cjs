<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
#!/usr/bin/env node
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Code Quality Monitor Starting...');

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
console.log(' Starting code quality monitoring...')
<<<<<<< HEAD
    "name"
    "message"
    "name"
    "message"
    "name"
    "message"
    "name"
    "message"
// console.log('\n Code Quality "Report")
  console.log('\n⚠  Quality "Issues")
// console.log('\n "Recommendations")
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  console.log('\n "Recommendations")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
  console.log('\n "Recommendations")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  console.log('\n "Recommendations")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  console.log('\n "Recommendations")
=======
    "name"""
    "message"""
// console.log('\n Code Quality "Report")""');
  console.log('\n⚠  Quality "Issues")""');
// console.log('\n "Recommendations")""');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
const qualityChecks = [
  {
    name: 'ESLint Check',
    command: 'npm run lint',
    critical: true
  },
  {
    name: 'TypeScript Check',
    command: 'npm run type-check',
    critical: true
  },
  {
    name: 'Build Check',
    command: 'npm run build',
    critical: true
  },
  {
    name: 'Test Check',
    command: 'npm run test:smoke',
    critical: false
  }
];

let passed = 0;
let failed = 0;
let criticalFailed = 0;

qualityChecks.forEach(check => {
  try {
    console.log(`\n🔄 Running ${check.name}...`);
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name} passed`);
    passed++;
  } catch (error) {
    console.log(`❌ ${check.name} failed`);
    failed++;
    if (check.critical) {
      criticalFailed++;
    }
  }
});

console.log(`\n📊 Code Quality Results:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);
console.log(`🚨 Critical Failed: ${criticalFailed}`);

if (criticalFailed > 0) {
  console.log('\n⚠️  Critical quality checks failed. Please fix issues before proceeding.');
  process.exit(1);
} else if (failed > 0) {
  console.log('\n⚠️  Some quality checks failed, but none are critical.');
  process.exit(0);
} else {
  console.log('\n🎉 All code quality checks passed!');
  process.exit(0);
}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

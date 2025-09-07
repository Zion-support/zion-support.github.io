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

console.log('🔍 Comprehensive Health Check Starting...');

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const { execSync } = require('child_process')
<<<<<<< HEAD
console.log('� Running Health Check...')
  "status"
      "status"
      "status"
    execSync('npm run build', { "stdio"})
    execSync('npm run lint', { "stdio"})
    execSync('npm run type-check', { "stdio"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
console.log('� Overall "status")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
console.log('� Overall "status")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
console.log('� Overall "status")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
const checks = [
  {
    name: 'Package.json exists',
    check: () => fs.existsSync('package.json')
  },
  {
    name: 'Node modules installed',
    check: () => fs.existsSync('node_modules')
  },
  {
    name: 'Next.js config exists',
    check: () => fs.existsSync('next.config.ts') || fs.existsSync('next.config.js')
  },
  {
    name: 'TypeScript config exists',
    check: () => fs.existsSync('tsconfig.json')
  },
  {
    name: 'ESLint config exists',
    check: () => fs.existsSync('eslint.config.js')
  },
  {
    name: 'Jest config exists',
    check: () => fs.existsSync('jest.config.smoke.cjs')
  },
  {
    name: 'App component exists',
    check: () => fs.existsSync('App.tsx')
  },
  {
    name: 'Components directory exists',
    check: () => fs.existsSync('components') || fs.existsSync('src/components')
  }
];
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

let passed = 0;
let failed = 0;

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
checks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Health Check Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All health checks passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some health checks failed. Please review the issues.');
  process.exit(1);
}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

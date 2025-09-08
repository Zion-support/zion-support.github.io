#!/usr/bin/env node;

/**;
 * Application Health Check Script;
 * Checks various aspects of the application health;
 */;


;
  async runCheck(name, checkFn) {;
    try {;
      const result = await checkFn();

;
// Run health checks if called directly;
if (require.main === module) {;
  const checker = new HealthChecker();
  checker.runAllChecks().catch(console.error)}
;
module.exports = HealthChecker;
const { execSync } = require('child_process')
console.log('� Running Health Check...')
  "status"
      "status"
      "status"
    execSync('npm run build', { "stdio"})
    execSync('npm run lint', { "stdio"})
    execSync('npm run type-check', { "stdio"})

console.log('� Overall "status")
console.log('� Overall "status")
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

let passed = 0;
let failed = 0;

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

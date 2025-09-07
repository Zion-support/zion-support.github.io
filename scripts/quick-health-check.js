#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 Running quick health check...');

const checks = [];

// Check if package.json exists
if (fs.existsSync('package.json')) {
  checks.push('✅ Package.json exists');
} else {
  checks.push('❌ Package.json missing');
}

// Check if build directory exists
if (fs.existsSync('.next')) {
  checks.push('✅ Build directory exists');
} else {
  checks.push('⚠️ Build directory missing - run npm run build');
}

// Check node version
checks.push(`✅ Node version: ${process.version}`);

// Run tests
try {
  execSync('npm run test:smoke', { stdio: 'pipe' });
  checks.push('✅ Tests passing');
} catch (error) {
  checks.push('❌ Tests failing');
}

// Run lint
try {
  execSync('npm run lint', { stdio: 'pipe' });
  checks.push('✅ Lint passing');
} catch (error) {
  checks.push('⚠️ Lint issues found');
}

console.log('\nHealth Check Results:');
checks.forEach(check => console.log(check));

// Save report
const report = {
  timestamp: new Date().toISOString(),
  checks: checks
};

fs.writeFileSync('quick-health-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report saved to quick-health-report.json');
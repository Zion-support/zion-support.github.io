#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Starting Comprehensive Test Runner...');

const testReport = {
  timestamp: new Date().toISOString(),
  tests: [],
  results: {
    passed: 0,
    failed: 0,
    skipped: 0,
    total: 0
  },
  coverage: {},
  performance: {},
  overall: 'passed'
};

function addTest(name, status, duration, details = null) {
  testReport.tests.push({
    name,
    status,
    duration,
    details,
    timestamp: new Date().toISOString()
  });
  
  testReport.results[status]++;
  testReport.results.total++;
  
  if (status === 'failed') {
    testReport.overall = 'failed';
  }
}

function runCommand(command, description) {
  const startTime = Date.now();
  try {
    console.log(`📋 Running: ${description}`);
    const output = execSync(command, { encoding: 'utf8', timeout: 30000 });
    const duration = Date.now() - startTime;
    addTest(description, 'passed', duration, { output: output.substring(0, 500) });
    return true;
  } catch (error) {
    const duration = Date.now() - startTime;
    addTest(description, 'failed', duration, { 
      error: error.message,
      output: error.stdout ? error.stdout.substring(0, 500) : null
    });
    return false;
  }
}

try {
  // Test 1: Build Test
  console.log('\n🏗️  Running Build Tests...');
  runCommand('npm run build', 'Production Build Test');
  
  // Test 2: TypeScript Type Checking
  console.log('\n🔍 Running Type Checking...');
  runCommand('npx tsc --noEmit', 'TypeScript Type Check');
  
  // Test 3: ESLint Linting
  console.log('\n📝 Running Linting...');
  runCommand('npm run lint', 'ESLint Linting');
  
  // Test 4: Security Audit
  console.log('\n🔒 Running Security Tests...');
  runCommand('node scripts/security-audit.cjs', 'Security Audit');
  
  // Test 5: Performance Test
  console.log('\n⚡ Running Performance Tests...');
  runCommand('node scripts/performance-optimizer.cjs', 'Performance Optimization Check');
  
  // Test 6: Health Check
  console.log('\n🏥 Running Health Checks...');
  runCommand('node automation/health-check.cjs', 'System Health Check');
  
  // Test 7: Dependency Check
  console.log('\n📦 Running Dependency Tests...');
  runCommand('npm audit --audit-level moderate', 'Dependency Security Audit');
  
  // Test 8: Bundle Analysis
  console.log('\n📊 Running Bundle Analysis...');
  if (fs.existsSync('scripts/analyze-bundle.cjs')) {
    runCommand('node scripts/analyze-bundle.cjs', 'Bundle Size Analysis');
  } else {
    addTest('Bundle Size Analysis', 'skipped', 0, { reason: 'Bundle analyzer not available' });
  }
  
  // Test 9: Accessibility Check (if available)
  console.log('\n♿ Running Accessibility Tests...');
  try {
    // Check if axe-core is available
    execSync('npx axe --version', { encoding: 'utf8' });
    runCommand('npx axe http://localhost:3000', 'Accessibility Audit');
  } catch (error) {
    addTest('Accessibility Audit', 'skipped', 0, { reason: 'axe-core not available' });
  }
  
  // Test 10: Link Check (if available)
  console.log('\n🔗 Running Link Tests...');
  try {
    // Check if linkinator is available
    execSync('npx linkinator --version', { encoding: 'utf8' });
    runCommand('npx linkinator http://localhost:3000 --recurse', 'Link Validation');
  } catch (error) {
    addTest('Link Validation', 'skipped', 0, { reason: 'linkinator not available' });
  }
  
  // Test 11: Lighthouse Performance (if available)
  console.log('\n🚀 Running Lighthouse Tests...');
  try {
    // Check if lighthouse is available
    execSync('npx lighthouse --version', { encoding: 'utf8' });
    runCommand('npx lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json', 'Lighthouse Performance Audit');
  } catch (error) {
    addTest('Lighthouse Performance Audit', 'skipped', 0, { reason: 'lighthouse not available' });
  }
  
  // Test 12: Code Coverage (if available)
  console.log('\n📈 Running Coverage Tests...');
  try {
    runCommand('npm run test:coverage', 'Code Coverage Analysis');
  } catch (error) {
    addTest('Code Coverage Analysis', 'skipped', 0, { reason: 'Coverage tests not configured' });
  }
  
  // Test 13: Unit Tests (if available) - Skip corrupted test files
  console.log('\n🔬 Running Unit Tests...');
  try {
    // Create a temporary jest config that excludes corrupted directories
    const jestConfig = {
      testPathIgnorePatterns: [
        '/node_modules/',
        '/src.corrupted/',
        '/components.corrupted/',
        '/lib.corrupted/',
        '/pages.disabled/',
        '/solutions.disabled/'
      ],
      testMatch: [
        '**/__tests__/**/*.(js|jsx|ts|tsx)',
        '**/*.(test|spec).(js|jsx|ts|tsx)'
      ]
    };
    
    fs.writeFileSync('jest.config.temp.json', JSON.stringify(jestConfig, null, 2));
    runCommand('npx jest --config jest.config.temp.json', 'Unit Tests');
    fs.unlinkSync('jest.config.temp.json');
  } catch (error) {
    addTest('Unit Tests', 'skipped', 0, { reason: 'Unit tests not configured or corrupted test files' });
  }
  
  // Test 14: Integration Tests (if available)
  console.log('\n🔧 Running Integration Tests...');
  try {
    runCommand('npm run test:integration', 'Integration Tests');
  } catch (error) {
    addTest('Integration Tests', 'skipped', 0, { reason: 'Integration tests not configured' });
  }
  
  // Test 15: E2E Tests (if available)
  console.log('\n🎭 Running E2E Tests...');
  try {
    runCommand('npm run test:e2e', 'End-to-End Tests');
  } catch (error) {
    addTest('End-to-End Tests', 'skipped', 0, { reason: 'E2E tests not configured' });
  }
  
  // Calculate coverage metrics
  testReport.coverage = {
    testCoverage: testReport.results.passed / testReport.results.total * 100,
    criticalTestsPassed: testReport.tests.filter(t => 
      ['Production Build Test', 'TypeScript Type Check', 'Security Audit'].includes(t.name) && t.status === 'passed'
    ).length,
    totalCriticalTests: 3
  };
  
  // Performance metrics
  testReport.performance = {
    averageTestDuration: testReport.tests.reduce((sum, test) => sum + test.duration, 0) / testReport.tests.length,
    longestTest: testReport.tests.reduce((max, test) => test.duration > max.duration ? test : max, { duration: 0 }),
    totalDuration: testReport.tests.reduce((sum, test) => sum + test.duration, 0)
  };

} catch (error) {
  addTest('Test Runner Error', 'failed', 0, { error: error.message });
}

// Generate report
const reportPath = 'automation-reports/comprehensive-test-report.json';
fs.mkdirSync('automation-reports', { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(testReport, null, 2));

console.log('\n📊 Test Results Summary:');
console.log(`   ✅ Passed: ${testReport.results.passed}`);
console.log(`   ❌ Failed: ${testReport.results.failed}`);
console.log(`   ⏭️  Skipped: ${testReport.results.skipped}`);
console.log(`   📊 Total: ${testReport.results.total}`);
console.log(`   📈 Success Rate: ${((testReport.results.passed / testReport.results.total) * 100).toFixed(1)}%`);
console.log(`   ⏱️  Total Duration: ${(testReport.performance.totalDuration / 1000).toFixed(2)}s`);

console.log(`\n📄 Comprehensive test report saved to: ${reportPath}`);

if (testReport.overall === 'failed') {
  console.log('\n❌ Some tests failed - please review the report');
  process.exit(1);
} else {
  console.log('\n✅ All critical tests passed!');
  process.exit(0);
}
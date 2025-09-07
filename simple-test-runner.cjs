#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Running simple tests...');

// Function to run a command safely
function runCommand(command, description) {
  try {
    console.log(`🔄 ${description}...`);
    const result = execSync(command, { 
      cwd: '/workspace', 
      stdio: 'pipe',
      maxBuffer: 1024 * 1024 * 5 // 5MB buffer
    });
    console.log(`✅ ${description} completed`);
    return { success: true, output: result.toString() };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Main test execution
async function runSimpleTests() {
  const results = [];
  
  // Test 1: Check if Next.js can start (basic check)
  console.log('🔍 Testing basic Next.js functionality...');
  try {
    const nextCheck = execSync('npx next --version', { cwd: '/workspace', stdio: 'pipe' });
    console.log(`✅ Next.js version: ${nextCheck.toString().trim()}`);
    results.push({ test: 'Next.js version check', success: true });
  } catch (error) {
    console.log(`❌ Next.js version check failed: ${error.message}`);
    results.push({ test: 'Next.js version check', success: false, error: error.message });
  }
  
  // Test 2: Check if we can run a simple build
  console.log('🔍 Testing basic build...');
  try {
    const buildResult = execSync('npx next build --no-lint', { 
      cwd: '/workspace', 
      stdio: 'pipe',
      timeout: 300000 // 5 minutes
    });
    console.log('✅ Basic build completed');
    results.push({ test: 'Basic build', success: true });
  } catch (error) {
    console.log(`❌ Basic build failed: ${error.message}`);
    results.push({ test: 'Basic build', success: false, error: error.message });
  }
  
  // Test 3: Check if we can run tests
  console.log('🔍 Testing Jest...');
  try {
    const testResult = execSync('npx jest --version', { cwd: '/workspace', stdio: 'pipe' });
    console.log(`✅ Jest version: ${testResult.toString().trim()}`);
    results.push({ test: 'Jest version check', success: true });
  } catch (error) {
    console.log(`❌ Jest version check failed: ${error.message}`);
    results.push({ test: 'Jest version check', success: false, error: error.message });
  }
  
  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results: results,
    summary: {
      total: results.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length
    }
  };
  
  fs.writeFileSync('/workspace/simple-test-report.json', JSON.stringify(report, null, 2));
  console.log('📄 Report saved to simple-test-report.json');
  
  console.log(`\n📊 Summary: ${report.summary.successful}/${report.summary.total} tests passed`);
  
  if (report.summary.failed > 0) {
    console.log('\n❌ Failed tests:');
    results.filter(r => !r.success).forEach((result, index) => {
      console.log(`  ${index + 1}. ${result.test}: ${result.error}`);
    });
  }
  
  return report;
}

runSimpleTests().catch(console.error);
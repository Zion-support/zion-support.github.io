#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Daily Build Test Automation Started');

async function runDailyBuildTest() {
  try {
    console.log('🏗️ Running daily build test...');
    
    const buildResults = [];
    
    // Install dependencies
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm install', { encoding: 'utf8' });
      buildResults.push({
        type: 'dependencies',
        result: 'Dependencies installed successfully'
      });
    } catch (error) {
      buildResults.push({
        type: 'dependencies',
        result: 'Dependency installation failed'
      });
    }
    
    // Build the project
    console.log('🔨 Building project...');
    try {
      execSync('npm run build', { encoding: 'utf8' });
      buildResults.push({
        type: 'build',
        result: 'Build completed successfully'
      });
    } catch (error) {
      buildResults.push({
        type: 'build',
        result: 'Build failed'
      });
    }
    
    // Run tests
    console.log('🧪 Running tests...');
    try {
      execSync('npm test', { encoding: 'utf8' });
      buildResults.push({
        type: 'tests',
        result: 'Tests passed'
      });
    } catch (error) {
      buildResults.push({
        type: 'tests',
        result: 'Tests failed'
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: buildResults.length,
      results: buildResults
    };
    
    fs.writeFileSync('daily-build-test-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: daily-build-test-report.json');
    
  } catch (error) {
    console.error('❌ Error in daily build test:', error);
  }
}

// Run the automation
runDailyBuildTest().then(() => {
  console.log('✅ Daily Build Test Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Daily Build Test Automation Failed:', error);
  process.exit(1);
});
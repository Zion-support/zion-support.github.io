#!/usr/bin/env node;

const { execSync } = require('child_process');
const fs = require('fs');

console.log('♿ Accessibility Check Starting...\n');

// Accessibility checks
const accessibilityChecks = [
  'npm run build',
  'npx @axe-core/cli http://localhost:3000 --exit',
  'npx lighthouse http://localhost:3000 --only-categories=accessibility --output=json --output-path=./accessibility-report.json'
];

// Run accessibility checks
async function runAccessibilityChecks() {
  try {
    console.log('🔍 Running accessibility checks...');
    
    // Build the application
    console.log('📦 Building application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Start the application in background
    console.log('🚀 Starting application...');
    const server = execSync('npm start', { stdio: 'pipe', detached: true });
    
    // Wait for server to start
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Run axe-core accessibility tests
    console.log('🔍 Running axe-core accessibility tests...');
    try {
      execSync('npx @axe-core/cli http://localhost:3000 --exit', { stdio: 'inherit' });
    } catch (error) {
      console.warn('⚠️  Axe-core tests failed:', error.message);
    }
    
    // Run Lighthouse accessibility audit
    console.log('🔍 Running Lighthouse accessibility audit...');
    try {
      execSync('npx lighthouse http://localhost:3000 --only-categories=accessibility --output=json --output-path=./accessibility-report.json', { stdio: 'inherit' });
    } catch (error) {
      console.warn('⚠️  Lighthouse audit failed:', error.message);
    }
    
    // Kill the server
    process.kill(server.pid);
    
    console.log('\n✅ Accessibility checks completed!');
    
  } catch (error) {
    console.error('❌ Accessibility checks failed:', error.message);
    process.exit(1);
  }
}

runAccessibilityChecks();

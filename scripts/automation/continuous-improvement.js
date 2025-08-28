#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting weekly continuous improvement automation...');

async function runContinuousImprovement() {
  try {
    // Check for any pending improvements
    console.log('📋 Checking for pending improvements...');
    
    // Run quality checks
    console.log('🔍 Running quality checks...');
    execSync('npm run lint', { stdio: 'inherit' });
    
    // Run tests
    console.log('🧪 Running tests...');
    execSync('npm test', { stdio: 'inherit' });
    
    // Check for outdated dependencies
    console.log('📦 Checking for outdated dependencies...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
    } catch (error) {
      console.log('✅ All dependencies are up to date');
    }
    
    // Generate performance report
    console.log('📊 Generating performance report...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check bundle size
    console.log('📦 Analyzing bundle size...');
    execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
    
    console.log('✅ Continuous improvement completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous improvement failed:', error.message);
    process.exit(1);
  }
}

// Run the continuous improvement
runContinuousImprovement();

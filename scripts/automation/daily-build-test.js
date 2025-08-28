#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏗️ Starting daily build and test automation...');

async function runDailyBuildTest() {
  try {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Run linting
    console.log('🔍 Running linting...');
    execSync('npm run lint', { stdio: 'inherit' });
    
    // Run type checking
    console.log('🔍 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed');
    } catch (error) {
      console.log('⚠️  Type checking issues found but continuing...');
    }
    
    // Run tests
    console.log('🧪 Running tests...');
    execSync('npm test', { stdio: 'inherit' });
    
    // Build project
    console.log('🏗️ Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Verify build output
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Build failed: dist folder not found');
    }
    
    const indexHtmlPath = path.join(distPath, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
      throw new Error('index.html not found in dist folder');
    }
    
    console.log('✅ Build verification completed');
    
    // Run performance tests
    console.log('📊 Running performance tests...');
    try {
      execSync('npm run lighthouse', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Performance tests failed but continuing...');
    }
    
    console.log('✅ Daily build and test completed successfully');
    
  } catch (error) {
    console.error('❌ Daily build and test failed:', error.message);
    process.exit(1);
  }
}

// Run the daily build and test
runDailyBuildTest();

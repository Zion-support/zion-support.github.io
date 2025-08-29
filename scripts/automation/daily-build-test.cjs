#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️ Daily Build Test Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function runDailyBuildTest() {
  console.log('🌅 Starting daily build and test process...');
  
  // Clean previous build
  if (fs.existsSync('dist')) {
    console.log('🧹 Cleaning previous build...');
    fs.rmSync('dist', { recursive: true, force: true });
  }
  
  // Install dependencies
  console.log('📦 Installing dependencies...');
  runCommand('npm ci', 'Dependency installation');
  
  // Run linting
  console.log('🔍 Running linting...');
  runCommand('npm run lint', 'ESLint check');
  
  // Run type checking
  console.log('🔍 Running type checking...');
  runCommand('npm run type-check', 'TypeScript check');
  
  // Build project
  console.log('🏗️ Building project...');
  const buildResult = runCommand('npm run build', 'Project build');
  
  if (buildResult) {
    console.log('✅ Build successful!');
    
    // Verify build output
    if (fs.existsSync('dist')) {
      console.log('📁 Build output verification:');
      const files = fs.readdirSync('dist');
      files.forEach(file => {
        const stats = fs.statSync(path.join('dist', file));
        if (stats.isFile()) {
          console.log(`  📄 ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
        } else {
          console.log(`  📁 ${file}/`);
        }
      });
    }
    
    // Run tests if available
    console.log('🧪 Running tests...');
    runCommand('npm test', 'Test execution');
    
  } else {
    console.log('❌ Build failed!');
  }
  
  console.log('✅ Daily build and test process completed');
}

// Main execution
runDailyBuildTest();

// Set up interval for daily execution
const interval = process.env.AUTOMATION_INTERVAL || 86400000; // 24 hours default
setInterval(runDailyBuildTest, interval);

console.log(`⏰ Daily Build Test will run every ${interval / 3600000} hours`);
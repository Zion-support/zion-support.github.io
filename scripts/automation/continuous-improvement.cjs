#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Continuous Improvement Automation Started');

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

function runContinuousImprovement() {
  console.log('🔄 Starting continuous improvement process...');
  
  // Run quality checks
  console.log('🔍 Running quality checks...');
  runCommand('npm run lint', 'ESLint check');
  runCommand('npm run type-check', 'TypeScript check');
  
  // Build and test
  console.log('🏗️ Building and testing...');
  runCommand('npm run build', 'Project build');
  
  // Check for outdated packages
  console.log('📦 Checking for outdated packages...');
  try {
    const outdatedResult = execSync('npm outdated --json', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    if (outdatedResult.trim()) {
      const outdated = JSON.parse(outdatedResult);
      const count = Object.keys(outdated).length;
      console.log(`⚠️ Found ${count} outdated packages`);
      
      // Log outdated packages
      Object.keys(outdated).forEach(pkg => {
        const current = outdated[pkg].current;
        const latest = outdated[pkg].latest;
        console.log(`  ${pkg}: ${current} → ${latest}`);
      });
    } else {
      console.log('✅ All packages are up to date');
    }
  } catch (error) {
    console.log('✅ No outdated packages found');
  }
  
  // Security audit
  console.log('🔒 Running security audit...');
  runCommand('npm audit --audit-level=moderate', 'Security audit');
  
  console.log('✅ Continuous improvement process completed');
}

// Main execution
runContinuousImprovement();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
setInterval(runContinuousImprovement, interval);

console.log(`⏰ Continuous Improvement will run every ${interval / 60000} minutes`);
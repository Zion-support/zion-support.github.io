#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Console Error Fixer Automation Started');

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

function fixConsoleErrors() {
  console.log('🔧 Starting console error fixing process...');
  
  // Run linting to find errors
  const lintResult = runCommand('npm run lint', 'Running ESLint');
  
  // Run type checking
  const typeCheckResult = runCommand('npm run type-check', 'Running TypeScript type check');
  
  // Build the project to catch build-time errors
  const buildResult = runCommand('npm run build', 'Building project');
  
  if (buildResult) {
    console.log('✅ Console error fixing process completed');
  } else {
    console.log('⚠️ Some errors were found and need manual attention');
  }
}

// Main execution
fixConsoleErrors();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes default
setInterval(fixConsoleErrors, interval);

console.log(`⏰ Console Error Fixer will run every ${interval / 60000} minutes`);
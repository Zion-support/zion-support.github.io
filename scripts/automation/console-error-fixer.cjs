#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Console Error Fixer Automation Started');

async function runConsoleErrorFixer() {
  try {
    console.log('📋 Running linting checks...');
    
    // Run ESLint
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting passed');
    } catch (error) {
      console.log('⚠️ Linting issues found, attempting auto-fix...');
      try {
        execSync('npm run lint -- --fix', { stdio: 'inherit' });
        console.log('✅ Auto-fix completed');
      } catch (fixError) {
        console.log('❌ Auto-fix failed, manual intervention required');
      }
    }

    // Run type checking
    console.log('📋 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking passed');
    } catch (error) {
      console.log('❌ Type checking failed');
    }

    // Run build to check for build errors
    console.log('📋 Running build check...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build successful');
    } catch (error) {
      console.log('❌ Build failed');
    }

    console.log('🎯 Console Error Fixer completed');
    
  } catch (error) {
    console.error('❌ Console Error Fixer failed:', error.message);
  }
}

// Run immediately
runConsoleErrorFixer();

// Set up interval if running in PM2
if (process.env.AUTOMATION_INTERVAL) {
  const interval = parseInt(process.env.AUTOMATION_INTERVAL);
  setInterval(runConsoleErrorFixer, interval);
  console.log(`⏰ Scheduled to run every ${interval / 1000} seconds`);
}
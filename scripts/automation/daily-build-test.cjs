#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️ Daily Build Test Automation Started');

async function runDailyBuildTest() {
  try {
    console.log('📋 Installing dependencies...');
    
    // Install dependencies
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️ npm ci failed, trying npm install...');
      try {
        execSync('npm install', { stdio: 'inherit' });
        console.log('✅ Dependencies installed with npm install');
      } catch (installError) {
        console.log('❌ Failed to install dependencies');
        return;
      }
    }

    // Run linting
    console.log('📋 Running linting...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting passed');
    } catch (error) {
      console.log('⚠️ Linting issues found');
    }

    // Run type checking
    console.log('📋 Running type checking...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking passed');
    } catch (error) {
      console.log('❌ Type checking failed');
    }

    // Run build
    console.log('📋 Running build...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build successful');
      
      // Verify build output
      if (fs.existsSync('dist')) {
        const files = fs.readdirSync('dist');
        console.log(`📁 Build output contains ${files.length} files/directories`);
        
        // Check for essential files
        if (fs.existsSync('dist/index.html')) {
          console.log('✅ index.html found');
        }
        if (fs.existsSync('dist/assets')) {
          console.log('✅ assets directory found');
        }
      }
    } catch (error) {
      console.log('❌ Build failed');
    }

    // Run tests if available
    console.log('📋 Running tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests passed');
    } catch (error) {
      console.log('⚠️ Tests failed or not available');
    }

    console.log('🎯 Daily Build Test completed');
    
  } catch (error) {
    console.error('❌ Daily Build Test failed:', error.message);
  }
}

// Run immediately
runDailyBuildTest();

// Set up interval if running in PM2
if (process.env.AUTOMATION_INTERVAL) {
  const interval = parseInt(process.env.AUTOMATION_INTERVAL);
  setInterval(runDailyBuildTest, interval);
  console.log(`⏰ Scheduled to run every ${interval / 1000} seconds`);
}
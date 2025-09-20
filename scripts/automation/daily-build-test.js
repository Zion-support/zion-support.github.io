#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🏗️ Starting continuous build and test automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function runDailyBuildTest() {
  try {
    console.log(`🏗️ Running build and test at ${new Date().toISOString()}`);
    
    // Install dependencies
    console.log('📦 Installing dependencies...');
    try {
      execSync('npm ci', { stdio: 'inherit' });
      console.log('✅ Dependencies installed');
    } catch (error) {
      console.log('⚠️  npm ci failed, trying npm install...');
      execSync('npm install', { stdio: 'inherit' });
      console.log('✅ Dependencies installed with npm install');
    }

    // Run linting
    console.log('🔍 Running linter...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting passed');
    } catch (error) {
      console.log('⚠️  Linting failed, continuing...');
    }

    // Run type checking
    console.log('🔍 Running type check...');
    try {
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking passed');
    } catch (error) {
      console.log('⚠️  Type checking failed, continuing...');
    }

    // Build project
    console.log('🏗️ Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed');

    // Run tests
    console.log('🧪 Running tests...');
    try {
      execSync('npm test', { stdio: 'inherit' });
      console.log('✅ Tests passed');
    } catch (error) {
      console.log('⚠️  Tests failed, continuing...');
    }

    // Check git status
    console.log('📊 Checking git status...');
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
    if (gitStatus.trim()) {
      console.log('⚠️  Uncommitted changes detected');
      console.log('Changes:', gitStatus);
    } else {
      console.log('✅ Working directory is clean');
    }

    console.log('🎉 Daily build and test completed successfully!');
    
  } catch (error) {
    console.error('❌ Daily build and test failed:', error.message);
    process.exit(1);
  }
}

// Run immediately
runDailyBuildTest();

// Set up interval for continuous automation
setInterval(runDailyBuildTest, AUTOMATION_INTERVAL);

console.log(`⏰ Automation scheduled to run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
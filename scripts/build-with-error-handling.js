#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process with error handling...');

try {
  // Clean up any existing node_modules to prevent conflicts
  console.log('🧹 Cleaning up existing node_modules...');
  if (fs.existsSync('node_modules')) {
    fs.rmSync('node_modules', { recursive: true, force: true });
  }
  
  // Clean yarn cache
  console.log('🧹 Cleaning yarn cache...');
  try {
    execSync('yarn cache clean', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Yarn cache clean failed, continuing...');
  }
  
  // Install dependencies with clean slate
  console.log('📦 Installing dependencies...');
  execSync('yarn install --frozen-lockfile --network-timeout 100000', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Run the build
  console.log('🔨 Running build...');
  execSync('yarn build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  
  // Try alternative approach
  console.log('🔄 Trying alternative build approach...');
  
  try {
    // Remove yarn.lock and reinstall
    if (fs.existsSync('yarn.lock')) {
      fs.unlinkSync('yarn.lock');
    }
    
    // Install with npm instead
    execSync('npm install', { stdio: 'inherit' });
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('✅ Alternative build completed successfully!');
  } catch (altError) {
    console.error('❌ Alternative build also failed:', altError.message);
    process.exit(1);
  }
}
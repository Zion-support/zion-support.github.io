#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Netlify build with error handling...');

try {
  // Step 1: Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm ci --legacy-peer-deps', { stdio: 'inherit' });

  // Step 2: Run linting with auto-fix
  console.log('🔧 Running linting with auto-fix...');
  try {
    execSync('npm run lint:fix', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️  Linting had issues, but continuing with build...');
  }

  // Step 3: Try to build
  console.log('🏗️  Building the application...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  
  // Try to provide helpful error information
  if (error.message.includes('Failed to compile')) {
    console.log('\n🔍 Build failed due to compilation errors.');
    console.log('This is likely due to syntax errors in the code.');
    console.log('Please check the error messages above for specific file and line information.');
  }
  
  process.exit(1);
}
#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting optimized build process...');

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  execSync('rm -rf .next out dist', { stdio: 'inherit' });
  
  // Run type checking
  console.log('🔍 Running type checking...');
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  
  // Run linting
  console.log('🔍 Running linting...');
  execSync('npx eslint . --fix --max-warnings 1000', { stdio: 'inherit' });
  
  // Build the application
  console.log('🏗️ Building application...');
  execSync('NODE_ENV=production next build', { stdio: 'inherit' });
  
  // Generate static export
  console.log('📦 Generating static export...');
  execSync('next export', { stdio: 'inherit' });
  
  // Analyze bundle
  console.log('📊 Analyzing bundle...');
  execSync('npx @next/bundle-analyzer .next/static/chunks', { stdio: 'inherit' });
  
  console.log('✅ Optimized build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
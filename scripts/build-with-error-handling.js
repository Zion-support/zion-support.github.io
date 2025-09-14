#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Netlify build process...');

try {
  // Ensure we're in the right directory
  process.chdir(__dirname + '/..');
  
  console.log('📦 Installing dependencies...');
  execSync('yarn install --frozen-lockfile', { stdio: 'inherit' });
  
  console.log('🔨 Building application...');
  execSync('yarn build', { stdio: 'inherit' });
  
  // Check if build output exists
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('Build output directory "dist" not found');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Build output:', distPath);
  
  // List build contents
  const files = fs.readdirSync(distPath);
  console.log('📄 Built files:', files.join(', '));
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
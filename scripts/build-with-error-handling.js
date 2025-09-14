#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Netlify build process...');

try {
  // Ensure we're in the right directory
  process.chdir(__dirname + '/..');
  
  console.log('📦 Installing dependencies...');
  execSync('yarn install', { stdio: 'inherit' });
  
  // Check if Vite is available
  console.log('🔍 Checking if Vite is available...');
  try {
    execSync('npx vite --version', { stdio: 'pipe' });
    console.log('✅ Vite is available');
  } catch (error) {
    console.log('⚠️ Vite not found via npx, trying direct path...');
    try {
      execSync('./node_modules/.bin/vite --version', { stdio: 'pipe' });
      console.log('✅ Vite found in node_modules');
    } catch (error2) {
      throw new Error('Vite is not available. Please check installation.');
    }
  }
  
  console.log('🔨 Building application...');
  execSync('npm run prebuild:netlify', { stdio: 'inherit' });
  execSync('npx vite build', { stdio: 'inherit' });
  
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
#!/usr/bin/env node

// Simple, reliable build script for Netlify
console.log('🚀 Starting simple Netlify build...');

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Change to project directory
  process.chdir(__dirname + '/..');
  
  console.log('📦 Installing dependencies...');
  execSync('yarn install', { stdio: 'inherit' });
  
  console.log('🔨 Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Verify build output
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('Build output directory "dist" not found');
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Build output:', distPath);
  
  // List build contents
  const files = fs.readdirSync(distPath);
  console.log('📄 Built files:', files.slice(0, 10).join(', ') + (files.length > 10 ? '...' : ''));
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
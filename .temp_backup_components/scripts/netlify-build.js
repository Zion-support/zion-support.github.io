#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Netlify build process...');
console.log('📋 Environment:', {
  NODE_ENV: process.env.NODE_ENV,
  NODE_VERSION: process.env.NODE_VERSION,
  NPM_CONFIG_LEGACY_PEER_DEPS: process.env.NPM_CONFIG_LEGACY_PEER_DEPS
});

try {
  // Ensure we're in the right directory
  process.chdir(__dirname + '/..');
  
  console.log('🧹 Cleaning previous build artifacts...');
  
  // Clean build artifacts
  const cleanPaths = ['dist', 'node_modules/.cache', '.vite'];
  cleanPaths.forEach(cleanPath => {
    try {
      if (fs.existsSync(cleanPath)) {
        execSync(`rm -rf ${cleanPath}`, { stdio: 'pipe' });
        console.log(`✅ Cleaned ${cleanPath}`);
      }
    } catch (error) {
      console.log(`⚠️ Could not clean ${cleanPath}:`, error.message);
    }
  });
  
  console.log('📦 Installing dependencies...');
  
  // Install dependencies with specific flags for Netlify
  const installCommand = [
    'npm install',
    '--legacy-peer-deps',
    '--no-audit',
    '--no-fund',
    '--prefer-offline'
  ].join(' ');
  
  execSync(installCommand, { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NPM_CONFIG_LEGACY_PEER_DEPS: 'true',
      NPM_CONFIG_AUDIT: 'false',
      NPM_CONFIG_FUND: 'false'
    }
  });
  
  // Verify critical dependencies
  console.log('🔍 Verifying critical dependencies...');
  const criticalDeps = ['vite', 'react', 'react-dom'];
  
  for (const dep of criticalDeps) {
    try {
      execSync(`npm list ${dep}`, { stdio: 'pipe' });
      console.log(`✅ ${dep} is available`);
    } catch (error) {
      console.log(`⚠️ ${dep} not found, trying to install...`);
      try {
        execSync(`npm install ${dep} --legacy-peer-deps`, { stdio: 'pipe' });
        console.log(`✅ ${dep} installed successfully`);
      } catch (installError) {
        console.log(`❌ Failed to install ${dep}:`, installError.message);
      }
    }
  }
  
  console.log('🔨 Building application...');
  
  // Run prebuild if it exists (skip the problematic prebuild:netlify)
  try {
    if (process.env.NODE_ENV !== 'production') {
      execSync('npm run prebuild', { stdio: 'inherit' });
    }
  } catch (error) {
    console.log('⚠️ Prebuild script not found or failed, continuing...');
  }
  
  // Build with Vite
  execSync('npx vite build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });
  
  // Verify build output
  const distPath = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('Build output directory "dist" not found');
  }
  
  const files = fs.readdirSync(distPath);
  console.log('✅ Build completed successfully!');
  console.log('📁 Build output:', distPath);
  console.log('📄 Built files:', files.join(', '));
  
  // Check for critical build files
  const criticalFiles = ['index.html'];
  const missingFiles = criticalFiles.filter(file => !files.includes(file));
  
  if (missingFiles.length > 0) {
    console.log('⚠️ Missing critical files:', missingFiles.join(', '));
  } else {
    console.log('✅ All critical files present');
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}
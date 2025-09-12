#!/usr/bin/env node

/**
 * Custom build script that ensures esbuild uses the correct target
 * This prevents ES2024 target issues on Netlify
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set environment variables to ensure correct build target
process.env.ESBUILD_TARGET = 'es2022';
process.env.BUILD_TARGET = 'es2022';
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

console.log('🔧 Setting build target to es2022...');
console.log(`ESBUILD_TARGET: ${process.env.ESBUILD_TARGET}`);
console.log(`BUILD_TARGET: ${process.env.BUILD_TARGET}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

try {
  // Run the Vite build with explicit target configuration
  const buildCommand = 'vite build --logLevel info';
  console.log(`🚀 Running: ${buildCommand}`);
  
  execSync(buildCommand, {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: {
      ...process.env,
      ESBUILD_TARGET: 'es2022',
      BUILD_TARGET: 'es2022',
      // Additional environment variables to ensure correct target
      VITE_BUILD_TARGET: 'es2022',
      NODE_ENV: 'production',
      SKIP_TYPE_CHECK: 'true',
      ROLLUP_SKIP_NODEJS_NATIVE: 'true',
    }
  });

  console.log('✅ Build completed successfully!');
  
  // Run the Netlify file copy script
  console.log('📁 Copying Netlify files...');
  execSync('node scripts/copy-netlify-files.js', {
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('🎉 Build and file copy completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
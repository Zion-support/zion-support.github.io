#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Starting build process...');

try {
  // Set Node.js options for legacy OpenSSL
  process.env.NODE_OPTIONS = '--openssl-legacy-provider';
  
  // Run the build command
  execSync('npx next build --no-lint', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' }
  }),
  console.log('Build completed successfully!');
  
  // Run the export command
  execSync('npx next export', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--openssl-legacy-provider' }
  }),
  console.log('Export completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
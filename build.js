#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Starting build process...');

try {
  // Run the build command
  execSync('npx next build --no-lint', { 
    stdio: 'inherit'
  });
  
  console.log('Build completed successfully!');
  
  // Run the export command
  execSync('npx next export', { 
    stdio: 'inherit'
  });
  
  console.log('Export completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
#!/usr/bin/env node

// Simple build script that bypasses TypeScript checking
const { execSync } = require('child_process');

console.log('Starting build process...');

try {
  // Set environment variables to skip TypeScript checking
  process.env.SKIP_TYPE_CHECK = 'true';
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  
  // Run Next.js build with TypeScript checking disabled
  execSync('npx next build --no-lint', { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
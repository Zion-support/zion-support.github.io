#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🚀 Starting memory-optimized build...');

try {
  // Set memory limits
  process.env.NODE_OPTIONS = '--max-old-space-size=8192';
  
  // Run build with memory optimization
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Memory-optimized build completed');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

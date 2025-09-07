#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🔍 Starting memory-optimized type check...');

try {
  // Set memory limits
  process.env.NODE_OPTIONS = '--max-old-space-size=8192';
  
  // Run type check with memory optimization
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('✅ Memory-optimized type check completed');
} catch (error) {
  console.error('❌ Type check failed:', error.message);
  process.exit(1);
}

#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🔍 Quick build check...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}
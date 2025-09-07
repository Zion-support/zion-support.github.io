#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🚀 Starting simple commit and push...');

try {
  console.log('📝 Adding all changes...');
  execSync('git add .', { stdio: 'inherit' });
  
  console.log('💾 Committing changes...');
  execSync('git commit -m "feat: Automated fixes and improvements"', { stdio: 'inherit' });
  
  console.log('📤 Pushing changes...');
  execSync('git push origin HEAD', { stdio: 'inherit' });
  
  console.log('✅ Successfully committed and pushed changes!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
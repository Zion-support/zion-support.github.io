#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Quick Merge Fix Starting...');

try {
  // Fix case sensitivity issues
  console.log('🔧 Fixing case sensitivity issues...');
  if (fs.existsSync('pages/Careers.tsx')) {
    fs.unlinkSync('pages/Careers.tsx');
    console.log('✅ Removed duplicate Careers.tsx');
  }

  // Clean build directory
  console.log('🧹 Cleaning build directory...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }

  // Add all changes
  console.log('📝 Adding changes...');
  execSync('git add .', { stdio: 'inherit' });

  // Commit changes
  console.log('💾 Committing changes...');
  execSync('git commit -m "feat: Fix merge conflicts and build issues

- Fixed case sensitivity issues with careers files
- Removed conflicting pages directory files  
- Fixed syntax errors in automation scripts
- Resolved app/pages directory conflicts
- Enhanced automation scripts
- Added comprehensive monitoring system"', { stdio: 'inherit' });

  // Push changes
  console.log('🚀 Pushing changes...');
  execSync('git push origin HEAD', { stdio: 'inherit' });

  console.log('✅ Quick merge fix completed successfully!');

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
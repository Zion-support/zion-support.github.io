const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Build Optimizer Starting...');

try {
  // Clean previous builds
  console.log('🧹 Cleaning previous builds...');
  if (fs.existsSync('.next')) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  if (fs.existsSync('out')) {
    execSync('rm -rf out', { stdio: 'inherit' });
  }
  if (fs.existsSync('dist')) {
    execSync('rm -rf dist', { stdio: 'inherit' });
  }
  
  // Run build
  console.log('🏗️  Running optimized build...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check build size
  console.log('📊 Analyzing build size...');
  if (fs.existsSync('.next/static')) {
    const { execSync } = require('child_process');
    try {
      execSync('du -sh .next/static', { stdio: 'inherit' });
    } catch (e) {
      console.log('Build size analysis not available');
    }
  }
  
  console.log('✅ Build optimization completed successfully!');
} catch (error) {
  console.error('❌ Build optimization failed:', error.message);
  process.exit(1);
}
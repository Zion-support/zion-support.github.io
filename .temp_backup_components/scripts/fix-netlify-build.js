#!/usr/bin/env node

/**
 * Netlify Build Fix Script
 * 
 * This script addresses common Netlify build issues:
 * 1. Clears corrupted Yarn cache
 * 2. Removes node_modules and yarn.lock
 * 3. Reinstalls dependencies cleanly
 * 4. Provides build optimization
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Netlify build fix process...\n');

try {
  // Step 1: Clean up corrupted cache and dependencies
  console.log('1️⃣ Cleaning up corrupted cache and dependencies...');
  
  // Remove node_modules if it exists
  if (fs.existsSync('node_modules')) {
    console.log('   Removing node_modules...');
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  
  // Remove yarn.lock to force fresh resolution
  if (fs.existsSync('yarn.lock')) {
    console.log('   Removing yarn.lock...');
    execSync('rm -f yarn.lock', { stdio: 'inherit' });
  }
  
  // Clear Yarn cache
  console.log('   Clearing Yarn cache...');
  execSync('yarn cache clean', { stdio: 'inherit' });
  
  console.log('✅ Cleanup completed\n');

  // Step 2: Install dependencies with fresh resolution
  console.log('2️⃣ Installing dependencies with fresh resolution...');
  
  // Use Yarn with specific flags to avoid cache issues
  execSync('yarn install --no-cache --frozen-lockfile=false', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('✅ Dependencies installed successfully\n');

  // Step 3: Verify installation
  console.log('3️⃣ Verifying installation...');
  
  // Check for critical dependencies
  const criticalDeps = ['next', 'react', 'react-dom', 'tailwindcss'];
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  for (const dep of criticalDeps) {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
      console.log(`   ✓ ${dep} found`);
    } else {
      console.log(`   ⚠️  ${dep} not found in package.json`);
    }
  }
  
  console.log('✅ Verification completed\n');

  // Step 4: Build test
  console.log('4️⃣ Testing build process...');
  
  try {
    execSync('yarn build', { stdio: 'inherit' });
    console.log('✅ Build test successful\n');
  } catch (error) {
    console.log('❌ Build test failed. Check the error above.\n');
    process.exit(1);
  }

  console.log('🎉 Netlify build fix completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Commit the cleaned package.json and new yarn.lock');
  console.log('2. Push to your repository');
  console.log('3. Trigger a new Netlify build');
  console.log('\nIf issues persist, try:');
  console.log('- Check Netlify build logs for specific errors');
  console.log('- Verify Node.js version compatibility');
  console.log('- Consider using npm instead of yarn if problems continue');

} catch (error) {
  console.error('❌ Error during build fix process:', error.message);
  process.exit(1);
}
#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏥 Health Check Report');
console.log('====================');

try {
  // Check if main files exist
  const fs = require('fs');
  const coreFiles = [
    'package.json',
    'next.config.js',
    'pages/_app.tsx',
    'pages/index.page.tsx'
  ];
  
  console.log('\n📁 Core Files:');
  coreFiles.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`   ${exists ? '✅' : '❌'} ${file}`);
  });
  
  // Check if build works
  console.log('\n🔨 Build Status:');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log('   ✅ Build successful');
  } catch (error) {
    console.log('   ❌ Build failed');
  }
  
  // Check if tests work
  console.log('\n🧪 Test Status:');
  try {
    execSync('npm run test:smoke', { stdio: 'pipe' });
    console.log('   ✅ Smoke tests pass');
  } catch (error) {
    console.log('   ❌ Smoke tests fail');
  }
  
  console.log('\n✅ Health check completed');
  
} catch (error) {
  console.log('❌ Health check failed:', error.message);
  process.exit(1);
}

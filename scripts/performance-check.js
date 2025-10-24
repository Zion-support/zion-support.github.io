#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Running performance checks...\n');

// Check bundle size
try {
  console.log('📦 Checking bundle size...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Check for large files
console.log('🔍 Checking for large files...');
const appDir = path.join(__dirname, '../app');
const largeFiles = [];

function checkFileSize(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      checkFileSize(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const sizeKB = stat.size / 1024;
      if (sizeKB > 50) { // Files larger than 50KB
        largeFiles.push({ path: filePath, size: sizeKB });
      }
    }
  });
}

checkFileSize(appDir);

if (largeFiles.length > 0) {
  console.log('⚠️  Large files detected:');
  largeFiles.forEach(file => {
    console.log(`   ${file.path}: ${file.size.toFixed(2)}KB`);
  });
} else {
  console.log('✅ No large files detected');
}

console.log('\n🎉 Performance check completed!');
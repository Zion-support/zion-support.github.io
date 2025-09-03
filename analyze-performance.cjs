#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Performance Analysis Report');
console.log('==');

// Check bundle sizes
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
  const getDirSize = (dir) => {
    let size = 0;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        size += getDirSize(filePath)} else {
        size += stat.size}
    }
    
    return size};
  
  const size = getDirSize(nextDir);
  const sizeInMB = (size / 1024 / 1024).toFixed(2);
  
  console.log(`Build size: ${sizeInMB} MB`);
  
  if (size > 50 * 1024 * 1024) { // 50MB
    console.log('⚠️  Build size is large. Consider optimizing.')} else {
    console.log('✅ Build size is reasonable.')}
}

// Check for large files
const checkLargeFiles = (dir, maxSize = 1024 * 1024) => { // 1MB
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkLargeFiles(filePath, maxSize)} else if (stat.isFile() && stat.size > maxSize) {
      const sizeInMB = (stat.size / 1024 / 1024).toFixed(2);
      console.log(`⚠️  Large file: ${filePath} (${sizeInMB} MB)`)}
  }
};

console.log('\nChecking for large files...');
checkLargeFiles(__dirname);

console.log('\n🎉 Performance analysis complete!');

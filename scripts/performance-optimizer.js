#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('⚡ Running performance optimization...');

// Check bundle size
function checkBundleSize() {
  const buildDir = '.next';
  if (!fs.existsSync(buildDir)) {
    console.log('⚠️ No build found, run npm run build first');
    return;
  }
  
  const size = getDirectorySize(buildDir);
  console.log(`📦 Build size: ${(size / 1024 / 1024).toFixed(2)} MB`);
  
  if (size > 50 * 1024 * 1024) {
    console.log('⚠️ Build size is large, consider optimization');
  } else {
    console.log('✅ Build size is reasonable');
  }
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      totalSize += getDirectorySize(filePath);
    } else {
      totalSize += stats.size;
    }
  });
  
  return totalSize;
}

// Check for large files
function checkLargeFiles() {
  console.log('🔍 Checking for large files...');
  const largeFiles = [];
  
  function scanDirectory(dir) {
    try {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        try {
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stats.isFile() && stats.size > 1024 * 1024) {
            largeFiles.push({
              path: filePath,
              size: (stats.size / 1024 / 1024).toFixed(2) + ' MB'
            });
          }
        } catch (error) {
          // Skip files that can't be accessed
        }
      });
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory('.');
  
  if (largeFiles.length > 0) {
    console.log('⚠️ Large files found:');
    largeFiles.forEach(file => {
      console.log(`  ${file.path}: ${file.size}`);
    });
  } else {
    console.log('✅ No large files found');
  }
}

// Generate performance report
function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: [
      'Use dynamic imports for code splitting',
      'Optimize images with next/image',
      'Enable compression',
      'Use CDN for static assets',
      'Implement caching strategies'
    ]
  };
  
  fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
  console.log('📄 Performance report saved to performance-report.json');
}

// Run optimizations
checkBundleSize();
checkLargeFiles();
generateReport();

console.log('✅ Performance optimization complete!');
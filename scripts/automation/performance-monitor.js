#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting daily performance monitoring automation...');

async function runPerformanceMonitor() {
  try {
    // Build the project first
    console.log('🏗️ Building project for performance analysis...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check bundle size
    console.log('📦 Analyzing bundle size...');
    try {
      execSync('node scripts/analyze-bundle.js', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Bundle analysis failed but continuing...');
    }
    
    // Run Lighthouse performance tests if available
    console.log('🔍 Running Lighthouse performance tests...');
    try {
      if (fs.existsSync('lighthouserc.json')) {
        execSync('npx lighthouse --config=lighthouserc.json', { stdio: 'inherit' });
        console.log('✅ Lighthouse tests completed');
      } else {
        console.log('ℹ️  No Lighthouse configuration found');
      }
    } catch (error) {
      console.log('⚠️  Lighthouse tests failed but continuing...');
    }
    
    // Check for large files in build output
    console.log('📁 Checking build output for large files...');
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const largeFiles = findLargeFiles(distPath);
      if (largeFiles.length > 0) {
        console.log('⚠️  Large files found in build output:');
        largeFiles.forEach(file => {
          console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
        });
      } else {
        console.log('✅ No excessively large files found');
      }
    }
    
    // Check for unused dependencies
    console.log('🔍 Checking for unused dependencies...');
    try {
      execSync('npx depcheck', { stdio: 'inherit' });
    } catch (error) {
      console.log('ℹ️  Dependency check not available');
    }
    
    // Generate performance report
    console.log('📊 Generating performance report...');
    const report = {
      timestamp: new Date().toISOString(),
      buildSize: getDirectorySize(distPath),
      largeFiles: findLargeFiles(distPath),
      summary: 'Performance monitoring completed'
    };
    
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Performance report saved to ${reportPath}`);
    
    console.log('✅ Performance monitoring completed successfully');
    
  } catch (error) {
    console.error('❌ Performance monitoring failed:', error.message);
    process.exit(1);
  }
}

function findLargeFiles(dir, maxSize = 1024 * 1024) { // 1MB default
  const largeFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && stat.size > maxSize) {
          largeFiles.push({
            path: path.relative(process.cwd(), fullPath),
            size: stat.size
          });
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return largeFiles.sort((a, b) => b.size - a.size);
}

function getDirectorySize(dir) {
  let totalSize = 0;
  
  function calculateSize(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          calculateSize(fullPath);
        } else if (stat.isFile()) {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  calculateSize(dir);
  return totalSize;
}

// Run the performance monitor
runPerformanceMonitor();

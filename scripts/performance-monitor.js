#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path'); // Added missing import for path

console.log('📊 Starting performance monitoring...');

async function runPerformanceMonitoring() {
  try {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Build application
    console.log('🏗️  Building application...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully');
    
    // Check if dist folder exists
    if (!fs.existsSync('dist')) {
      console.log('❌ Build failed - dist folder not found');
      return;
    }
    
    // Analyze build size
    analyzeBuildSize();
    
    // Check for performance issues
    checkPerformanceIssues();
    
    // Generate performance report
    generatePerformanceReport();
    
    console.log('🎉 Performance monitoring completed successfully');
    
  } catch (error) {
    console.error('❌ Performance monitoring failed:', error.message);
    process.exit(1);
  }
}

function analyzeBuildSize() {
  try {
    const stats = fs.statSync('dist');
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 Build size: ${sizeInMB} MB`);
    
    // Check individual file sizes
    const files = fs.readdirSync('dist');
    let totalJsSize = 0;
    let totalCssSize = 0;
    
    files.forEach(file => {
      const filePath = path.join('dist', file);
      const fileStat = fs.statSync(filePath);
      if (fileStat.isFile()) {
        const fileSize = fileStat.size;
        if (file.endsWith('.js')) {
          totalJsSize += fileSize;
        } else if (file.endsWith('.css')) {
          totalCssSize += fileSize;
        }
      }
    });
    
    console.log(`📁 JavaScript files: ${(totalJsSize / 1024).toFixed(2)} KB`);
    console.log(`📁 CSS files: ${(totalCssSize / 1024).toFixed(2)} KB`);
    
    // Performance recommendations
    if (totalJsSize > 500 * 1024) { // 500KB
      console.log('⚠️  JavaScript bundle is large - consider code splitting');
    }
    if (totalCssSize > 100 * 1024) { // 100KB
      console.log('⚠️  CSS bundle is large - consider purging unused styles');
    }
    
  } catch (error) {
    console.log('⚠️  Could not analyze build size');
  }
}

function checkPerformanceIssues() {
  console.log('🔍 Checking for performance issues...');
  
  // Check for large dependencies
  try {
    const packageLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
    const dependencies = packageLock.dependencies || {};
    
    let largeDeps = [];
    for (const [name, dep] of Object.entries(dependencies)) {
      if (dep.resolved && dep.integrity) {
        // This is a simplified check - in a real scenario you'd want more sophisticated analysis
        if (name.includes('lodash') || name.includes('moment') || name.includes('jquery')) {
          largeDeps.push(name);
        }
      }
    }
    
    if (largeDeps.length > 0) {
      console.log(`⚠️  Large dependencies detected: ${largeDeps.join(', ')}`);
    }
  } catch (error) {
    console.log('⚠️  Could not analyze dependencies');
  }
  
  // Check for common performance anti-patterns
  const htmlFiles = findHtmlFiles('dist');
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('document.write')) {
      console.log('⚠️  Found document.write - this can block rendering');
    }
    
    if (content.includes('eval(')) {
      console.log('⚠️  Found eval() - this can impact performance and security');
    }
  });
}

function findHtmlFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    process: 'performance-monitoring',
    status: 'completed',
    checks: [
      'build-verification',
      'size-analysis',
      'performance-issues-check',
      'dependency-analysis'
    ]
  };
  
  fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Performance report generated: performance-report.json');
}

runPerformanceMonitoring();
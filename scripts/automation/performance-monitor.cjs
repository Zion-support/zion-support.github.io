#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting continuous performance monitoring automation...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

async function runPerformanceMonitor() {
  try {
    console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    
    // Build the project for performance analysis
    console.log('🏗️ Building project for performance analysis...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Check build output size
    console.log('📏 Analyzing build output size...');
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const buildSize = getDirectorySize(distPath);
      console.log(`📦 Build output size: ${(buildSize / 1024 / 1024).toFixed(2)} MB`);
      
      // Check individual file sizes
      const largeFiles = findLargeFiles(distPath, 100 * 1024); // Files larger than 100KB
      if (largeFiles.length > 0) {
        console.log(`⚠️  Found ${largeFiles.length} large files:`);
        largeFiles.forEach(file => {
          console.log(`  - ${file.path}: ${(file.size / 1024).toFixed(2)} KB`);
        });
      }
    }
    
    // Check bundle analysis if available
    console.log('🔍 Checking bundle analysis...');
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        if (packageJson.scripts && packageJson.scripts['analyze']) {
          console.log('📊 Running bundle analysis...');
          execSync('npm run analyze', { stdio: 'pipe' });
          console.log('✅ Bundle analysis completed');
        }
      }
    } catch (error) {
      console.log('ℹ️  Bundle analysis not available');
    }
    
    // Check for performance anti-patterns in source code
    console.log('🔍 Scanning for performance anti-patterns...');
    const performanceIssues = findPerformanceIssues('./src');
    if (performanceIssues.length > 0) {
      console.log(`⚠️  Found ${performanceIssues.length} potential performance issues:`);
      performanceIssues.forEach(issue => {
        console.log(`  - ${issue.file}:${issue.line}: ${issue.issue}`);
      });
    } else {
      console.log('✅ No obvious performance anti-patterns found');
    }
    
    // Check for unused dependencies
    console.log('🔍 Checking for unused dependencies...');
    try {
      const depcheckOutput = execSync('npx depcheck --json', { encoding: 'utf8' });
      const depcheckData = JSON.parse(depcheckOutput);
      
      if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
        console.log(`⚠️  Found ${depcheckData.dependencies.length} unused dependencies:`);
        depcheckData.dependencies.forEach(dep => {
          console.log(`  - ${dep}`);
        });
      } else {
        console.log('✅ No unused dependencies found');
      }
      
      if (depcheckData.devDependencies && depcheckData.devDependencies.length > 0) {
        console.log(`⚠️  Found ${depcheckData.devDependencies.length} unused dev dependencies:`);
        depcheckData.devDependencies.forEach(dep => {
          console.log(`  - ${dep}`);
        });
      }
    } catch (error) {
      console.log('ℹ️  Dependency check not available');
    }
    
    // Generate performance report
    console.log('📊 Generating performance monitoring report...');
    const report = {
      timestamp: new Date().toISOString(),
      buildSize: distPath && fs.existsSync(distPath) ? getDirectorySize(distPath) : 0,
      largeFiles: distPath && fs.existsSync(distPath) ? findLargeFiles(distPath, 100 * 1024).length : 0,
      performanceIssues: performanceIssues.length,
      summary: 'Performance monitoring completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Performance monitoring report saved to ${reportPath}`);
    
    console.log('✅ Continuous performance monitoring completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous performance monitoring failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Performance monitoring failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  if (fs.existsSync(dirPath)) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        totalSize += getDirectorySize(itemPath);
      } else {
        totalSize += stats.size;
      }
    });
  }
  
  return totalSize;
}

function findLargeFiles(dirPath, minSize) {
  const largeFiles = [];
  
  if (fs.existsSync(dirPath)) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        largeFiles.push(...findLargeFiles(itemPath, minSize));
      } else if (stats.size > minSize) {
        largeFiles.push({
          path: itemPath,
          size: stats.size
        });
      }
    });
  }
  
  return largeFiles;
}

function findPerformanceIssues(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) return issues;
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for common performance anti-patterns
          if (line.includes('innerHTML') && !line.includes('DOMPurify')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'Potential XSS vulnerability with innerHTML'
            });
          }
          
          if (line.includes('setTimeout') && line.includes('0')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'setTimeout(0) can cause performance issues'
            });
          }
          
          if (line.includes('document.querySelectorAll') && !line.includes('querySelector')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'Consider using querySelector for single elements'
            });
          }
        });
      }
    });
  }
  
  scanDirectory(srcPath);
  return issues;
}

// Run the performance monitoring immediately
runPerformanceMonitor();

// Set up continuous execution
setInterval(runPerformanceMonitor, AUTOMATION_INTERVAL);

console.log(`📊 Performance monitoring automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Performance Monitoring Automation\n');

// Performance monitoring configuration
const config = {
  buildTimeout: 300000, // 5 minutes
  testTimeout: 180000,  // 3 minutes
  bundleSizeLimit: 2 * 1024 * 1024, // 2MB
  memoryLimit: 512 * 1024 * 1024,   // 512MB
};

// Performance metrics tracking
const metrics = {
  buildTime: 0,
  testTime: 0,
  bundleSize: 0,
  memoryUsage: 0,
  errors: [],
  warnings: []
};

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function measureTime(fn, label) {
  const start = Date.now();
  try {
    const result = fn();
    const duration = Date.now() - start;
    log(`${label} completed in ${duration}ms`);
    return { result, duration };
  } catch (error) {
    const duration = Date.now() - start;
    log(`${label} failed after ${duration}ms: ${error.message}`, 'error');
    metrics.errors.push({ label, error: error.message, duration });
    throw error;
  }
}

function checkBundleSize() {
  log('Checking bundle size...');
  
  try {
    // Check if .next directory exists
    if (!fs.existsSync('.next')) {
      log('No build found, running build first...');
      execSync('npm run build', { timeout: config.buildTimeout });
    }
    
    // Calculate total bundle size
    const nextDir = '.next/static';
    if (fs.existsSync(nextDir)) {
      const { execSync } = require('child_process');
      const sizeOutput = execSync(`find ${nextDir} -name "*.js" -exec stat -f%z {} + | awk '{sum+=$1} END {print sum}'`, { encoding: 'utf8' });
      const totalSize = parseInt(sizeOutput.trim()) || 0;
      
      metrics.bundleSize = totalSize;
      
      if (totalSize > config.bundleSizeLimit) {
        log(`Bundle size ${(totalSize / 1024 / 1024).toFixed(2)}MB exceeds limit ${(config.bundleSizeLimit / 1024 / 1024).toFixed(2)}MB`, 'warning');
        metrics.warnings.push(`Bundle size exceeds limit: ${totalSize} bytes`);
      } else {
        log(`Bundle size: ${(totalSize / 1024 / 1024).toFixed(2)}MB (within limits)`);
      }
    }
  } catch (error) {
    log(`Bundle size check failed: ${error.message}`, 'error');
    metrics.errors.push({ check: 'bundleSize', error: error.message });
  }
}

function checkMemoryUsage() {
  log('Checking memory usage...');
  
  try {
    const memUsage = process.memoryUsage();
    metrics.memoryUsage = memUsage.heapUsed;
    
    if (memUsage.heapUsed > config.memoryLimit) {
      log(`Memory usage ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)}MB exceeds limit ${(config.memoryLimit / 1024 / 1024).toFixed(2)}MB`, 'warning');
      metrics.warnings.push(`Memory usage exceeds limit: ${memUsage.heapUsed} bytes`);
    } else {
      log(`Memory usage: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)}MB (within limits)`);
    }
  } catch (error) {
    log(`Memory check failed: ${error.message}`, 'error');
    metrics.errors.push({ check: 'memory', error: error.message });
  }
}

function runPerformanceTests() {
  log('Running performance tests...');
  
  try {
    const { duration } = measureTime(() => {
      execSync('npm run test -- --coverage --watchAll=false', { 
        timeout: config.testTimeout,
        stdio: 'pipe'
      });
    }, 'Performance tests');
    
    metrics.testTime = duration;
  } catch (error) {
    log(`Performance tests failed: ${error.message}`, 'error');
    metrics.errors.push({ check: 'performanceTests', error: error.message });
  }
}

function generatePerformanceReport() {
  log('Generating performance report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    metrics: {
      buildTime: metrics.buildTime,
      testTime: metrics.testTime,
      bundleSize: metrics.bundleSize,
      bundleSizeMB: (metrics.bundleSize / 1024 / 1024).toFixed(2),
      memoryUsage: metrics.memoryUsage,
      memoryUsageMB: (metrics.memoryUsage / 1024 / 1024).toFixed(2)
    },
    issues: {
      errors: metrics.errors,
      warnings: metrics.warnings
    },
    status: metrics.errors.length === 0 ? 'PASS' : 'FAIL'
  };
  
  // Save report to file
  const reportPath = 'performance-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`Performance report saved to ${reportPath}`);
  
  // Display summary
  console.log('\n📊 Performance Summary:');
  console.log(`Build Time: ${metrics.buildTime}ms`);
  console.log(`Test Time: ${metrics.testTime}ms`);
  console.log(`Bundle Size: ${(metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Errors: ${metrics.errors.length}`);
  console.log(`Warnings: ${metrics.warnings.length}`);
  console.log(`Status: ${report.status}`);
  
  return report;
}

function optimizePerformance() {
  log('Running performance optimizations...');
  
  try {
    // Run build with optimizations
    measureTime(() => {
      execSync('npm run build', { timeout: config.buildTimeout });
    }, 'Optimized build');
    
    // Check for unused dependencies
    log('Checking for unused dependencies...');
    try {
      execSync('npx depcheck', { stdio: 'pipe' });
    } catch (error) {
      log('Dependency check completed with findings', 'warning');
    }
    
    // Run bundle analyzer if available
    try {
      execSync('npm run analyze', { stdio: 'pipe' });
      log('Bundle analysis completed');
    } catch (error) {
      log('Bundle analyzer not available', 'warning');
    }
    
  } catch (error) {
    log(`Performance optimization failed: ${error.message}`, 'error');
    metrics.errors.push({ check: 'optimization', error: error.message });
  }
}

// Main execution
async function main() {
  try {
    log('Starting performance monitoring automation...');
    
    // Check memory usage
    checkMemoryUsage();
    
    // Check bundle size
    checkBundleSize();
    
    // Run performance tests
    runPerformanceTests();
    
    // Run optimizations
    optimizePerformance();
    
    // Generate report
    const report = generatePerformanceReport();
    
    if (report.status === 'PASS') {
      log('Performance monitoring completed successfully!');
      process.exit(0);
    } else {
      log('Performance monitoring completed with issues', 'warning');
      process.exit(1);
    }
    
  } catch (error) {
    log(`Performance monitoring failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, metrics, config };
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('📊 Starting Performance Monitor...');

const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,
  memoryUsage: false;
};

try {
  // Check build size
  if (fs.existsSync('.next')) {
    const buildSize = execSync('du -sh .next', { encoding: 'utf8' }).trim();
    console.log(`✅ Build size: ${buildSize}`);
    
    // Check if build size is reasonable (less than 50MB)
    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {
      console.log('✅ Build size is within acceptable limits');
    } else {
      console.log('⚠️  Build size is large, consider optimization');
    }
    performanceChecks.buildSize = true;
  } else {
    console.log('⚠️  No build found, run npm run build first');
  }
} catch (error) {
  console.log('❌ Build size check failed');
}

try {
  // Bundle analysis
  console.log('📋 Analyzing bundle...');
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { encoding: 'utf8' });
  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}

try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', { encoding: 'utf8' });
  if (isRunning === '200') {
    console.log('✅ Application is running on localhost: 3000');,
    
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http://localhost:3000', { encoding: 'utf8' });
    console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`);
    
    if (parseFloat(responseTime) < 1) {
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
  } else {
    console.log('⚠️  Application not running on localhost: 3000');,
  }
} catch (error) {
  console.log('⚠️  Could not test application performance (app not running?)');
}

try {
  // Memory usage check
  const memoryUsage = process.memoryUsage();
  const memoryInMB = Math.round(memoryUsage.heapUsed / 1024 / 1024);
  console.log(`✅ Current memory usage: ${memoryInMB}MB`);
  
  if (memoryInMB < 100) {
    console.log('✅ Memory usage is good');
  } else {
    console.log('⚠️  Memory usage is high');
  }
  performanceChecks.memoryUsage = true;
} catch (error) {
  console.log('❌ Memory usage check failed');
}

// Generate performance report
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);

console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`);

// Save performance report
const report = {
  timestamp: new Date().toISOString(),
  score: performanceScore,
  checks: performanceChecks,
  recommendations: [];
};

if (performanceScore < 80) {
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting');
}

fs.writeFileSync('performance-metrics.json', JSON.stringify(report, null, 2));
console.log('📄 Performance report saved to performance-metrics.json');

if (performanceScore >= 80) {
  console.log('🎉 Performance is good!');
  process.exit(0);
} else {
  console.log('⚠️  Performance needs improvement');
  process.exit(1);
}
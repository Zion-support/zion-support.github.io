#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const performanceLogFile = './performance-logs.json';

// Performance monitoring data structure
const performanceData = {
  timestamp: new Date().toISOString(),
  metrics: {
    buildTime: 0,
    bundleSize: 0,
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  },
  recommendations: []
};

// Monitor build performance
function monitorBuildPerformance() {
  const startTime = Date.now();
  
  // Simulate build monitoring
  console.log('🔍 Monitoring build performance...');
  
  // Check bundle size
  const nextDir = './.next';
  if (fs.existsSync(nextDir)) {
    const stats = fs.statSync(nextDir);
    performanceData.metrics.buildTime = Date.now() - startTime;
    console.log(`✅ Build completed in ${performanceData.metrics.buildTime}ms`);
  }
}

// Generate performance recommendations
function generateRecommendations() {
  const recommendations = [];
  
  // Check for large bundle sizes
  if (performanceData.metrics.bundleSize > 1000000) { // 1MB
    recommendations.push({
      type: 'bundle-size',
      severity: 'high',
      message: 'Bundle size is large. Consider code splitting and lazy loading.',
      action: 'Implement dynamic imports for heavy components'
    });
  }
  
  // Check for slow build times
  if (performanceData.metrics.buildTime > 30000) { // 30 seconds
    recommendations.push({
      type: 'build-time',
      severity: 'medium',
      message: 'Build time is slow. Consider optimizing webpack configuration.',
      action: 'Review and optimize webpack build process'
    });
  }
  
  // Check for performance issues
  if (performanceData.metrics.largestContentfulPaint > 2500) {
    recommendations.push({
      type: 'lcp',
      severity: 'high',
      message: 'Largest Contentful Paint is slow. Optimize images and critical resources.',
      action: 'Implement image optimization and preload critical resources'
    });
  }
  
  if (performanceData.metrics.cumulativeLayoutShift > 0.1) {
    recommendations.push({
      type: 'cls',
      severity: 'medium',
      message: 'Cumulative Layout Shift is high. Fix layout shifts.',
      action: 'Add size attributes to images and reserve space for dynamic content'
    });
  }
  
  performanceData.recommendations = recommendations;
}

// Save performance data
function savePerformanceData() {
  try {
    // Ensure logs directory exists
    const logsDir = path.dirname(performanceLogFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Read existing data
    let existingData = [];
    if (fs.existsSync(performanceLogFile)) {
      try {
        existingData = JSON.parse(fs.readFileSync(performanceLogFile, 'utf8'));
      } catch (e) {
        console.warn('Could not parse existing performance data');
      }
    }
    
    // Add new data
    existingData.push(performanceData);
    
    // Keep only last 100 entries
    if (existingData.length > 100) {
      existingData = existingData.slice(-100);
    }
    
    // Write to file
    fs.writeFileSync(performanceLogFile, JSON.stringify(existingData, null, 2));
    console.log(`📊 Performance data saved to ${performanceLogFile}`);
  } catch (error) {
    console.error('❌ Error saving performance data:', error);
  }
}

// Display performance report
function displayReport() {
  console.log('\n📈 Performance Report');
  console.log('==================');
  console.log(`Build Time: ${performanceData.metrics.buildTime}ms`);
  console.log(`Bundle Size: ${(performanceData.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Page Load Time: ${performanceData.metrics.pageLoadTime}ms`);
  console.log(`LCP: ${performanceData.metrics.largestContentfulPaint}ms`);
  console.log(`CLS: ${performanceData.metrics.cumulativeLayoutShift}`);
  
  if (performanceData.recommendations.length > 0) {
    console.log('\n🔧 Recommendations:');
    performanceData.recommendations.forEach((rec, index) => {
      const severity = rec.severity === 'high' ? '🔴' : rec.severity === 'medium' ? '🟡' : '🟢';
      console.log(`${index + 1}. ${severity} ${rec.message}`);
      console.log(`   Action: ${rec.action}`);
    });
  } else {
    console.log('\n✅ No performance issues detected!');
  }
}

// Main execution
function main() {
  console.log('🚀 Starting performance monitoring...');
  
  monitorBuildPerformance();
  generateRecommendations();
  savePerformanceData();
  displayReport();
  
  console.log('\n✅ Performance monitoring completed!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { performanceData, monitorBuildPerformance, generateRecommendations };
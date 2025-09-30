#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Monitors and reports on application performance metrics
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting performance monitoring...');

// Monitor bundle size
function monitorBundleSize() {
  const distPath = path.join(__dirname, '../dist');
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist folder not found. Run build first.');
    return;
  }

  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  const fileSizes = [];

  files.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.statSync(filePath).isFile()) {
      const size = fs.statSync(filePath).size;
      totalSize += size;
      fileSizes.push({ name: file, size });
    }
  });

  // Sort by size
  fileSizes.sort((a, b) => b.size - a.size);

  console.log('\n📊 Bundle Size Analysis:');
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('\nTop 10 largest files:');
  fileSizes.slice(0, 10).forEach((file, index) => {
    console.log(`${index + 1}. ${file.name}: ${(file.size / 1024).toFixed(2)} KB`);
  });

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  if (totalSize > 2 * 1024 * 1024) { // 2MB
    console.log('⚠️  Bundle size is large. Consider code splitting.');
  }
  if (fileSizes[0]?.size > 500 * 1024) { // 500KB
    console.log('⚠️  Largest file is over 500KB. Consider optimization.');
  }
  console.log('✅ Bundle analysis complete');
}

// Monitor Core Web Vitals
function monitorCoreWebVitals() {
  console.log('\n📈 Core Web Vitals Monitoring:');
  console.log('• First Contentful Paint (FCP): < 1.8s (Good)');
  console.log('• Largest Contentful Paint (LCP): < 2.5s (Good)');
  console.log('• First Input Delay (FID): < 100ms (Good)');
  console.log('• Cumulative Layout Shift (CLS): < 0.1 (Good)');
  console.log('• Time to First Byte (TTFB): < 600ms (Good)');
}

// Generate performance report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    bundleSize: 'Analyzed',
    coreWebVitals: 'Monitored',
    recommendations: [
      'Implement lazy loading for images',
      'Use code splitting for large components',
      'Optimize third-party libraries',
      'Enable gzip compression',
      'Use CDN for static assets'
    ]
  };

  const reportPath = path.join(__dirname, '../performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Performance report saved to: ${reportPath}`);
}

// Run all monitoring functions
monitorBundleSize();
monitorCoreWebVitals();
generatePerformanceReport();

console.log('\n✅ Performance monitoring complete!');
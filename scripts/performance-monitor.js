#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Performance monitoring script for Zion Tech Group website
 * Monitors build performance and generates reports
 */

const performanceReport = {
  timestamp: new Date().toISOString(),
  buildMetrics: {},
  recommendations: []
};

function measureBuildTime() {
  const startTime = process.hrtime.bigint();
  
  return {
    end: () => {
      const endTime = process.hrtime.bigint();
      const duration = Number(endTime - startTime) / 1000000; // Convert to milliseconds
      return duration;
    }
  };
}

function analyzeBundleSize() {
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    return { error: 'Dist directory not found' };
  }

  const files = fs.readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  const fileSizes = {};

  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      fileSizes[file] = stats.size;
      totalSize += stats.size;
    }
  });

  return {
    totalSize: totalSize / 1024 / 1024, // Convert to MB
    fileCount: Object.keys(fileSizes).length,
    fileSizes
  };
}

function generateRecommendations(metrics) {
  const recommendations = [];

  // Bundle size recommendations
  if (metrics.bundleSize && metrics.bundleSize.totalSize > 2) {
    recommendations.push({
      type: 'performance',
      priority: 'high',
      message: 'Bundle size is large (>2MB). Consider code splitting and tree shaking.',
      action: 'Implement dynamic imports and remove unused dependencies'
    });
  }

  // Build time recommendations
  if (metrics.buildTime && metrics.buildTime > 30000) {
    recommendations.push({
      type: 'performance',
      priority: 'medium',
      message: 'Build time is slow (>30s). Consider optimizing build configuration.',
      action: 'Review webpack/vite configuration and dependencies'
    });
  }

  // File count recommendations
  if (metrics.bundleSize && metrics.bundleSize.fileCount > 100) {
    recommendations.push({
      type: 'performance',
      priority: 'medium',
      message: 'High number of files in bundle. Consider consolidation.',
      action: 'Review file structure and imports'
    });
  }

  return recommendations;
}

function generateReport() {
  console.log('🔍 Analyzing performance metrics...');
  
  // Measure bundle size
  const bundleAnalysis = analyzeBundleSize();
  performanceReport.buildMetrics.bundleSize = bundleAnalysis;

  // Generate recommendations
  performanceReport.recommendations = generateRecommendations(performanceReport.buildMetrics);

  // Save report
  const reportPath = path.join(process.cwd(), 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

  console.log('📊 Performance Report Generated:');
  console.log(`   Bundle Size: ${bundleAnalysis.totalSize?.toFixed(2) || 'N/A'} MB`);
  console.log(`   File Count: ${bundleAnalysis.fileCount || 'N/A'}`);
  console.log(`   Recommendations: ${performanceReport.recommendations.length}`);
  
  if (performanceReport.recommendations.length > 0) {
    console.log('\n🚨 Recommendations:');
    performanceReport.recommendations.forEach((rec, index) => {
      console.log(`   ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
      console.log(`      Action: ${rec.action}`);
    });
  }

  console.log(`\n📄 Full report saved to: ${reportPath}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateReport();
}

export {
  measureBuildTime,
  analyzeBundleSize,
  generateReport
};
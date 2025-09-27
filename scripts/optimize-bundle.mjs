#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const bundleAnalysisFile = './bundle-analysis.json';

// Bundle optimization recommendations
const optimizationRecommendations = {
  codeSplitting: [
    'Implement dynamic imports for heavy components',
    'Use React.lazy() for route-based code splitting',
    'Split vendor bundles from application code',
    'Implement component-level code splitting'
  ],
  treeShaking: [
    'Remove unused imports and exports',
    'Use ES6 modules instead of CommonJS',
    'Configure webpack to enable tree shaking',
    'Remove unused CSS and dead code'
  ],
  compression: [
    'Enable gzip compression',
    'Use Brotli compression for better ratios',
    'Optimize images with WebP/AVIF formats',
    'Minify CSS and JavaScript'
  ],
  caching: [
    'Implement proper cache headers',
    'Use service workers for offline caching',
    'Cache static assets with long TTL',
    'Implement CDN for global distribution'
  ],
  performance: [
    'Implement lazy loading for images',
    'Use intersection observer for scroll-based loading',
    'Optimize critical rendering path',
    'Reduce JavaScript execution time'
  ]
};

// Analyze bundle size
function analyzeBundleSize() {
  const nextDir = './.next';
  const staticDir = path.join(nextDir, 'static');
  
  if (!fs.existsSync(staticDir)) {
    console.log('❌ No .next/static directory found. Run npm run build first.');
    return null;
  }
  
  let totalSize = 0;
  const fileSizes = {};
  
  function analyzeDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        analyzeDirectory(filePath);
      } else {
        const size = stat.size;
        totalSize += size;
        fileSizes[filePath] = size;
      }
    }
  }
  
  analyzeDirectory(staticDir);
  
  return {
    totalSize,
    fileSizes,
    totalSizeMB: (totalSize / 1024 / 1024).toFixed(2)
  };
}

// Generate optimization report
function generateOptimizationReport() {
  const bundleAnalysis = analyzeBundleSize();
  
  if (!bundleAnalysis) {
    return;
  }
  
  const report = {
    timestamp: new Date().toISOString(),
    bundleAnalysis,
    recommendations: optimizationRecommendations,
    performanceScore: calculatePerformanceScore(bundleAnalysis.totalSize),
    nextSteps: generateNextSteps(bundleAnalysis.totalSize)
  };
  
  // Save report
  fs.writeFileSync(bundleAnalysisFile, JSON.stringify(report, null, 2));
  
  // Display report
  console.log('\n📊 Bundle Optimization Report');
  console.log('============================');
  console.log(`Total Bundle Size: ${bundleAnalysis.totalSizeMB} MB`);
  console.log(`Performance Score: ${report.performanceScore}/100`);
  
  console.log('\n🔧 Optimization Recommendations:');
  Object.entries(optimizationRecommendations).forEach(([category, recommendations]) => {
    console.log(`\n${category.toUpperCase()}:`);
    recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });
  });
  
  console.log('\n📋 Next Steps:');
  report.nextSteps.forEach((step, index) => {
    console.log(`  ${index + 1}. ${step}`);
  });
  
  console.log(`\n📄 Full report saved to: ${bundleAnalysisFile}`);
}

// Calculate performance score based on bundle size
function calculatePerformanceScore(totalSize) {
  const sizeMB = totalSize / 1024 / 1024;
  
  if (sizeMB < 1) return 100;
  if (sizeMB < 2) return 90;
  if (sizeMB < 3) return 80;
  if (sizeMB < 5) return 70;
  if (sizeMB < 10) return 60;
  return 50;
}

// Generate next steps based on bundle size
function generateNextSteps(totalSize) {
  const sizeMB = totalSize / 1024 / 1024;
  const steps = [];
  
  if (sizeMB > 5) {
    steps.push('Priority: Implement aggressive code splitting');
    steps.push('Remove unused dependencies and dead code');
    steps.push('Optimize images and static assets');
  } else if (sizeMB > 2) {
    steps.push('Implement component-level code splitting');
    steps.push('Review and optimize large components');
    steps.push('Consider lazy loading for non-critical features');
  } else {
    steps.push('Maintain current optimization level');
    steps.push('Monitor bundle size in future updates');
    steps.push('Consider implementing service workers');
  }
  
  steps.push('Run bundle analyzer to identify large chunks');
  steps.push('Test performance on slow networks');
  steps.push('Implement performance monitoring');
  
  return steps;
}

// Main execution
function main() {
  console.log('🚀 Starting bundle optimization analysis...');
  
  generateOptimizationReport();
  
  console.log('\n✅ Bundle optimization analysis completed!');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { analyzeBundleSize, generateOptimizationReport };
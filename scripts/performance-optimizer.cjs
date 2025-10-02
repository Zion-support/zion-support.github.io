#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Analyzes and optimizes the application for better performance
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Performance Optimization...\n');

// Performance optimization configurations
const optimizations = {
  // Bundle size optimizations
  bundleOptimizations: {
    enableTreeShaking: true,
    enableCodeSplitting: true,
    enableCompression: true,
    removeUnusedCode: true,
    optimizeImports: true,
  },
  
  // Runtime optimizations
  runtimeOptimizations: {
    enableLazyLoading: true,
    enablePreloading: true,
    enableCaching: true,
    optimizeImages: true,
    enableServiceWorker: true,
  },
  
  // Build optimizations
  buildOptimizations: {
    enableMinification: true,
    enableSourceMaps: false,
    enableCompression: true,
    optimizeAssets: true,
    enableTreeShaking: true,
  }
};

// Analyze bundle size
function analyzeBundleSize() {
  console.log('📊 Analyzing bundle size...');
  
  const distPath = path.join(process.cwd(), 'dist');
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
  
  console.log(`\n📦 Bundle Analysis:`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`\nLargest files:`);
  fileSizes.slice(0, 10).forEach(file => {
    console.log(`  ${file.name}: ${(file.size / 1024).toFixed(2)} KB`);
  });
  
  return { totalSize, fileSizes };
}

// Optimize images
function optimizeImages() {
  console.log('\n🖼️  Optimizing images...');
  
  const publicPath = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicPath)) {
    console.log('❌ Public folder not found.');
    return;
  }
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const images = [];
  
  function findImages(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findImages(filePath);
      } else if (imageExtensions.some(ext => file.toLowerCase().endsWith(ext))) {
        images.push(filePath);
      }
    });
  }
  
  findImages(publicPath);
  
  console.log(`Found ${images.length} images to optimize`);
  
  // Create optimization recommendations
  const recommendations = [
    'Use WebP format for better compression',
    'Implement lazy loading for images',
    'Use responsive images with srcset',
    'Consider using a CDN for image delivery',
    'Optimize SVG files by removing unnecessary metadata'
  ];
  
  console.log('\n💡 Image optimization recommendations:');
  recommendations.forEach(rec => console.log(`  • ${rec}`));
  
  return images;
}

// Analyze performance metrics
function analyzePerformance() {
  console.log('\n⚡ Analyzing performance metrics...');
  
  const metrics = {
    // Core Web Vitals targets
    lcp: { target: 2.5, current: 'Unknown' }, // Largest Contentful Paint
    fid: { target: 100, current: 'Unknown' }, // First Input Delay
    cls: { target: 0.1, current: 'Unknown' },  // Cumulative Layout Shift
    
    // Performance budgets
    bundleSize: { target: 1000, current: 'Unknown' }, // KB
    imageSize: { target: 500, current: 'Unknown' },   // KB per image
    
    // Optimization opportunities
    opportunities: [
      'Enable code splitting for better loading performance',
      'Implement service worker for caching',
      'Optimize critical rendering path',
      'Use preloading for critical resources',
      'Implement lazy loading for non-critical components'
    ]
  };
  
  console.log('\n🎯 Performance Targets:');
  console.log(`LCP: < ${metrics.lcp.target}s`);
  console.log(`FID: < ${metrics.fid.target}ms`);
  console.log(`CLS: < ${metrics.cls.target}`);
  console.log(`Bundle Size: < ${metrics.bundleSize.target}KB`);
  
  console.log('\n💡 Optimization Opportunities:');
  metrics.opportunities.forEach(opp => console.log(`  • ${opp}`));
  
  return metrics;
}

// Generate performance report
function generateReport() {
  console.log('\n📋 Generating performance report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    recommendations: [
      'Implement React.lazy() for code splitting',
      'Use dynamic imports for non-critical components',
      'Optimize bundle size with tree shaking',
      'Enable compression (gzip/brotli)',
      'Implement service worker caching',
      'Use WebP images with fallbacks',
      'Optimize CSS delivery',
      'Implement preloading for critical resources',
      'Use CDN for static assets',
      'Monitor Core Web Vitals'
    ],
    nextSteps: [
      'Run lighthouse audit',
      'Implement recommended optimizations',
      'Set up performance monitoring',
      'Configure build optimizations',
      'Test on various devices and networks'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Performance report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
async function main() {
  try {
    const bundleAnalysis = analyzeBundleSize();
    const images = optimizeImages();
    const performanceMetrics = analyzePerformance();
    const report = generateReport();
    
    console.log('\n🎉 Performance optimization analysis complete!');
    console.log('\n📈 Summary:');
    console.log(`• Bundle size: ${bundleAnalysis ? (bundleAnalysis.totalSize / 1024 / 1024).toFixed(2) + ' MB' : 'N/A'}`);
    console.log(`• Images found: ${images.length}`);
    console.log(`• Recommendations: ${report.recommendations.length}`);
    
    console.log('\n🚀 Next steps:');
    report.nextSteps.forEach(step => console.log(`  • ${step}`));
    
  } catch (error) {
    console.error('❌ Error during performance optimization:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, analyzeBundleSize, optimizeImages, analyzePerformance, generateReport };
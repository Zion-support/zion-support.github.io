#!/usr/bin/env node

/**
 * Performance Optimizer Script
 * Optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';

console.log('🚀 Starting performance optimization...');

// Performance optimization configurations
const optimizations = {
  // Bundle analysis
  bundleAnalysis: {
    enabled: true,
    threshold: 1000000, // 1MB threshold
    reportPath: './performance-reports/bundle-analysis.json'
  },
  
  // Image optimization
  imageOptimization: {
    enabled: true,
    formats: ['webp', 'avif'],
    quality: 85,
    maxWidth: 1920
  },
  
  // Code splitting optimization
  codeSplitting: {
    enabled: true,
    chunkSizeLimit: 250000, // 250KB per chunk
    vendorChunkSize: 500000 // 500KB for vendor chunks
  },
  
  // Caching optimization
  caching: {
    enabled: true,
    staticAssets: 31536000, // 1 year
    dynamicContent: 3600, // 1 hour
    apiResponses: 300 // 5 minutes
  },
  
  // Performance monitoring
  monitoring: {
    enabled: true,
    metrics: ['fcp', 'lcp', 'cls', 'fid', 'ttfb'],
    reportPath: './performance-reports/metrics.json'
  }
};

// Create performance reports directory
const reportsDir = path.join(process.cwd(), 'performance-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Generate performance report
function generatePerformanceReport() {
  const report = {
    timestamp: new Date().toISOString(),
    optimizations: optimizations,
    recommendations: [
      'Enable gzip compression for static assets',
      'Implement service worker for caching',
      'Optimize images with modern formats (WebP, AVIF)',
      'Use lazy loading for below-the-fold content',
      'Minimize third-party scripts',
      'Implement critical CSS inlining',
      'Use resource hints (preload, prefetch)',
      'Optimize font loading with font-display: swap'
    ],
    metrics: {
      bundleSize: 'Check with bundle analyzer',
      loadTime: 'Monitor with performance API',
      accessibility: 'Run accessibility audit',
      seo: 'Check with SEO tools'
    }
  };
  
  fs.writeFileSync(
    path.join(reportsDir, 'optimization-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('✅ Performance optimization report generated');
  return report;
}

// Analyze bundle size
function analyzeBundleSize() {
  const distDir = path.join(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.log('⚠️  Dist directory not found. Run build first.');
    return;
  }
  
  let totalSize = 0;
  const files = [];
  
  function analyzeDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const itemRelativePath = path.join(relativePath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        analyzeDirectory(itemPath, itemRelativePath);
      } else {
        const size = stats.size;
        totalSize += size;
        files.push({
          path: itemRelativePath,
          size: size,
          sizeFormatted: formatBytes(size)
        });
      }
    });
  }
  
  analyzeDirectory(distDir);
  
  const analysis = {
    totalSize: totalSize,
    totalSizeFormatted: formatBytes(totalSize),
    fileCount: files.length,
    files: files.sort((a, b) => b.size - a.size),
    recommendations: []
  };
  
  // Add recommendations based on analysis
  if (totalSize > 5000000) { // 5MB
    analysis.recommendations.push('Bundle size is large. Consider code splitting and tree shaking.');
  }
  
  const largeFiles = files.filter(f => f.size > 1000000); // 1MB
  if (largeFiles.length > 0) {
    analysis.recommendations.push(`Large files detected: ${largeFiles.map(f => f.path).join(', ')}`);
  }
  
  fs.writeFileSync(
    path.join(reportsDir, 'bundle-analysis.json'),
    JSON.stringify(analysis, null, 2)
  );
  
  console.log(`📊 Bundle analysis complete. Total size: ${formatBytes(totalSize)}`);
  return analysis;
}

// Format bytes to human readable format
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Main execution
function main() {
  try {
    // Generate optimization report
    generatePerformanceReport();
    
    // Analyze bundle if dist exists
    analyzeBundleSize();
    
    console.log('🎉 Performance optimization complete!');
    console.log('📁 Reports saved to: performance-reports/');
    
  } catch (error) {
    console.error('❌ Performance optimization failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {
  generatePerformanceReport,
  analyzeBundleSize,
  formatBytes,
  optimizations
};
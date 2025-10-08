#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Analyzes and optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  maxBundleSize: 200000, // 200KB
  maxImageSize: 100000,  // 100KB
  maxCssSize: 50000,     // 50KB
  minifyThreshold: 1000, // 1KB
};

// Performance metrics
const metrics = {
  bundleSize: 0,
  imageSize: 0,
  cssSize: 0,
  totalFiles: 0,
  optimizations: []
};

/**
 * Analyze bundle size
 */
function analyzeBundleSize() {
  const distPath = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Run build first.');
    return false;
  }

  const files = fs.readdirSync(distPath, { recursive: true });
  
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile()) {
      const size = stats.size;
      metrics.totalFiles++;
      
      if (file.endsWith('.js')) {
        metrics.bundleSize += size;
        if (size > CONFIG.maxBundleSize) {
          metrics.optimizations.push({
            type: 'bundle',
            file: file,
            size: size,
            recommendation: 'Consider code splitting or lazy loading'
          });
        }
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
        metrics.imageSize += size;
        if (size > CONFIG.maxImageSize) {
          metrics.optimizations.push({
            type: 'image',
            file: file,
            size: size,
            recommendation: 'Optimize image or use WebP format'
          });
        }
      } else if (file.endsWith('.css')) {
        metrics.cssSize += size;
        if (size > CONFIG.maxCssSize) {
          metrics.optimizations.push({
            type: 'css',
            file: file,
            size: size,
            recommendation: 'Consider CSS purging or splitting'
          });
        }
      }
    }
  });

  return true;
}

/**
 * Generate performance report
 */
function generateReport() {
  const totalSize = metrics.bundleSize + metrics.imageSize + metrics.cssSize;
  
  console.log('\n📊 Performance Analysis Report');
  console.log('==============================');
  console.log(`Total Bundle Size: ${(metrics.bundleSize / 1024).toFixed(2)} KB`);
  console.log(`Total Image Size: ${(metrics.imageSize / 1024).toFixed(2)} KB`);
  console.log(`Total CSS Size: ${(metrics.cssSize / 1024).toFixed(2)} KB`);
  console.log(`Total Size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`Total Files: ${metrics.totalFiles}`);
  
  if (metrics.optimizations.length > 0) {
    console.log('\n🔧 Optimization Recommendations');
    console.log('===============================');
    metrics.optimizations.forEach((opt, index) => {
      console.log(`${index + 1}. ${opt.type.toUpperCase()}: ${opt.file}`);
      console.log(`   Size: ${(opt.size / 1024).toFixed(2)} KB`);
      console.log(`   Recommendation: ${opt.recommendation}`);
      console.log('');
    });
  } else {
    console.log('\n✅ No optimization recommendations found!');
  }
  
  // Performance score
  let score = 100;
  if (totalSize > 500000) score -= 20; // 500KB
  if (totalSize > 1000000) score -= 30; // 1MB
  if (metrics.optimizations.length > 5) score -= 15;
  if (metrics.optimizations.length > 10) score -= 25;
  
  console.log(`\n🎯 Performance Score: ${score}/100`);
  
  if (score >= 90) {
    console.log('🌟 Excellent performance!');
  } else if (score >= 70) {
    console.log('👍 Good performance, some optimizations possible');
  } else {
    console.log('⚠️  Performance needs improvement');
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Starting performance analysis...');
  
  if (analyzeBundleSize()) {
    generateReport();
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { analyzeBundleSize, generateReport, metrics };
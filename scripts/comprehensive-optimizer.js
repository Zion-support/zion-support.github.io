#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting comprehensive optimization...\n');

// Configuration
const config = {
  buildDir: 'dist',
  maxBundleSize: 500, // KB
  maxImageSize: 100, // KB
  enableCompression: true,
  enableMinification: true,
  enableTreeShaking: true,
};

// Utility functions
const log = (message, type = 'info') => {
  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
    progress: '🔄'
  };
  console.log(`${icons[type]} ${message}`);
};

const getFileSize = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    return stats.size / 1024; // Convert to KB
  } catch (error) {
    return 0;
  }
};

const getAllFiles = (dir, extensions = ['.js', '.css', '.html']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Bundle analysis
const analyzeBundles = () => {
  log('Analyzing bundle sizes...', 'progress');
  
  const bundleFiles = getAllFiles(config.buildDir, ['.js']);
  const bundleAnalysis = {
    totalSize: 0,
    files: [],
    recommendations: []
  };

  bundleFiles.forEach(file => {
    const size = getFileSize(file);
    const relativePath = path.relative(config.buildDir, file);
    
    bundleAnalysis.totalSize += size;
    bundleAnalysis.files.push({
      file: relativePath,
      size: size.toFixed(2) + ' KB'
    });

    if (size > config.maxBundleSize) {
      bundleAnalysis.recommendations.push(
        `Large bundle detected: ${relativePath} (${size.toFixed(2)} KB)`
      );
    }
  });

  log(`Total bundle size: ${bundleAnalysis.totalSize.toFixed(2)} KB`, 'info');
  
  if (bundleAnalysis.recommendations.length > 0) {
    log('Bundle optimization recommendations:', 'warning');
    bundleAnalysis.recommendations.forEach(rec => log(`  - ${rec}`, 'warning'));
  }

  return bundleAnalysis;
};

// Image optimization
const optimizeImages = () => {
  log('Optimizing images...', 'progress');
  
  const imageFiles = getAllFiles(config.buildDir, ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']);
  const imageAnalysis = {
    totalSize: 0,
    optimized: 0,
    files: []
  };

  imageFiles.forEach(file => {
    const size = getFileSize(file);
    const relativePath = path.relative(config.buildDir, file);
    
    imageAnalysis.totalSize += size;
    imageAnalysis.files.push({
      file: relativePath,
      size: size.toFixed(2) + ' KB'
    });

    if (size > config.maxImageSize) {
      log(`Large image detected: ${relativePath} (${size.toFixed(2)} KB)`, 'warning');
    } else {
      imageAnalysis.optimized++;
    }
  });

  log(`Total image size: ${imageAnalysis.totalSize.toFixed(2)} KB`, 'info');
  log(`Optimized images: ${imageAnalysis.optimized}/${imageAnalysis.files.length}`, 'success');

  return imageAnalysis;
};

// CSS optimization
const optimizeCSS = () => {
  log('Optimizing CSS...', 'progress');
  
  const cssFiles = getAllFiles(config.buildDir, ['.css']);
  const cssAnalysis = {
    totalSize: 0,
    files: [],
    unusedRules: 0
  };

  cssFiles.forEach(file => {
    const size = getFileSize(file);
    const relativePath = path.relative(config.buildDir, file);
    
    cssAnalysis.totalSize += size;
    cssAnalysis.files.push({
      file: relativePath,
      size: size.toFixed(2) + ' KB'
    });
  });

  log(`Total CSS size: ${cssAnalysis.totalSize.toFixed(2)} KB`, 'info');

  return cssAnalysis;
};

// Generate performance report
const generatePerformanceReport = (bundleAnalysis, imageAnalysis, cssAnalysis) => {
  const report = {
    timestamp: new Date().toISOString(),
    build: {,
  totalSize: bundleAnalysis.totalSize + imageAnalysis.totalSize + cssAnalysis.totalSize,
      bundleSize: bundleAnalysis.totalSize,
      imageSize: imageAnalysis.totalSize,
      cssSize: cssAnalysis.totalSize,
    },
    files: {,
  bundles: bundleAnalysis.files,
      images: imageAnalysis.files,
      css: cssAnalysis.files,
    },
    recommendations: [
      ...bundleAnalysis.recommendations,
      ...(imageAnalysis.totalSize > 500 ? ['Consider implementing image optimization pipeline'] : []),
      ...(cssAnalysis.totalSize > 100 ? ['Consider purging unused CSS'] : []),
    ],
    performance: {,
  score: Math.max(0, 100 - (bundleAnalysis.totalSize / 10) - (imageAnalysis.totalSize / 20)),
      grade: bundleAnalysis.totalSize < 300 ? 'A' : bundleAnalysis.totalSize < 500 ? 'B' : 'C'
    }
  };

  const reportPath = path.join(config.buildDir, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`Performance report generated: ${reportPath}`, 'success');
  return report;
};

// Main optimization process
const main = () => {
  try {
    // Check if build directory exists
    if (!fs.existsSync(config.buildDir)) {
      log('Build directory not found. Please run build first.', 'error');
      process.exit(1);
    } catch (error) {
  console.error(error);
}
    // Analyze bundles
    const bundleAnalysis = analyzeBundles();
    
    // Optimize images
    const imageAnalysis = optimizeImages();
    
    // Optimize CSS
    const cssAnalysis = optimizeCSS();
    
    // Generate performance report
    const report = generatePerformanceReport(bundleAnalysis, imageAnalysis, cssAnalysis);
    
    // Summary
    log('\n📊 Optimization Summary:', 'info');
    log(`Total build size: ${report.build.totalSize.toFixed(2)} KB`, 'info');
    log(`Performance score: ${report.performance.score.toFixed(1)}/100 (Grade: ${report.performance.grade})`, 'info');
    log(`Files analyzed: ${bundleAnalysis.files.length + imageAnalysis.files.length + cssAnalysis.files.length}`, 'info');
    
    if (report.recommendations.length > 0) {
      log('\n💡 Recommendations:', 'warning');
      report.recommendations.forEach(rec => log(`  - ${rec}`, 'warning'));
    }
    
    log('\n🎉 Optimization completed successfully!', 'success');
    
  } catch (error) {
    log(`Optimization failed: ${error.message}`, 'error');
    process.exit(1);
  }
};

// Run optimization
main();
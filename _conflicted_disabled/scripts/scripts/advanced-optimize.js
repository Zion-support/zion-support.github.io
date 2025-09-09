#!/usr/bin/env node

/**
 * Advanced Build Optimization Script
 * Implements advanced performance optimizations and bundle analysis
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function analyzeBundleComposition() {
  const distPath = path.join(projectRoot, 'dist');
  
  if (!fs.existsSync(distPath)) {
    log('❌ Dist directory not found. Run build first.', 'red');
    return null;
  }

  log('\n🔍 Advanced Bundle Analysis', 'cyan');
  log('='.repeat(60), 'cyan');

  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  let totalSize = 0;
  const fileAnalysis = [];

  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;
    
    // Categorize files
    let category = 'other';
    if (file.includes('react-core')) category = 'react-core';
    else if (file.includes('motion')) category = 'animation';
    else if (file.includes('vendor')) category = 'vendor';
    else if (file.includes('components')) category = 'components';
    else if (file.includes('pages')) category = 'pages';
    else if (file.endsWith('.css')) category = 'styles';
    
    fileAnalysis.push({
      name: file,
      size: stats.size,
      sizeKB: parseFloat(sizeKB),
      category,
      gzipSize: estimateGzipSize(stats.size)
    });
  });

  // Sort by size
  fileAnalysis.sort((a, b) => b.size - a.size);

  log('\n📊 Bundle Composition:', 'yellow');
  const categories = {};
  fileAnalysis.forEach(file => {
    if (!categories[file.category]) {
      categories[file.category] = { count: 0, totalSize: 0, files: [] };
    }
    categories[file.category].count++;
    categories[file.category].totalSize += file.size;
    categories[file.category].files.push(file);
  });

  Object.entries(categories).forEach(([category, data]) => {
    const sizeKB = (data.totalSize / 1024).toFixed(2);
    const percentage = ((data.totalSize / totalSize) * 100).toFixed(1);
    log(`  ${category}: ${sizeKB} KB (${percentage}%) - ${data.count} files`, 'blue');
  });

  return { fileAnalysis, totalSize, categories };
}

function estimateGzipSize(originalSize) {
  // Rough estimation: gzip typically reduces size by 60-80%
  return Math.round(originalSize * 0.3);
}

function generateOptimizationRecommendations(analysis) {
  log('\n💡 Advanced Optimization Recommendations:', 'magenta');
  log('='.repeat(60), 'magenta');

  const { fileAnalysis, totalSize, categories } = analysis;
  const totalSizeKB = totalSize / 1024;

  // Bundle size recommendations
  if (totalSizeKB > 1000) {
    log('  🚨 Critical: Bundle size exceeds 1MB', 'red');
    log('     - Implement aggressive code splitting', 'yellow');
    log('     - Consider micro-frontend architecture', 'yellow');
    log('     - Remove unused dependencies immediately', 'yellow');
  } else if (totalSizeKB > 500) {
    log('  ⚠️  Warning: Bundle size is large', 'yellow');
    log('     - Implement lazy loading for all routes', 'yellow');
    log('     - Split large components into smaller chunks', 'yellow');
    log('     - Use dynamic imports for heavy libraries', 'yellow');
  }

  // React core optimization
  if (categories['react-core'] && categories['react-core'].totalSize > 200 * 1024) {
    log('  🔧 React Core Optimization:', 'cyan');
    log('     - Consider using React 18 features (Suspense, Concurrent)', 'blue');
    log('     - Implement React.memo for expensive components', 'blue');
    log('     - Use useMemo and useCallback strategically', 'blue');
  }

  // Animation library optimization
  if (categories['animation'] && categories['animation'].totalSize > 100 * 1024) {
    log('  🎬 Animation Optimization:', 'cyan');
    log('     - Consider lighter alternatives to Framer Motion', 'blue');
    log('     - Use CSS animations for simple effects', 'blue');
    log('     - Lazy load animation libraries', 'blue');
  }

  // Component optimization
  if (categories['components'] && categories['components'].totalSize > 150 * 1024) {
    log('  🧩 Component Optimization:', 'cyan');
    log('     - Implement component-level code splitting', 'blue');
    log('     - Use React.lazy for heavy components', 'blue');
    log('     - Remove unused component variants', 'blue');
  }

  // Page optimization
  if (categories['pages'] && categories['pages'].totalSize > 200 * 1024) {
    log('  📄 Page Optimization:', 'cyan');
    log('     - Implement route-based code splitting', 'blue');
    log('     - Preload critical pages only', 'blue');
    log('     - Use dynamic imports for all pages', 'blue');
  }
}

function generatePerformanceScore(analysis) {
  const { totalSize, categories } = analysis;
  const totalSizeKB = totalSize / 1024;
  
  let score = 100;
  
  // Deduct points for large bundle size
  if (totalSizeKB > 1000) score -= 40;
  else if (totalSizeKB > 500) score -= 20;
  else if (totalSizeKB > 300) score -= 10;
  
  // Deduct points for large individual files
  const largeFiles = Object.values(categories).filter(cat => 
    cat.files.some(file => file.sizeKB > 100)
  ).length;
  score -= largeFiles * 5;
  
  // Deduct points for too many chunks
  const totalChunks = Object.values(categories).reduce((sum, cat) => sum + cat.count, 0);
  if (totalChunks > 20) score -= 10;
  else if (totalChunks > 15) score -= 5;
  
  return Math.max(0, Math.min(100, score));
}

function createOptimizationPlan(analysis) {
  log('\n📋 Optimization Action Plan:', 'bright');
  log('='.repeat(60), 'bright');

  const score = generatePerformanceScore(analysis);
  
  log(`\n🎯 Performance Score: ${score}/100`, score > 80 ? 'green' : score > 60 ? 'yellow' : 'red');
  
  if (score < 60) {
    log('\n🚨 Immediate Actions Required:', 'red');
    log('  1. Run bundle analyzer: npm run build:analyze', 'yellow');
    log('  2. Remove unused dependencies', 'yellow');
    log('  3. Implement aggressive code splitting', 'yellow');
    log('  4. Optimize images and assets', 'yellow');
  } else if (score < 80) {
    log('\n⚠️  Optimization Recommended:', 'yellow');
    log('  1. Implement lazy loading for non-critical components', 'yellow');
    log('  2. Use dynamic imports for heavy libraries', 'yellow');
    log('  3. Optimize component rendering', 'yellow');
  } else {
    log('\n✅ Good Performance!', 'green');
    log('  Continue monitoring and fine-tuning', 'blue');
  }

  log('\n🔧 Technical Improvements:', 'cyan');
  log('  • Implement React 18 concurrent features', 'blue');
  log('  • Add service worker for caching', 'blue');
  log('  • Use Web Workers for heavy computations', 'blue');
  log('  • Implement virtual scrolling for large lists', 'blue');
  log('  • Add preloading for critical resources', 'blue');
}

function generateBundleReport(analysis) {
  const reportPath = path.join(projectRoot, 'bundle-optimization-report.json');
  const report = {
    timestamp: new Date().toISOString(),
    analysis: {
      totalSize: analysis.totalSize,
      totalSizeKB: (analysis.totalSize / 1024).toFixed(2),
      totalSizeMB: (analysis.totalSize / 1024 / 1024).toFixed(2),
      fileCount: analysis.fileAnalysis.length,
      categories: analysis.categories,
      performanceScore: generatePerformanceScore(analysis)
    },
    recommendations: [
      'Implement code splitting with React.lazy',
      'Use dynamic imports for heavy libraries',
      'Optimize images and assets',
      'Remove unused dependencies',
      'Implement service worker caching'
    ]
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  log(`\n📄 Detailed report saved to: ${reportPath}`, 'green');
}

function main() {
  log('\n🚀 Advanced Build Optimization', 'bright');
  log('='.repeat(60), 'bright');

  const analysis = analyzeBundleComposition();
  if (!analysis) return;

  generateOptimizationRecommendations(analysis);
  createOptimizationPlan(analysis);
  generateBundleReport(analysis);

  log('\n✨ Advanced optimization analysis complete!', 'green');
}

main();
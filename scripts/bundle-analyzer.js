#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Bundle Analyzer Script
 * Analyzes the built bundle and provides optimization recommendations
 */

const distDir = path.join(__dirname, '../dist/assets');
const bundleReport = {
  totalSize: 0,
  files: [],
  recommendations: [],
  analysis: {
    largeFiles: [],
    duplicateChunks: [],
    unusedAssets: [],
  }
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBundle() {
  console.log('🔍 Analyzing bundle...\n');

  if (!fs.existsSync(distDir)) {
    console.error('❌ Dist directory not found. Please run npm run build first.');
    process.exit(1);
  }

  const files = fs.readdirSync(distDir);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));

  // Analyze JS files
  jsFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    
    bundleReport.files.push({
      name: file,
      size: size,
      type: 'js',
      formattedSize: formatBytes(size)
    });
    
    bundleReport.totalSize += size;

    // Identify large files (>100KB)
    if (size > 100 * 1024) {
      bundleReport.analysis.largeFiles.push({
        name: file,
        size: size,
        formattedSize: formatBytes(size)
      });
    }
  });

  // Analyze CSS files
  cssFiles.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    
    bundleReport.files.push({
      name: file,
      size: size,
      type: 'css',
      formattedSize: formatBytes(size)
    });
    
    bundleReport.totalSize += size;
  });

  // Sort files by size
  bundleReport.files.sort((a, b) => b.size - a.size);

  // Generate recommendations
  generateRecommendations();

  // Print report
  printReport();
}

function generateRecommendations() {
  const { totalSize, files, analysis } = bundleReport;

  // Large bundle size
  if (totalSize > 500 * 1024) { // 500KB
    bundleReport.recommendations.push({
      type: 'warning',
      message: `Bundle size is large (${formatBytes(totalSize)}). Consider code splitting.`,
      action: 'Implement dynamic imports and route-based code splitting'
    });
  }

  // Large individual files
  if (analysis.largeFiles.length > 0) {
    bundleReport.recommendations.push({
      type: 'info',
      message: `Found ${analysis.largeFiles.length} large files (>100KB)`,
      action: 'Consider splitting large components or lazy loading'
    });
  }

  // Check for potential duplicates
  const chunkNames = files.map(f => f.name.split('-')[0]);
  const duplicates = chunkNames.filter((name, index) => chunkNames.indexOf(name) !== index);
  
  if (duplicates.length > 0) {
    bundleReport.recommendations.push({
      type: 'warning',
      message: 'Potential duplicate chunks detected',
      action: 'Review webpack configuration for proper chunk splitting'
    });
  }

  // CSS optimization
  const cssFiles = files.filter(f => f.type === 'css');
  if (cssFiles.length > 1) {
    bundleReport.recommendations.push({
      type: 'info',
      message: 'Multiple CSS files detected',
      action: 'Consider CSS bundling or critical CSS extraction'
    });
  }
}

function printReport() {
  console.log('📊 Bundle Analysis Report');
  console.log('='.repeat(50));
  console.log(`📁 Total Bundle Size: ${formatBytes(bundleReport.totalSize)}`);
  console.log(`📄 Total Files: ${bundleReport.files.length}`);
  console.log('');

  // Top 10 largest files
  console.log('🔝 Top 10 Largest Files:');
  console.log('-'.repeat(50));
  bundleReport.files.slice(0, 10).forEach((file, index) => {
    const icon = file.type === 'js' ? '📄' : '🎨';
    console.log(`${index + 1}. ${icon} ${file.name}: ${file.formattedSize}`);
  });
  console.log('');

  // Large files warning
  if (bundleReport.analysis.largeFiles.length > 0) {
    console.log('⚠️  Large Files (>100KB):');
    console.log('-'.repeat(50));
    bundleReport.analysis.largeFiles.forEach(file => {
      console.log(`📄 ${file.name}: ${file.formattedSize}`);
    });
    console.log('');
  }

  // Recommendations
  if (bundleReport.recommendations.length > 0) {
    console.log('💡 Optimization Recommendations:');
    console.log('-'.repeat(50));
    bundleReport.recommendations.forEach((rec, index) => {
      const icon = rec.type === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`${index + 1}. ${icon} ${rec.message}`);
      console.log(`   Action: ${rec.action}`);
      console.log('');
    });
  }

  // Performance score
  const score = calculatePerformanceScore();
  console.log('🎯 Performance Score:');
  console.log('-'.repeat(50));
  console.log(`Score: ${score}/100 ${getScoreEmoji(score)}`);
  console.log(`Status: ${getScoreStatus(score)}`);
  console.log('');

  // Next steps
  console.log('🚀 Next Steps:');
  console.log('-'.repeat(50));
  console.log('1. Run npm run build:analyze for detailed webpack analysis');
  console.log('2. Implement code splitting for large components');
  console.log('3. Use dynamic imports for route-based splitting');
  console.log('4. Optimize images and assets');
  console.log('5. Remove unused dependencies');
}

function calculatePerformanceScore() {
  const { totalSize, analysis } = bundleReport;
  let score = 100;

  // Deduct points for large bundle size
  if (totalSize > 1000 * 1024) score -= 30; // >1MB
  else if (totalSize > 500 * 1024) score -= 20; // >500KB
  else if (totalSize > 200 * 1024) score -= 10; // >200KB

  // Deduct points for large files
  score -= analysis.largeFiles.length * 5;

  // Deduct points for many files
  if (bundleReport.files.length > 50) score -= 10;
  else if (bundleReport.files.length > 30) score -= 5;

  return Math.max(0, score);
}

function getScoreEmoji(score) {
  if (score >= 90) return '🟢';
  if (score >= 70) return '🟡';
  if (score >= 50) return '🟠';
  return '🔴';
}

function getScoreStatus(score) {
  if (score >= 90) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 50) return 'Fair';
  return 'Needs Improvement';
}

// Run analysis
analyzeBundle();
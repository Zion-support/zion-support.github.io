#!/usr/bin/env node
/**
 * Performance Monitoring Script for Zion Tech Group
 * Monitors and reports on website performance metrics
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Performance thresholds
const THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  FCP: 1800, // First Contentful Paint (ms)
  TTFB: 600, // Time to First Byte (ms)
  bundleSize: 200000, // Bundle size in bytes
  totalSize: 3000000, // Total dist size in bytes
};

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

// Check if dist directory exists
const distPath = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distPath)) {
  console.error(`${colors.red}Error: dist directory not found. Please run 'npm run build' first.${colors.reset}`);
  process.exit(1);
}

// Analyze bundle sizes
function analyzeBundleSizes() {
  const files = fs.readdirSync(distPath, { withFileTypes: true });
  const stats = {
    totalSize: 0,
    jsFiles: [],
    cssFiles: [],
    otherFiles: [],
    largestFiles: [],
  };

  files.forEach(file => {
    if (file.isFile()) {
      const filePath = path.join(distPath, file.name);
      const stat = fs.statSync(filePath);
      const size = stat.size;
      
      stats.totalSize += size;
      
      if (file.name.endsWith('.js')) {
        stats.jsFiles.push({ name: file.name, size });
      } else if (file.name.endsWith('.css')) {
        stats.cssFiles.push({ name: file.name, size });
      } else {
        stats.otherFiles.push({ name: file.name, size });
      }
    }
  });

  // Sort files by size
  const allFiles = [...stats.jsFiles, ...stats.cssFiles, ...stats.otherFiles]
    .sort((a, b) => b.size - a.size);
  
  stats.largestFiles = allFiles.slice(0, 10);
  
  return stats;
}

// Check for performance issues
function checkPerformanceIssues(stats) {
  const issues = [];
  
  // Check total bundle size
  if (stats.totalSize > THRESHOLDS.totalSize) {
    issues.push({
      type: 'warning',
      message: `Total bundle size (${formatBytes(stats.totalSize)}) exceeds recommended threshold (${formatBytes(THRESHOLDS.totalSize)})`,
      suggestion: 'Consider code splitting and tree shaking'
    });
  }
  
  // Check for large JavaScript files
  const largeJsFiles = stats.jsFiles.filter(file => file.size > THRESHOLDS.bundleSize);
  if (largeJsFiles.length > 0) {
    issues.push({
      type: 'warning',
      message: `Large JavaScript files detected: ${largeJsFiles.map(f => f.name).join(', ')}`,
      suggestion: 'Consider splitting large bundles or lazy loading'
    });
  }
  
  // Check for unused CSS
  if (stats.cssFiles.length > 1) {
    issues.push({
      type: 'info',
      message: `Multiple CSS files detected (${stats.cssFiles.length})`,
      suggestion: 'Consider consolidating CSS files for better performance'
    });
  }
  
  return issues;
}

// Format bytes to human readable format
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Generate performance report
function generateReport(stats, issues) {
  console.log(`${colors.bold}${colors.blue}🚀 Zion Tech Group Performance Report${colors.reset}\n`);
  
  // Bundle size summary
  console.log(`${colors.bold}📦 Bundle Size Analysis:${colors.reset}`);
  console.log(`Total Size: ${formatBytes(stats.totalSize)}`);
  console.log(`JavaScript Files: ${stats.jsFiles.length} (${formatBytes(stats.jsFiles.reduce((sum, file) => sum + file.size, 0))})`);
  console.log(`CSS Files: ${stats.cssFiles.length} (${formatBytes(stats.cssFiles.reduce((sum, file) => sum + file.size, 0))})`);
  console.log(`Other Files: ${stats.otherFiles.length} (${formatBytes(stats.otherFiles.reduce((sum, file) => sum + file.size, 0))})\n`);
  
  // Largest files
  console.log(`${colors.bold}📊 Largest Files:${colors.reset}`);
  stats.largestFiles.slice(0, 5).forEach((file, index) => {
    const color = file.size > THRESHOLDS.bundleSize ? colors.red : colors.green;
    console.log(`${index + 1}. ${file.name} - ${color}${formatBytes(file.size)}${colors.reset}`);
  });
  console.log();
  
  // Performance issues
  if (issues.length > 0) {
    console.log(`${colors.bold}⚠️  Performance Issues:${colors.reset}`);
    issues.forEach((issue, index) => {
      const color = issue.type === 'warning' ? colors.yellow : 
                   issue.type === 'error' ? colors.red : colors.blue;
      console.log(`${index + 1}. ${color}${issue.message}${colors.reset}`);
      console.log(`   💡 ${issue.suggestion}\n`);
    });
  } else {
    console.log(`${colors.green}✅ No performance issues detected!${colors.reset}\n`);
  }
  
  // Performance score
  const score = calculatePerformanceScore(stats, issues);
  const scoreColor = score >= 90 ? colors.green : score >= 70 ? colors.yellow : colors.red;
  console.log(`${colors.bold}🎯 Performance Score: ${scoreColor}${score}/100${colors.reset}\n`);
  
  // Recommendations
  console.log(`${colors.bold}💡 Recommendations:${colors.reset}`);
  console.log('1. Enable gzip compression on your server');
  console.log('2. Use a CDN for static assets');
  console.log('3. Implement lazy loading for images and components');
  console.log('4. Consider using WebP format for images');
  console.log('5. Monitor Core Web Vitals in production');
  console.log('6. Use service workers for caching');
  console.log('7. Implement critical CSS inlining');
  console.log('8. Consider using HTTP/2 server push for critical resources\n');
}

// Calculate performance score
function calculatePerformanceScore(stats, issues) {
  let score = 100;
  
  // Deduct points for bundle size
  if (stats.totalSize > THRESHOLDS.totalSize) {
    score -= Math.min(20, (stats.totalSize - THRESHOLDS.totalSize) / 100000);
  }
  
  // Deduct points for large files
  const largeFiles = stats.largestFiles.filter(file => file.size > THRESHOLDS.bundleSize);
  score -= largeFiles.length * 5;
  
  // Deduct points for issues
  issues.forEach(issue => {
    if (issue.type === 'warning') score -= 5;
    if (issue.type === 'error') score -= 10;
  });
  
  return Math.max(0, Math.round(score));
}

// Main execution
function main() {
  console.log(`${colors.bold}🔍 Analyzing Zion Tech Group build...${colors.reset}\n`);
  
  const stats = analyzeBundleSizes();
  const issues = checkPerformanceIssues(stats);
  
  generateReport(stats, issues);
  
  // Exit with appropriate code
  const hasErrors = issues.some(issue => issue.type === 'error');
  process.exit(hasErrors ? 1 : 0);
}

// Run the script
main();

export {
  analyzeBundleSizes,
  checkPerformanceIssues,
  generateReport,
  calculatePerformanceScore
};
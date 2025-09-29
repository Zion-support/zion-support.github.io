#!/usr/bin/env node

/**
 * Build Optimization Script
 * Optimizes the build process and output for better performance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting build optimization...');

// 1. Clean previous builds
console.log('🧹 Cleaning previous builds...');
try {
  execSync('rm -rf dist', { stdio: 'inherit' });
} catch (error) {
  console.log('No previous build to clean');
}

// 2. Run optimized build
console.log('🔨 Running optimized build...');
try {
  execSync('pnpm run build:optimized', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

// 3. Analyze bundle size
console.log('📊 Analyzing bundle size...');
try {
  execSync('pnpm run analyze', { stdio: 'inherit' });
} catch (error) {
  console.log('Bundle analysis not available');
}

// 4. Generate performance report
console.log('📈 Generating performance report...');
const reportPath = path.join(__dirname, '../dist/performance-report.json');
const report = {
  timestamp: new Date().toISOString(),
  buildSize: getBuildSize(),
  recommendations: generateRecommendations()
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`✅ Performance report saved to ${reportPath}`);

function getBuildSize() {
  const distPath = path.join(__dirname, '../dist');
  let totalSize = 0;
  
  function getDirSize(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getDirSize(filePath);
      } else {
        totalSize += stat.size;
      }
    });
  }
  
  if (fs.existsSync(distPath)) {
    getDirSize(distPath);
  }
  
  return {
    bytes: totalSize,
    kb: Math.round(totalSize / 1024),
    mb: Math.round(totalSize / 1024 / 1024)
  };
}

function generateRecommendations() {
  const recommendations = [];
  const buildSize = getBuildSize();
  
  if (buildSize.mb > 2) {
    recommendations.push('Consider code splitting to reduce bundle size');
  }
  
  recommendations.push('Enable gzip compression on your server');
  recommendations.push('Use CDN for static assets');
  recommendations.push('Implement lazy loading for non-critical components');
  
  return recommendations;
}

console.log('✅ Build optimization complete!');
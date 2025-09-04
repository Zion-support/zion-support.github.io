#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('⚡ Starting Performance Optimization...\n');

// Analyze bundle size
console.log('📦 Analyzing bundle size...');
try {
  const buildResult = execSync('npm run build', { encoding: 'utf8' });
  console.log('✅ Build completed successfully');
  
  // Check .next directory size
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    const stats = execSync(`du -sh ${nextDir}`, { encoding: 'utf8' });
    console.log(`📊 Build size: ${stats.trim()}`);
  }
} catch (error) {
  console.log('❌ Build failed:', error.message);
}

// Check for large files
console.log('\n🔍 Scanning for large files...');
const scanForLargeFiles = (dir, results = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      scanForLargeFiles(filePath, results);
    } else if (stat.isFile()) {
      const sizeInMB = stat.size / (1024 * 1024);
      if (sizeInMB > 1) { // Files larger than 1MB
        results.push({
          file: filePath,
          size: sizeInMB.toFixed(2) + ' MB'
        });
      }
    }
  });
  
  return results;
};

const largeFiles = scanForLargeFiles('.');
if (largeFiles.length > 0) {
  console.log('⚠️  Large files found:');
  largeFiles.forEach(file => {
    console.log(`   - ${file.file}: ${file.size}`);
  });
} else {
  console.log('✅ No large files found');
}

// Check for unused dependencies
console.log('\n📋 Checking for unused dependencies...');
try {
  const depcheckResult = execSync('npx depcheck --json', { encoding: 'utf8' });
  const depcheckData = JSON.parse(depcheckResult);
  
  if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
    console.log('⚠️  Potentially unused dependencies:');
    depcheckData.dependencies.forEach(dep => {
      console.log(`   - ${dep}`);
    });
  } else {
    console.log('✅ No unused dependencies found');
  }
} catch (error) {
  console.log('ℹ️  Install depcheck to check for unused dependencies: npm install -g depcheck');
}

// Performance recommendations
const performanceRecommendations = [
  'Implement code splitting for better loading performance',
  'Optimize images using Next.js Image component',
  'Enable compression in Next.js configuration',
  'Use dynamic imports for heavy components',
  'Implement proper caching strategies',
  'Minimize bundle size by removing unused code',
  'Use WebP/AVIF image formats',
  'Implement lazy loading for below-the-fold content'
];

console.log('\n💡 Performance Optimization Recommendations:');
performanceRecommendations.forEach((rec, index) => {
  console.log(`   ${index + 1}. ${rec}`);
});

// Generate performance report
const performanceReport = {
  timestamp: new Date().toISOString(),
  largeFiles: largeFiles.length,
  recommendations: performanceRecommendations,
  metrics: {
    buildSize: 'Check .next directory size',
    bundleAnalysis: 'Run npm run analyze for detailed bundle analysis'
  }
};

fs.writeFileSync('performance-optimization-report.json', JSON.stringify(performanceReport, null, 2));
console.log('\n📊 Performance optimization report saved to performance-optimization-report.json');
console.log('⚡ Performance optimization completed!');
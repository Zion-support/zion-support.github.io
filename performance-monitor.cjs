#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Performance Monitoring Starting...\n');

// Performance metrics collection
const metrics = {
  buildTime: 0,
  bundleSize: 0,
  pageCount: 0,
  timestamp: new Date().toISOString()
};

// Measure build performance
console.log('⏱️  Measuring build performance...');
const startTime = Date.now();

try {
  execSync('npm run build', { stdio: 'pipe' });
  metrics.buildTime = Date.now() - startTime;
  console.log(`✅ Build completed in ${metrics.buildTime}ms`);
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Analyze bundle size
console.log('📦 Analyzing bundle size...');
try {
  const buildOutput = execSync('du -sh .next', { encoding: 'utf8' });
  const sizeMatch = buildOutput.match(/([0-9.]+)([KMGT]?)/);
  if (sizeMatch) {
    metrics.bundleSize = sizeMatch[1] + sizeMatch[2];
  }
  console.log(`📊 Bundle size: ${metrics.bundleSize}`);
} catch (error) {
  console.warn('⚠️  Could not analyze bundle size');
}

// Count pages
console.log('📄 Counting generated pages...');
try {
  const pagesDir = '.next/server/app';
  if (fs.existsSync(pagesDir)) {
    const pages = fs.readdirSync(pagesDir, { recursive: true })
      .filter(file => file.endsWith('.html'));
    metrics.pageCount = pages.length;
  }
  console.log(`📊 Generated ${metrics.pageCount} pages`);
} catch (error) {
  console.warn('⚠️  Could not count pages');
}

// Save metrics
const reportPath = 'performance-metrics.json';
fs.writeFileSync(reportPath, JSON.stringify(metrics, null, 2));
console.log(`📊 Performance metrics saved to ${reportPath}`);

// Performance recommendations
console.log('\n💡 Performance Recommendations:');
if (metrics.buildTime > 30000) {
  console.log('⚠️  Build time is high. Consider:');
  console.log('   - Enabling SWC compiler');
  console.log('   - Optimizing imports');
  console.log('   - Using dynamic imports for large components');
}

if (metrics.bundleSize && metrics.bundleSize.includes('M') && parseFloat(metrics.bundleSize) > 5) {
  console.log('⚠️  Bundle size is large. Consider:');
  console.log('   - Code splitting');
  console.log('   - Tree shaking unused code');
  console.log('   - Optimizing images');
}

console.log('\n🎉 Performance monitoring completed!');

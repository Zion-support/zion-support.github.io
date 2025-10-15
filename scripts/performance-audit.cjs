const fs = require('fs');
const path = require('path');

// Performance audit script
function auditPerformance() {
  const distPath = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  console.log('🔍 Running performance audit...\n');

  // Check bundle sizes
  const assetsPath = path.join(distPath, 'assets');
  const files = fs.readdirSync(assetsPath);
  
  let totalSize = 0;
  const bundleSizes = [];
  
  files.forEach(file => {
    const filePath = path.join(assetsPath, file);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    totalSize += sizeKB;
    
    bundleSizes.push({
      name: file,
      size: sizeKB,
      sizeFormatted: formatBytes(stats.size)
    });
  });

  // Sort by size
  bundleSizes.sort((a, b) => b.size - a.size);

  console.log('📊 Bundle Analysis:');
  console.log('==================');
  bundleSizes.forEach(bundle => {
    const status = bundle.size > 500 ? '⚠️' : bundle.size > 200 ? '⚡' : '✅';
    console.log(`${status} ${bundle.name}: ${bundle.sizeFormatted}`);
  });

  console.log(`\n📈 Total Bundle Size: ${formatBytes(totalSize * 1024)}`);

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('===============================');
  
  const largeBundles = bundleSizes.filter(b => b.size > 200);
  if (largeBundles.length > 0) {
    console.log('🔧 Large bundles detected:');
    largeBundles.forEach(bundle => {
      console.log(`   - ${bundle.name}: Consider further code splitting`);
    });
  }

  const veryLargeBundles = bundleSizes.filter(b => b.size > 500);
  if (veryLargeBundles.length > 0) {
    console.log('🚨 Very large bundles (>500KB):');
    veryLargeBundles.forEach(bundle => {
      console.log(`   - ${bundle.name}: Critical - needs immediate optimization`);
    });
  }

  // Check for common performance issues
  console.log('\n🔍 Performance Checks:');
  console.log('======================');
  
  // Check if images are optimized
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  if (imageFiles.length === 0) {
    console.log('✅ No unoptimized images found');
  } else {
    console.log(`⚠️  Found ${imageFiles.length} image files - consider using WebP format`);
  }

  // Check for CSS optimization
  const cssFiles = files.filter(f => f.endsWith('.css'));
  const cssSize = cssFiles.reduce((total, file) => {
    const filePath = path.join(assetsPath, file);
    return total + fs.statSync(filePath).size;
  }, 0);
  
  if (cssSize > 100 * 1024) { // 100KB
    console.log(`⚠️  CSS size is ${formatBytes(cssSize)} - consider purging unused styles`);
  } else {
    console.log('✅ CSS size is optimized');
  }

  // Check for JavaScript optimization
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const jsSize = jsFiles.reduce((total, file) => {
    const filePath = path.join(assetsPath, file);
    return total + fs.statSync(filePath).size;
  }, 0);
  
  console.log(`📦 Total JavaScript: ${formatBytes(jsSize)}`);
  
  if (jsSize > 1000 * 1024) { // 1MB
    console.log('⚠️  JavaScript bundle is large - consider lazy loading');
  } else {
    console.log('✅ JavaScript bundle size is reasonable');
  }

  // Performance score
  let score = 100;
  if (veryLargeBundles.length > 0) score -= 30;
  if (largeBundles.length > 2) score -= 20;
  if (cssSize > 100 * 1024) score -= 10;
  if (jsSize > 1000 * 1024) score -= 20;
  if (imageFiles.length > 0) score -= 10;

  console.log(`\n🎯 Performance Score: ${score}/100`);
  
  if (score >= 90) {
    console.log('🌟 Excellent performance!');
  } else if (score >= 70) {
    console.log('👍 Good performance with room for improvement');
  } else if (score >= 50) {
    console.log('⚠️  Performance needs attention');
  } else {
    console.log('🚨 Critical performance issues detected');
  }

  // Generate performance report
  const report = {
    timestamp: new Date().toISOString(),
    totalSize: totalSize * 1024,
    totalSizeFormatted: formatBytes(totalSize * 1024),
    bundles: bundleSizes,
    performanceScore: score,
    recommendations: {
      largeBundles: largeBundles.map(b => b.name),
      veryLargeBundles: veryLargeBundles.map(b => b.name),
      imageOptimization: imageFiles.length > 0,
      cssOptimization: cssSize > 100 * 1024,
      jsOptimization: jsSize > 1000 * 1024
    }
  };

  fs.writeFileSync(
    path.join(__dirname, '..', 'performance-audit-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('\n📄 Performance report saved to performance-audit-report.json');
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the audit
auditPerformance();
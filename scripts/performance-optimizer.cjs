const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('🚀 Starting performance optimization...');
  
  const distPath = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Please run build first.');
    return;
  }

  // Performance report
  const performanceReport = {
    timestamp: new Date().toISOString(),
    optimizations: [],
    recommendations: []
  };

  // Check bundle sizes
  const assetsPath = path.join(distPath, 'assets');
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const cssFiles = files.filter(file => file.endsWith('.css'));
    
    let totalJsSize = 0;
    let totalCssSize = 0;
    
    jsFiles.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      totalJsSize += stats.size;
    });
    
    cssFiles.forEach(file => {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      totalCssSize += stats.size;
    });
    
    performanceReport.bundleSizes = {
      totalJsSize: `${(totalJsSize / 1024).toFixed(2)} KB`,
      totalCssSize: `${(totalCssSize / 1024).toFixed(2)} KB`,
      totalSize: `${((totalJsSize + totalCssSize) / 1024).toFixed(2)} KB`
    };
    
    console.log('📊 Bundle sizes:');
    console.log(`   JavaScript: ${performanceReport.bundleSizes.totalJsSize}`);
    console.log(`   CSS: ${performanceReport.bundleSizes.totalCssSize}`);
    console.log(`   Total: ${performanceReport.bundleSizes.totalSize}`);
  }

  // Check for large chunks
  const largeChunks = [];
  if (fs.existsSync(assetsPath)) {
    const files = fs.readdirSync(assetsPath);
    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(assetsPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = stats.size / 1024;
        if (sizeKB > 150) {
          largeChunks.push({ file, size: `${sizeKB.toFixed(2)} KB` });
        }
      }
    });
  }

  if (largeChunks.length > 0) {
    performanceReport.largeChunks = largeChunks;
    console.log('⚠️  Large chunks detected:');
    largeChunks.forEach(chunk => {
      console.log(`   ${chunk.file}: ${chunk.size}`);
    });
  }

  // Generate recommendations
  performanceReport.recommendations = [
    'Consider implementing code splitting for better performance',
    'Use dynamic imports for large components',
    'Optimize images and assets',
    'Implement lazy loading for non-critical resources',
    'Consider using a CDN for static assets'
  ];

  // Write performance report
  const reportPath = path.join(__dirname, '..', 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));
  console.log('✓ Performance report generated at:', reportPath);

  console.log('✅ Performance optimization completed!');
}

// Run optimization
try {
  optimizePerformance();
} catch (error) {
  console.error('❌ Error during performance optimization:', error);
  process.exit(1);
}
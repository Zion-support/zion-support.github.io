const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  const distDir = path.join(__dirname, '..', 'dist');
  
  if (!fs.existsSync(distDir)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  console.log('🚀 Starting performance optimization...');

  // Get all JS files in dist/assets
  const assetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    console.log('❌ Assets directory not found.');
    return;
  }

  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(file => file.endsWith('.js'));
  
  console.log(`📊 Found ${jsFiles.length} JavaScript files to analyze`);

  // Calculate total size
  let totalSize = 0;
  let totalGzipSize = 0;
  
  jsFiles.forEach(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });

  // Convert to MB
  const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
  
  console.log(`📦 Total JavaScript size: ${totalSizeMB} MB`);
  
  // Check for large files
  const largeFiles = jsFiles.filter(file => {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    return stats.size > 150 * 1024; // 150KB
  });

  if (largeFiles.length > 0) {
    console.log('⚠️  Large files detected:');
    largeFiles.forEach(file => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`   - ${file}: ${sizeKB} KB`);
    });
  }

  // Generate performance report
  const report = {
    timestamp: new Date().toISOString(),
    totalFiles: jsFiles.length,
    totalSize: totalSize,
    totalSizeMB: parseFloat(totalSizeMB),
    largeFiles: largeFiles.map(file => {
      const filePath = path.join(assetsDir, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024)
      };
    }),
    recommendations: [
      'Consider code splitting for large files',
      'Use dynamic imports for non-critical code',
      'Optimize images and assets',
      'Enable gzip compression on server',
      'Use CDN for static assets'
    ]
  };

  // Write performance report
  const reportPath = path.join(distDir, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('✅ Performance optimization completed!');
  console.log(`📊 Report saved to: ${reportPath}`);
  console.log('💡 Recommendations:');
  report.recommendations.forEach(rec => console.log(`   - ${rec}`));
};

// Run optimization
try {
  optimizePerformance();
} catch (error) {
  console.error('❌ Error during performance optimization:', error);
  process.exit(1);
}
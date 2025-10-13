const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  console.log('🚀 Starting performance optimization...');
  
  try {
    // Check if dist directory exists
    const distDir = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distDir)) {
      console.log('❌ Dist directory not found. Please run build first.');
      return;
    }

    // Get build statistics
    const stats = getBuildStats(distDir);
    console.log('📊 Build Statistics:');
    console.log(`   Total size: ${stats.totalSize} MB`);
    console.log(`   Files: ${stats.fileCount}`);
    console.log(`   Largest file: ${stats.largestFile} (${stats.largestFileSize} KB)`);

    // Optimize images if any
    optimizeImages(distDir);
    
    // Generate performance report
    generatePerformanceReport(stats);
    
    console.log('✅ Performance optimization completed!');
  } catch (error) {
    console.error('❌ Error during performance optimization:', error);
  }
};

const getBuildStats = (distDir) => {
  let totalSize = 0;
  let fileCount = 0;
  let largestFile = '';
  let largestFileSize = 0;

  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else {
        const size = stat.size;
        totalSize += size;
        fileCount++;
        
        if (size > largestFileSize) {
          largestFileSize = size;
          largestFile = item;
        }
      }
    });
  };

  scanDirectory(distDir);
  
  return {
    totalSize: (totalSize / 1024 / 1024).toFixed(2),
    fileCount,
    largestFile,
    largestFileSize: (largestFileSize / 1024).toFixed(2)
  };
};

const optimizeImages = (distDir) => {
  console.log('🖼️  Optimizing images...');
  
  // This is a placeholder for image optimization
  // In a real implementation, you would use libraries like sharp or imagemin
  console.log('   Image optimization completed (placeholder)');
};

const generatePerformanceReport = (stats) => {
  const report = {
    timestamp: new Date().toISOString(),
    buildStats: stats,
    recommendations: [
      'Consider implementing lazy loading for images',
      'Use code splitting for better performance',
      'Optimize bundle size by removing unused code',
      'Implement service worker for caching',
      'Use CDN for static assets'
    ]
  };

  const reportPath = path.join(__dirname, '..', 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('📄 Performance report generated:', reportPath);
};

// Run optimization
optimizePerformance();
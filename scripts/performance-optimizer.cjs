const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  console.log('🚀 Starting performance optimization...');
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('❌ Dist directory not found. Please run build first.');
    return;
  }
  
  // Get build stats
  const stats = getBuildStats(distPath);
  console.log('📊 Build Statistics:');
  console.log(`   Total files: ${stats.totalFiles}`);
  console.log(`   Total size: ${formatBytes(stats.totalSize)}`);
  console.log(`   JS files: ${stats.jsFiles} (${formatBytes(stats.jsSize)})`);
  console.log(`   CSS files: ${stats.cssFiles} (${formatBytes(stats.cssSize)})`);
  console.log(`   Image files: ${stats.imageFiles} (${formatBytes(stats.imageSize)})`);
  
  // Generate performance report
  const report = generatePerformanceReport(stats);
  const reportPath = path.join(__dirname, '..', 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('📄 Performance report generated:', reportPath);
  
  console.log('✅ Performance optimization completed!');
};

const getBuildStats = (distPath) => {
  let totalFiles = 0;
  let totalSize = 0;
  let jsFiles = 0;
  let jsSize = 0;
  let cssFiles = 0;
  let cssSize = 0;
  let imageFiles = 0;
  let imageSize = 0;
  
  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else {
        totalFiles++;
        totalSize += stat.size;
        
        const ext = path.extname(file).toLowerCase();
        if (ext === '.js') {
          jsFiles++;
          jsSize += stat.size;
        } else if (ext === '.css') {
          cssFiles++;
          cssSize += stat.size;
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
          imageFiles++;
          imageSize += stat.size;
        }
      }
    });
  };
  
  walkDir(distPath);
  
  return {
    totalFiles,
    totalSize,
    jsFiles,
    jsSize,
    cssFiles,
    cssSize,
    imageFiles,
    imageSize
  };
};

const generatePerformanceReport = (stats) => {
  const report = {
    timestamp: new Date().toISOString(),
    buildStats: stats,
    recommendations: []
  };
  
  // Add recommendations based on stats
  if (stats.jsSize > 500 * 1024) { // 500KB
    report.recommendations.push({
      type: 'warning',
      message: 'JavaScript bundle size is large. Consider code splitting or tree shaking.'
    });
  }
  
  if (stats.cssSize > 100 * 1024) { // 100KB
    report.recommendations.push({
      type: 'warning',
      message: 'CSS bundle size is large. Consider purging unused styles.'
    });
  }
  
  if (stats.imageSize > 1024 * 1024) { // 1MB
    report.recommendations.push({
      type: 'warning',
      message: 'Image assets are large. Consider optimizing or using WebP format.'
    });
  }
  
  if (stats.totalSize < 1024 * 1024) { // 1MB
    report.recommendations.push({
      type: 'success',
      message: 'Build size is optimized! Great job!'
    });
  }
  
  return report;
};

const formatBytes = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Run optimization
optimizePerformance();
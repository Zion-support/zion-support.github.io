const fs = require('fs');
const path = require('path');

console.log('🚀 Starting enhanced performance optimization...');

// Read build statistics
const distPath = path.join(__dirname, '../dist');
const assetsPath = path.join(distPath, 'assets');

if (!fs.existsSync(assetsPath)) {
  console.log('❌ No assets found. Please run build first.');
  process.exit(1);
}

const files = fs.readdirSync(assetsPath);
let totalSize = 0;
let jsFiles = 0;
let cssFiles = 0;
let imageFiles = 0;
let jsSize = 0;
let cssSize = 0;
let imageSize = 0;

files.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  const size = stats.size;
  totalSize += size;

  if (file.endsWith('.js')) {
    jsFiles++;
    jsSize += size;
  } else if (file.endsWith('.css')) {
    cssFiles++;
    cssSize += size;
  } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
    imageFiles++;
    imageSize += size;
  }
});

console.log('📊 Enhanced Build Statistics:');
console.log(`   Total files: ${files.length}`);
console.log(`   Total size: ${(totalSize / 1024).toFixed(2)} KB`);
console.log(`   JS files: ${jsFiles} (${(jsSize / 1024).toFixed(2)} KB)`);
console.log(`   CSS files: ${cssFiles} (${(cssSize / 1024).toFixed(2)} KB)`);
console.log(`   Image files: ${imageFiles} (${(imageSize / 1024).toFixed(2)} KB)`);

// Generate performance recommendations
const recommendations = [];

if (jsSize > 500000) {
  recommendations.push({
    type: 'warning',
    message: 'JavaScript bundle size is large. Consider implementing more granular code splitting.'
  });
}

if (cssSize > 50000) {
  recommendations.push({
    type: 'warning',
    message: 'CSS bundle size is large. Consider purging unused styles.'
  });
}

if (imageFiles === 0) {
  recommendations.push({
    type: 'info',
    message: 'No images found. Consider adding optimized images for better visual appeal.'
  });
}

// Check for large chunks
const largeChunks = files.filter(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  return stats.size > 200000; // 200KB
});

if (largeChunks.length > 0) {
  recommendations.push({
    type: 'warning',
    message: `Large chunks detected: ${largeChunks.join(', ')}. Consider further code splitting.`
  });
}

// Performance score calculation
let performanceScore = 100;
if (jsSize > 500000) performanceScore -= 20;
if (cssSize > 50000) performanceScore -= 10;
if (largeChunks.length > 0) performanceScore -= 15;
if (imageFiles === 0) performanceScore -= 5;

recommendations.push({
  type: 'success',
  message: `Performance Score: ${performanceScore}/100 - ${performanceScore >= 80 ? 'Excellent' : performanceScore >= 60 ? 'Good' : 'Needs Improvement'}`
});

// Generate performance report
const performanceReport = {
  timestamp: new Date().toISOString(),
  buildStats: {
    totalFiles: files.length,
    totalSize: totalSize,
    jsFiles,
    jsSize,
    cssFiles,
    cssSize,
    imageFiles,
    imageSize
  },
  performanceScore,
  recommendations,
  largeChunks: largeChunks.map(file => ({
    name: file,
    size: fs.statSync(path.join(assetsPath, file)).size
  }))
};

// Write performance report
const reportPath = path.join(__dirname, '../performance-report-enhanced.json');
fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

console.log('📄 Enhanced performance report generated:', reportPath);
console.log('✅ Enhanced performance optimization completed!');

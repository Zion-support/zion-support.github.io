const fs = require('fs');
const path = require('path');

console.log('Starting performance optimization...');

// Optimize images
console.log('Optimizing images...');
// This would typically use sharp or imagemin
// For now, we'll just log the step

// Optimize CSS
console.log('Optimizing CSS...');
const distDir = path.join(__dirname, '..', 'dist');
const cssFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.css'));

cssFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove comments
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Remove extra whitespace
  content = content.replace(/\s+/g, ' ');
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/{\s*/g, '{');
  content = content.replace(/;\s*/g, ';');
  
  fs.writeFileSync(filePath, content);
  console.log(`Optimized CSS file: ${file}`);
});

// Optimize JavaScript
console.log('Optimizing JavaScript...');
const jsFiles = fs.readdirSync(distDir).filter(file => file.endsWith('.js'));

jsFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove console.log statements in production
  if (process.env.NODE_ENV === 'production') {
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    content = content.replace(/console\.warn\([^)]*\);?/g, '');
    content = content.replace(/console\.error\([^)]*\);?/g, '');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Optimized JS file: ${file}`);
});

// Generate performance report
console.log('Generating performance report...');
const report = {
  timestamp: new Date().toISOString(),
  buildSize: getDirectorySize(distDir),
  files: {
    css: cssFiles.length,
    js: jsFiles.length,
    html: fs.readdirSync(distDir).filter(file => file.endsWith('.html')).length
  },
  optimizations: [
    'CSS minification',
    'JavaScript optimization',
    'Console log removal',
    'Whitespace removal'
  ]
};

const reportPath = path.join(distDir, 'performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`Performance report saved to: ${reportPath}`);

// Helper function to calculate directory size
function getDirectorySize(dirPath) {
  let totalSize = 0;
  
  function calculateSize(itemPath) {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      files.forEach(file => {
        calculateSize(path.join(itemPath, file));
      });
    } else {
      totalSize += stats.size;
    }
  }
  
  calculateSize(dirPath);
  return totalSize;
}

console.log('Performance optimization completed!');
const fs = require('fs');
const path = require('path');

// Performance optimization script
function optimizePerformance() {
  console.log('Starting performance optimization...');
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distPath)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }
  
  // List of files to optimize
  const filesToOptimize = [
    'index.html',
    'assets/index.css',
    'assets/index.js'
  ];
  
  let totalSavings = 0;
  
  filesToOptimize.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const originalSize = stats.size;
      
      // Simple optimization: remove extra whitespace
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\s+/g, ' ').trim();
      
      fs.writeFileSync(filePath, content);
      
      const newStats = fs.statSync(filePath);
      const newSize = newStats.size;
      const savings = originalSize - newSize;
      totalSavings += savings;
      
      console.log(`Optimized ${file}: ${originalSize} -> ${newSize} bytes (${savings} bytes saved)`);
    }
  });
  
  console.log(`Total optimization savings: ${totalSavings} bytes`);
  console.log('Performance optimization completed!');
}

// Run optimization
optimizePerformance();
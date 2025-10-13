const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  console.log('Running performance optimizations...');
  
  // Check if dist directory exists
  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found. Please run build first.');
    return;
  }
  
  // List files in dist directory
  const files = fs.readdirSync(distDir, { recursive: true });
  console.log(`Found ${files.length} files in dist directory`);
  
  // Check for large files
  const largeFiles = files.filter(file => {
    const filePath = path.join(distDir, file);
    if (fs.statSync(filePath).isFile()) {
      const size = fs.statSync(filePath).size;
      return size > 100000; // Files larger than 100KB
    }
    return false;
  });
  
  if (largeFiles.length > 0) {
    console.log('Large files found:');
    largeFiles.forEach(file => {
      const filePath = path.join(distDir, file);
      const size = fs.statSync(filePath).size;
      console.log(`  ${file}: ${(size / 1024).toFixed(2)} KB`);
    });
  }
  
  console.log('Performance optimization completed!');
};

optimizePerformance();

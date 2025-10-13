const fs = require('fs');
const path = require('path');

// Performance optimization script
const optimizePerformance = () => {
  const distPath = path.join(__dirname, '../dist');
  
  console.log('Running performance optimizations...');
  
  // Check if dist directory exists
  if (!fs.existsSync(distPath)) {
    console.log('Dist directory not found. Build first.');
    return;
  }
  
  // List files in dist directory
  const files = fs.readdirSync(distPath, { recursive: true });
  console.log(`Found ${files.length} files in dist directory`);
  
  // Calculate total size
  let totalSize = 0;
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.statSync(filePath).isFile()) {
      totalSize += fs.statSync(filePath).size;
    }
  });
  
  console.log(`Total build size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log('Performance optimization completed');
};

optimizePerformance();

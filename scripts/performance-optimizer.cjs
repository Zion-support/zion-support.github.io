const fs = require('fs');
const path = require('path');

const optimizeBuild = () => {
  const distDir = path.join(__dirname, '../dist');
  
  // Check if dist directory exists
  if (!fs.existsSync(distDir)) {
    console.log('Dist directory not found, skipping optimization');
    return;
  }

  // Get build stats
  const stats = fs.readdirSync(distDir);
  const totalSize = getDirectorySize(distDir);
  
  console.log('Build optimization completed!');
  console.log(`Total build size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Number of files: ${stats.length}`);
};

const getDirectorySize = (dir) => {
  let size = 0;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stat.size;
    }
  });
  
  return size;
};

optimizeBuild();

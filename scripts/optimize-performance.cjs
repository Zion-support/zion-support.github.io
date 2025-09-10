
const fs = require('fs');
const path = require('path');

function optimizePerformance() {
  console.log('Optimizing performance...');
  
  // Check for performance issues
  const issues = [];
  
  // Check for large images
  const imageDir = path.join(process.cwd(), 'public/images');
  if (fs.existsSync(imageDir)) {
    const images = fs.readdirSync(imageDir);
    images.forEach(image => {
      const imagePath = path.join(imageDir, image);
      const stats = fs.statSync(imagePath);
      const sizeInMB = stats.size / (1024 * 1024);
      
      if (sizeInMB > 1) {
        issues.push(`Large image: ${image} (${sizeInMB.toFixed(2)}MB)`);
      }
    });
  }
  
  // Check for unused CSS
  const cssFiles = findFiles('src', '.css');
  cssFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const unusedClasses = findUnusedClasses(content);
    
    if (unusedClasses.length > 0) {
      issues.push(`Unused CSS classes in ${file}: ${unusedClasses.join(', ')}`);
    }
  });
  
  if (issues.length > 0) {
    console.log('Performance issues found:');
    issues.forEach(issue => console.log(`- ${issue}`));
  } else {
    console.log('No performance issues found');
  }
  
  return issues;
}

function findFiles(dir, ext) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, ext));
    } else if (item.endsWith(ext)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

function findUnusedClasses(cssContent) {
  // Simple check for unused classes (this is a basic implementation)
  const classes = cssContent.match(/\.([a-zA-Z0-9_-]+)/g) || [];
  return classes.filter((cls, index) => classes.indexOf(cls) === index);
}

optimizePerformance();

const fs = require('fs');
const path = require('path');

// Find all 5G pages and fix their function names
const find5GPages = () => {
  const pageFiles = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item === 'page.tsx' && fullPath.includes('5g-')) {
        pageFiles.push(fullPath);
      }
    });
  };
  
  scanDirectory('app');
  return pageFiles;
};

// Fix function names in 5G pages
const fix5GPages = () => {
  const pageFiles = find5GPages();
  
  pageFiles.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace function names that start with 5G
      content = content.replace(/export default function 5g(\w+)Page\(\)/g, 'export default function G5$1Page()');
      content = content.replace(/export default function 5G(\w+)Page\(\)/g, 'export default function G5$1Page()');
      
      // Also fix the title in the Helmet
      content = content.replace(/<title>5g (\w+) \| Zion Tech Group<\/title>/g, '<title>5G $1 | Zion Tech Group</title>');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed function name in: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
};

fix5GPages();
console.log('All 5G page function names have been fixed!');

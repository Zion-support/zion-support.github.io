const fs = require('fs');
const path = require('path');

// Get all page files that need fixing
const getAllPageFiles = () => {
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  };
  
  walkDir('app');
  return files;
};

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has 'use client' directive
    if (content.includes("'use client'")) {
      // Remove 'use client' from anywhere in the file
      content = content.replace(/'use client';\s*/g, '');
      
      // Add 'use client' at the very beginning
      content = "'use client';\n\n" + content;
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed 'use client' directive in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Get all page files and fix them
const pageFiles = getAllPageFiles();
console.log(`Found ${pageFiles.length} page files to check`);

pageFiles.forEach(fixFile);

console.log('Use client directive fixed!');
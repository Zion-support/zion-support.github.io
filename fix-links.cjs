const fs = require('fs');
const path = require('path');

// Find all files that use Link
function findFilesWithLink(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('Link') && !content.includes('import Link from \'next/link\'')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function fixLinkInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses Link but doesn't import it
    if (content.includes('Link') && !content.includes('import Link from \'next/link\'')) {
      // Add Next.js Link import
      if (content.includes('import React')) {
        content = content.replace(
          /(import React[^;]+;)/,
          '$1\nimport Link from \'next/link\';'
        );
      } else {
        content = 'import Link from \'next/link\';\n' + content;
      }
      
      // Replace React Router Link usage with Next.js Link
      content = content.replace(/to="/g, 'href="');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Link in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const files = findFilesWithLink(path.join(__dirname, 'app'));
files.forEach(fixLinkInFile);

console.log(`Fixed ${files.length} files with Link issues`);
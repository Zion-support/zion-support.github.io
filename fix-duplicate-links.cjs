const fs = require('fs');
const path = require('path');

// Find all files that have duplicate Link imports
function findFilesWithDuplicateLinks(dir) {
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
        if (content.includes('import Link from \'next/link\'') && content.includes('import { Link } from \'react-router-dom\'')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function fixDuplicateLinksInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove React Router Link import
    content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];\s*\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed duplicate Link imports in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all files
const files = findFilesWithDuplicateLinks(path.join(__dirname, 'app'));
files.forEach(fixDuplicateLinksInFile);

console.log(`Fixed ${files.length} files with duplicate Link imports`);
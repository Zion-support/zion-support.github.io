import fs from 'fs';
import path from 'path';

// Get all page files
function getAllPageFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixLinkImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses Link but doesn't import it
    if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
      // Find the first import statement
      const importMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\n/);
      
      if (importMatch) {
        // Add Link import after the first import
        const linkImport = "import Link from 'next/link';\n";
        content = content.replace(importMatch[0], importMatch[0] + linkImport);
        modified = true;
      } else {
        // Add Link import at the beginning
        const linkImport = "import Link from 'next/link';\n";
        content = linkImport + content;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Link import: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for Link imports...`);

// Fix all files
pageFiles.forEach(fixLinkImports);

console.log('All Link imports fixed!');
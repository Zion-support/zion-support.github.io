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

function fixUseClientDirective(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has 'use client' directive but not at the top
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      // Remove existing 'use client' directive
      content = content.replace(/'use client';\n?/g, '');
      
      // Add 'use client' at the very beginning
      content = "'use client';\n" + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed use client directive: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for use client directive...`);

// Fix all files
pageFiles.forEach(fixUseClientDirective);

console.log('All use client directives fixed!');
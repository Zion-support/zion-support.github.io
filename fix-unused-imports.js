import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all page.tsx files
const findPageFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
};

const pageFiles = findPageFiles(path.join(__dirname, 'app'));

// Fix unused React imports
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if React is imported but not used
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      // Remove the React import
      content = content.replace("import React from 'react';\n", '');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused React import in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all page files
console.log('Fixing unused React imports...');
pageFiles.forEach(fixUnusedImports);
console.log('Done fixing unused React imports.');
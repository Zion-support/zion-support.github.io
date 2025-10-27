import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Get all TypeScript files
const allFiles = findTsxFiles(path.join(__dirname, 'app'));

let fixedCount = 0;

allFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused React import (only if React is not used in JSX)
    if (content.includes("import React from 'react'") && !content.includes('<')) {
      content = content.replace(/^import React from 'react';\n/gm, '');
      modified = true;
    }
    
    // Remove unused React import when React is imported but not used
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/^import React from 'react';\n/gm, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath.replace(__dirname + '/', '')}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`Fixed ${fixedCount} files`);
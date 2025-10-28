#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has both 'use client' and metadata export
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      // Remove 'use client' directive
      content = content.replace(/'use client';\n?/g, '');
      modified = true;
      console.log(`Removed 'use client' from: ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
    
    return modified;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript files
const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check...`);

let fixedCount = 0;
files.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files!`);
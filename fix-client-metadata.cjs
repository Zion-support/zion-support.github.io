#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all files with both "use client" and "export const metadata"
function findProblematicFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if ((content.includes('"use client"') || content.includes("'use client'")) && content.includes('export const metadata')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix a file by removing "use client" directive
function fixFile(filePath) {
  console.log(`Fixing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove "use client" directive
  content = content.replace(/'use client'\n/g, '');
  content = content.replace(/"use client"\n/g, '');
  content = content.replace(/'use client';\n/g, '');
  content = content.replace(/"use client";\n/g, '');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

// Main execution
const appDir = path.join(__dirname, 'app');
const problematicFiles = findProblematicFiles(appDir);

console.log(`Found ${problematicFiles.length} files with "use client" and metadata export conflicts`);

for (const file of problematicFiles) {
  fixFile(file);
}

console.log('All files fixed!');
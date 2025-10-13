const fs = require('fs');
const path = require('path');

// Find all files that start with "  return ("
const files = [];
const appDir = '/workspace/app';

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.startsWith('  return (')) {
        files.push(fullPath);
      }
    }
  }
}

findFiles(appDir);

console.log(`Found ${files.length} files to fix`);

for (const filePath of files) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the component name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.tsx', '');
    const componentName = fileName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');
    
    // Create the fixed content
    const fixedContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function ${componentName}() {
${content}
}`;
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Done fixing files');

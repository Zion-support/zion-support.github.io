const fs = require('fs');
const path = require('path');

// Function to fix final JSX errors
function fixFinalJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing tags
    content = content.replace(/<\/div><\/>/g, '</div>');
    content = content.replace(/<\/div>\s*<\/>/g, '</div>');
    content = content.replace(/<\/div>\s*<\/>\s*<\/div>/g, '</div>\n        </div>');

    // Fix missing React import
    if (!content.includes("import React from 'react'") && !content.includes("import { React")) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client'", "'use client';\nimport React from 'react';");
      } else {
        content = "import React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix malformed JSX structure
    content = content.replace(/return\s*\(\s*<div>\s*<Head>/g, 'return (\n    <div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div className=/g, '</Head>\n      <div className=');

    // Fix missing semicolons in import statements
    content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting final JSX error fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFinalJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);
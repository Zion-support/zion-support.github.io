const fs = require('fs');
const path = require('path');

// Function to fix double quotes in import statements
function fixDoubleQuotes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double quotes in import statements
    content = content.replace(/from '([^']+)''/g, "from '$1'");
    content = content.replace(/import '([^']+)''/g, "import '$1'");
    content = content.replace(/import { ([^}]+) } from '([^']+)''/g, "import { $1 } from '$2'");
    
    // Fix double quotes in string literals
    content = content.replace(/'([^']+)''/g, "'$1'");
    content = content.replace(/"([^"]+)""/g, '"$1"');
    
    // Fix specific patterns
    content = content.replace(/'use client''/g, "'use client'");
    content = content.replace(/import React from 'react''/g, "import React from 'react'");
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all .tsx files in src directory
function getAllSrcFiles() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('./src');
  return files;
}

console.log('Starting to fix double quotes in src files...');
const srcFiles = getAllSrcFiles();
console.log(`Found ${srcFiles.length} .tsx files in src directory`);

let fixedCount = 0;

for (const file of srcFiles) {
  if (fixDoubleQuotes(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);
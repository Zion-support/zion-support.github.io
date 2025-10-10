#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixArraySyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;
    
    // Fix array syntax issues
    content = content
      // Fix extra quotes and commas in arrays
      .replace(/},\s*''\s*{/g, '},\n    {')
      .replace(/},\s*''\s*]/g, '}\n  ]')
      .replace(/},\s*''\s*$/gm, '},')
      .replace(/},\s*''\s*\n/g, '},\n')
      
      // Fix missing commas in arrays
      .replace(/}\s*{/g, '},\n    {')
      .replace(/}\s*]/g, '}\n  ]')
      
      // Fix extra quotes in object properties
      .replace(/:\s*''\s*,/g, ',')
      .replace(/:\s*''\s*}/g, '}')
      .replace(/:\s*''\s*$/gm, '')
      
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      .trim();
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithArrays(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes("''") || content.includes('},\s*{') || content.includes('},\s*]')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
console.log('Finding files with array syntax issues...');

const files = findFilesWithArrays(appDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixArraySyntax(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors in ${errorCount} files`);
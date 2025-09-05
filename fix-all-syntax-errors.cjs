#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts and syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======.*?>>>>>>> [^\n]+\n?/gs, '');
      modified = true;
    }

    // Fix common syntax errors
    const fixes = [
      // Remove extra commas and semicolons
      { pattern: /,\s*;/g, replacement: ';' },
      { pattern: /,\s*,/g, replacement: ',' },
      { pattern: /;\s*,/g, replacement: ';' },
      { pattern: /,\s*$/gm, replacement: '' },
      { pattern: /;\s*$/gm, replacement: ';' },
      
      // Fix object syntax
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
      { pattern: /\[\s*,/g, replacement: '[' },
      { pattern: /,\s*\]/g, replacement: ']' },
      
      // Fix function parameters
      { pattern: /\(\s*,/g, replacement: '(' },
      { pattern: /,\s*\)/g, replacement: ')' },
      
      // Fix import statements
      { pattern: /import\s+([^;]+),\s*;/g, replacement: 'import $1;' },
      
      // Fix JSX syntax
      { pattern: /<\s*,/g, replacement: '<' },
      { pattern: /,\s*>/g, replacement: '>' },
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
      
      // Remove empty lines with just commas or semicolons
      { pattern: /^\s*[,;]+\s*$/gm, replacement: '' },
      
      // Fix trailing commas in objects and arrays
      { pattern: /,\s*}/g, replacement: '}' },
      { pattern: /,\s*\]/g, replacement: ']' },
      { pattern: /,\s*\)/g, replacement: ')' },
    ];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing whitespace
    content = content.replace(/\s+$/gm, '');

    if (modified) {
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

// Function to recursively find files
function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax fix...');

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const files = findFiles('.', extensions);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nFix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
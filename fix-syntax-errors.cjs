#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common issues after merge conflict resolution
    const fixes = [
      // Fix missing commas in object literals
      {
        pattern: /(\s+)(\w+):\s*([^,\n}]+)\n(\s+)(\w+):/g,
        replacement: '$1$2: $3,\n$4$5:'
      },
      // Fix missing commas in arrays
      {
        pattern: /(\s+)([^,\n]+)\n(\s+)([^,\n]+)\n(\s+)\]/g,
        replacement: '$1$2,\n$3$4\n$5]'
      },
      // Fix JSX fragments that are missing closing tags
      {
        pattern: /<>\s*([^<]+)\s*$/gm,
        replacement: '<>$1</>'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n(\s*)(export|import|const|let|var|function|class)/g,
        replacement: '$1;\n$2$3'
      },
      // Fix missing closing braces
      {
        pattern: /(\s+)(\w+):\s*([^,\n}]+)\n(\s+)\}/g,
        replacement: '$1$2: $3\n$4}'
      },
      // Fix malformed JSX
      {
        pattern: /<(\w+)([^>]*)\s*>\s*([^<]+)\s*$/gm,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix missing closing parentheses
      {
        pattern: /(\w+)\s*\(\s*([^)]+)\s*\n(\s*)(\w+)/g,
        replacement: '$1($2)\n$3$4'
      },
      // Fix missing closing brackets
      {
        pattern: /(\w+)\s*\[\s*([^\]]+)\s*\n(\s*)(\w+)/g,
        replacement: '$1[$2]\n$3$4'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix common React/JSX issues
    content = content.replace(/import\s+React\s+from\s+['"]react['"];?\s*\n\s*import\s+React\s+from\s+['"]react['"];?/g, 'import React from "react";');
    
    // Fix duplicate imports
    content = content.replace(/(import\s+[^;]+;)\s*\n\s*\1/g, '$1');
    
    // Fix missing export statements
    if (content.includes('export default') && !content.includes('export default function')) {
      content = content.replace(/export default\s+(\w+);?\s*$/gm, 'export default $1;');
    }
    
    // Fix missing semicolons at end of statements
    content = content.replace(/(\w+)\s*\n(\s*)(export|import|const|let|var|function|class|interface|type)/g, '$1;\n$2$3');
    
    // Fix malformed object literals
    content = content.replace(/(\w+):\s*([^,\n}]+)\n(\s+)(\w+):/g, '$1: $2,\n$3$4:');
    
    // Fix missing closing tags in JSX
    content = content.replace(/<(\w+)([^>]*)\s*>\s*([^<]+)\s*$/gm, '<$1$2>$3</$1>');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', '.next', 'out', 'backup', 'backup-*', '*-disabled', '*.disabled'].includes(item)) {
            searchDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if it's a source file
          if (item.match(/\.(ts|tsx|js|jsx)$/)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const sourceFiles = findSourceFiles('/workspace');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const filePath of sourceFiles) {
  if (fixSyntaxErrors(filePath)) {
    fixedCount++;
    console.log(`Fixed syntax in: ${filePath}`);
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes complete!');
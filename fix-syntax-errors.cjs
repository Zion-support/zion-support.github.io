#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns
    const fixes = [
      // Fix malformed JSX closing tags with semicolons
      {
        pattern: /(\w+);\s*<\/\s*$/gm,
        replacement: '$1</$1>'
      },
      // Fix incomplete closing tags
      {
        pattern: /(\w+);\s*$/gm,
        replacement: '$1'
      },
      // Fix malformed button tags
      {
        pattern: /<button([^>]*)>([^<]*);\s*<\/\s*$/gm,
        replacement: '<button$1>$2</button>'
      },
      // Fix malformed h1, h2, h3 tags
      {
        pattern: /<(h[1-6])([^>]*)>([^<]*);\s*<\/\s*$/gm,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix malformed p tags
      {
        pattern: /<p([^>]*)>([^<]*);\s*<\/\s*$/gm,
        replacement: '<p$1>$2</p>'
      },
      // Fix malformed span tags
      {
        pattern: /<span([^>]*)>([^<]*);\s*<\/\s*$/gm,
        replacement: '<span$1>$2</span>'
      },
      // Fix malformed div tags
      {
        pattern: /<div([^>]*)>([^<]*);\s*<\/\s*$/gm,
        replacement: '<div$1>$2</div>'
      },
      // Fix incomplete JSX expressions
      {
        pattern: /(\{[^}]*);\s*$/gm,
        replacement: '$1}'
      },
      // Fix malformed closing tags with extra characters
      {
        pattern: /<\/\s*(\w+);\s*$/gm,
        replacement: '</$1>'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const sourceFiles = findSourceFiles('/workspace');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes complete!');
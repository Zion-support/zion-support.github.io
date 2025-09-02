#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix import statements with comma issues
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'"`]+)['"`]/g,
    replacement: "import $1 from '$2'"
  },
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^;]+);/g,
    replacement: "import $1 from $2;"
  },
  
  // Fix missing semicolons in function calls
  {
    pattern: /(\w+\([^)]*\))\s*\)\s*}/g,
    replacement: "$1);"
  },
  
  // Fix unterminated strings
  {
    pattern: /(['"`])([^'"`]*)\s*$/gm,
    replacement: (match, quote, content) => {
      if (!content.includes(quote)) {
        return match + quote;
      }
      return match;
    }
  },
  
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^,}]+)\s*(\w+:\s*[^,}]+)/g,
    replacement: "$1,\n    $2"
  },
  
  // Fix missing semicolons after statements
  {
    pattern: /(\w+\([^)]*\))\s*$/gm,
    replacement: "$1;"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
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

function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const files = findFiles('.');
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Final targeted fixes for remaining syntax errors
const fixes = [
  // Fix missing semicolons in import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    replacement: 'import { $1 } from \'$2\';'
  },
  
  // Fix malformed import statements
  {
    pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    replacement: 'import { $1 } from \'$2\';\n\nexport default function'
  },
  
  // Fix missing semicolons after import statements
  {
    pattern: /import\s+([^]+)\s*$/gm,
    replacement: 'import $1;'
  },
  
  // Fix missing semicolons after export statements
  {
    pattern: /export\s+([^]+)\s*$/gm,
    replacement: 'export $1;'
  },
  
  // Fix missing semicolons in variable declarations
  {
    pattern: /const\s+([^=]+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = $2;'
  },
  
  // Fix missing semicolons in function declarations
  {
    pattern: /function\s+([^(]+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: 'function $1() {\n'
  },
  
  // Fix missing semicolons in arrow functions
  {
    pattern: /const\s+([^=]+)\s*=\s*\([^)]*\)\s*=>\s*([^;]+)\s*$/gm,
    replacement: 'const $1 = () => $2;'
  },
  
  // Fix missing semicolons in object properties
  {
    pattern: /(\w+):\s*([^,}]+)\s*$/gm,
    replacement: '$1: $2,'
  },
  
  // Fix missing semicolons in array elements
  {
    pattern: /(\w+)\s*$/gm,
    replacement: '$1,'
  },
  
  // Fix missing semicolons in return statements
  {
    pattern: /return\s+([^;]+)\s*$/gm,
    replacement: 'return $1;'
  },
  
  // Fix missing semicolons in if statements
  {
    pattern: /if\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'if (condition) {\n'
  },
  
  // Fix missing semicolons in for loops
  {
    pattern: /for\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'for (let i = 0; i < length; i++) {\n'
  },
  
  // Fix missing semicolons in while loops
  {
    pattern: /while\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'while (condition) {\n'
  },
  
  // Fix missing semicolons in switch statements
  {
    pattern: /switch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'switch (value) {\n'
  },
  
  // Fix missing semicolons in try-catch blocks
  {
    pattern: /try\s*{\s*$/gm,
    replacement: 'try {\n'
  },
  
  // Fix missing semicolons in catch blocks
  {
    pattern: /catch\s*\([^)]+\)\s*{\s*$/gm,
    replacement: 'catch (error) {\n'
  },
  
  // Fix missing semicolons in finally blocks
  {
    pattern: /finally\s*{\s*$/gm,
    replacement: 'finally {\n'
  },
  
  // Fix missing semicolons in class methods
  {
    pattern: /(\w+)\s*\([^)]*\)\s*{\s*$/gm,
    replacement: '$1() {\n'
  },
  
  // Fix missing semicolons in class properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  
  // Fix missing semicolons in interface properties
  {
    pattern: /(\w+)\s*:\s*([^;]+)\s*$/gm,
    replacement: '$1: $2;'
  },
  
  // Fix missing semicolons in type definitions
  {
    pattern: /type\s+(\w+)\s*=\s*([^;]+)\s*$/gm,
    replacement: 'type $1 = $2;'
  },
  
  // Fix missing semicolons in interface definitions
  {
    pattern: /interface\s+(\w+)\s*{\s*$/gm,
    replacement: 'interface $1 {\n'
  },
  
  // Fix missing semicolons in enum definitions
  {
    pattern: /enum\s+(\w+)\s*{\s*$/gm,
    replacement: 'enum $1 {\n'
  },
  
  // Fix missing semicolons in namespace definitions
  {
    pattern: /namespace\s+(\w+)\s*{\s*$/gm,
    replacement: 'namespace $1 {\n'
  },
  
  // Fix missing semicolons in module definitions
  {
    pattern: /module\s+(\w+)\s*{\s*$/gm,
    replacement: 'module $1 {\n'
  },
  
  // Fix missing semicolons in declare statements
  {
    pattern: /declare\s+([^;]+)\s*$/gm,
    replacement: 'declare $1;'
  },
  
  // Fix missing semicolons in export statements
  {
    pattern: /export\s+([^;]+)\s*$/gm,
    replacement: 'export $1;'
  },
  
  // Fix missing semicolons in import statements
  {
    pattern: /import\s+([^;]+)\s*$/gm,
    replacement: 'import $1;'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
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

function main() {
  console.log('🔧 Starting final syntax fixes...');
  
  const extensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
  const files = findFiles(process.cwd(), extensions);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed syntax in ${fixedCount} files`);
  console.log('🎉 Final syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findFiles };
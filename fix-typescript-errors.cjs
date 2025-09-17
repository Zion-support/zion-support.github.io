#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common syntax fixes
const fixes = [
  // Fix stray closing brackets and semicolons
  {
    pattern: /^\s*\]\s*;\s*$/gm,
    replacement: ''
  },
  // Fix stray commas at the beginning of lines
  {
    pattern: /^\s*,\s*/gm,
    replacement: ''
  },
  // Fix interface declarations with leading commas
  {
    pattern: /^\s*,\s*interface\s+/gm,
    replacement: 'interface '
  },
  // Fix const declarations with leading commas
  {
    pattern: /^\s*,\s*const\s+/gm,
    replacement: 'const '
  },
  // Fix function calls with leading commas
  {
    pattern: /^\s*,\s*originalError\.call\(/gm,
    replacement: '    originalError.call('
  },
  {
    pattern: /^\s*,\s*originalWarn\.call\(/gm,
    replacement: '    originalWarn.call('
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
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

function findTsxFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting TypeScript error fixes...');

const srcDir = path.join(__dirname, 'src');
const files = findTsxFiles(srcDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix specific problematic files
const problematicFiles = [
  'src/setupTests.ts',
  'src/store/authSlice.ts'
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      console.log(`Fixed problematic file: ${file}`);
    }
  }
}

console.log('TypeScript error fixes completed!');
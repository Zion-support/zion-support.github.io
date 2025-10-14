#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
console.log('🔧 Final comprehensive syntax fix...');
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix common syntax errors
    const fixes = [
      // Fix import statements missing 'from'
      { pattern: /import\s+(\w+)\s+(\w+)-(\w+)/g, replacement: "import $1 from '$2-$3';" },
      { pattern: /import\s+(\w+)\s+(\w+)-(\w+)-(\w+);/g, replacement: "import $1 from '$2-$3-$4';" },
      { pattern: /import\s+(\w+)\s+(\w+)-(\w+)-(\w+)-(\w+);/g, replacement: "import $1 from '$2-$3-$4-$5';" },
      
      // Fix destructuring imports
      { pattern: /import\s+{\s*([^}]+)\s*}\s+(\w+)-(\w+)/g, replacement: "import { $1 } from '$2-$3';" },
      { pattern: /import\s+{\s*([^}]+)\s*}\s+(\w+)-(\w+)-(\w+);/g, replacement: "import { $1 } from '$2-$3-$4';" },
      
      // Fix React imports
      { pattern: /import\s+React\s+from\s+['"]react['"]?/gi, replacement: "import React from 'react';" },
      
      // Fix other common imports
      { pattern: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]?/g, replacement: "import $1 from '$2';" },
      
      // Fix function declarations
      { pattern: /function\s+(\w+)\s*\(\s*\)\s*{/g, replacement: "function $1() {" },
      
      // Fix JSX syntax
      { pattern: /<(\w+)([^>]*?)>\s*<\/\1>/g, replacement: '<$1$2></$1>' },
      
      // Fix semicolons
      { pattern: /\s*$/gm, replacement: ';' },
      
      // Fix comments
      { pattern: /\/\/\s*([^]+);/g, replacement: '// $1' },
      
      // Fix merge conflict markers
      { pattern: /
      { pattern: /
    ]
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
        fixedCount += fixDirectory(fullPath);
      }
    } else if (stat.isFile()) {
      if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        if (fixFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  });
  return fixedCount;
}

try {
  const fixedCount = fixDirectory('/workspace');
  console.log(`🎉 Fixed ${fixedCount} files!`);
} catch (error) {
  console.error('❌ Error during fix process:', error.message);
  process.exit(1);
}
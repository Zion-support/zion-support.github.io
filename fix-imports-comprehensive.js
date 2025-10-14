#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
console.log('🔧 Comprehensive import statement fix...');
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix common import patterns
    const fixes = [
      // Fix React imports
      { pattern: /import\s+react\s+from\s+['"]react['"]?/gi, replacement: "import React from 'react'" },
      { pattern: /import\s+React\s+from\s+['"]react['"];?/gi, replacement: "import React from 'react';" },
      
      // Fix React Router imports
      { pattern: /import\s+react-router-dom\s+from\s+['"]react-router-dom['"]?/gi, replacement: "import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'" },
      
      // Fix other common imports
      { pattern: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]?/g, replacement: "import $1 from '$2'" },
      
      // Fix destructuring imports
      { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]?/g, replacement: "import { $1  } from '$2'" },
      
      // Fix default exports
      { pattern: /export\s+default\s+(\w+)?/g, replacement: "export default $1" },
      
      // Fix function declarations
      { pattern: /function\s+(\w+)\s*\(\s*\)\s*{/g, replacement: "function $1() {" },
      
      // Fix JSX syntax
      { pattern: /<(\w+)([^>]*?)>\s*<\/\1>/g, replacement: '<$1$2></$1>' },
      
      // Fix semicolons
      { pattern: /\s*$/gm, replacement: '' },
      
      // Fix comments
      { pattern: /\/\/\s*([^]+)/g, replacement: '// $1' },
      
      // Fix merge conflict markers
      { pattern: /
      { pattern: /
    ]
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement)
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
        if (fixImports(fullPath)) {
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
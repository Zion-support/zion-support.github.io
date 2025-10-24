const fs = require('fs');
const path = require('path');

// Function to fix remaining issues
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const newLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importMatch = line.match(/import\s+(\w+)\s+from/);
        if (importMatch) {
          const importName = importMatch[1];
          if (seenImports.has(importName)) {
            // Skip duplicate import
            continue;
          }
          seenImports.add(importName);
        }
      }
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    // Fix malformed import statements
    content = content.replace(/import\s*{\s*{\s*{\s*Link\s+from\s+'next\/link'/g, "import Link from 'next/link'");
    content = content.replace(/import\s*{\s*type\s*Metadata\s*from\s+'next'/g, "import { type Metadata } from 'next'");
    content = content.replace(/import\s*Inter\s*}\s*from\s+'next\/font\/google'/g, "import { Inter } from 'next/font/google'");
    content = content.replace(/import\s*\/globalscss'/g, "import './globals.css'");
    content = content.replace(/import\s*{\s*Home\s+ArrowLeft\s+RefreshCw\s*}\s*from\s+'lucide-react'/g, "import { Home, ArrowLeft, RefreshCw } from 'lucide-react'");

    // Fix missing React import
    if (!content.includes("import React from 'react'") && !content.includes("import { React")) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client'", "'use client';\nimport React from 'react';");
      } else {
        content = "import React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix malformed JSX structure
    content = content.replace(/return\s*\(\s*<div>\s*<Head>/g, 'return (\n    <div>\n      <Head>');
    content = content.replace(/<\/Head>\s*<div className=/g, '</Head>\n      <div className=');

    // Fix missing semicolons in import statements
    content = content.replace(/(import[^;]+)(\n)/g, '$1;$2');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting remaining issue fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixRemainingIssues(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);
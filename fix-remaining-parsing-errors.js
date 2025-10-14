#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing remaining parsing errors...');

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+.*?from\s+['"]([^'"]*?)\n/g, (match, p1) => {
    if (!p1.endsWith('"') && !p1.endsWith("'")) {
      return match.replace(p1, p1 + '"');
    }
    return match;
  });
  
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+.*?from\s+['"]([^'"]*?)\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]*['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed React imports
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"]\s*$/gm, 'import React from "react";');
  
  // Fix malformed component imports
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]*['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed JSX
  fixed = fixed.replace(/<(\w+)\s*>\s*<\/\1\s*>/g, '<$1></$1>');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  return null;\n}');
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n  return null;\n};');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixParsingErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all problematic files
const files = [
  'App-minimal.tsx',
  'App.tsx', 
  'App_minimal.tsx',
  'App_test.tsx',
  'main.tsx'
];

// Also find all page files
const appDir = './app';
const pageFiles = [];

function findPageFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      findPageFiles(fullPath);
    } else if (item === 'page.tsx') {
      pageFiles.push(fullPath);
    }
  }
}

findPageFiles(appDir);

// Find component files
const componentFiles = [];
function findComponentFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      findComponentFiles(fullPath);
    } else if (item.endsWith('.tsx') && item.includes('components')) {
      componentFiles.push(fullPath);
    }
  }
}

findComponentFiles('./app/components');

const allFiles = [...files, ...pageFiles, ...componentFiles];
let fixedCount = 0;

console.log(`📁 Found ${allFiles.length} files to check...`);

for (const file of allFiles) {
  if (fs.existsSync(file) && fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} additional files!`);
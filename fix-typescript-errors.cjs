#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix malformed type annotations
  { pattern: /anykeyof/g, replacement: 'keyof' },
  { pattern: /any([^,]+)/g, replacement: '$1' },
  { pattern: /any([^:]+):/g, replacement: '$1:' },
  { pattern: /any([^;]+);/g, replacement: '$1;' },
  { pattern: /any([^,]+),/g, replacement: '$1,' },
  { pattern: /any([^}]+)}/g, replacement: '$1}' },
  { pattern: /any([^)]+)\)/g, replacement: '$1)' },
  
  // Fix malformed object properties
  { pattern: /:\s*{;/g, replacement: ': {' },
  { pattern: /:\s*{([^}]+);/g, replacement: ': { $1' },
  
  // Fix malformed function declarations
  { pattern: /\(\s*\)\s*=>\s*{/g, replacement: '() => {' },
  { pattern: /\(\s*\)\s*=>\s*void;/g, replacement: '() => void;' },
  
  // Fix malformed JSX
  { pattern: /<\/([^>]+)>/g, replacement: '</$1>' },
  
  // Fix malformed imports
  { pattern: /import:\s*{([^}]+)},\s*from,\s*'([^']+)'/g, replacement: "import { $1 } from '$2'" },
  { pattern: /import:\s*([^,]+),\s*from,\s*'([^']+)'/g, replacement: "import $1 from '$2'" }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    for (const fix of fixes) {
      content = content.replace(fix.pattern, fix.replacement);
    }
    
    // Write back if changed
    if (content !== originalContent) {
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

function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
} else {
  console.log('src directory not found');
}
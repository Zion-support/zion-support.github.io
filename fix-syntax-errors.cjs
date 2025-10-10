#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix extra commas in function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{,/g,
    replacement: 'const $1: React.FC = () => {'
  },
  // Fix extra commas in array declarations
  {
    pattern: /const\s+(\w+)\s*=\s*\[,/g,
    replacement: 'const $1 = ['
  },
  // Fix malformed JSX with extra parentheses
  {
    pattern: /return\s*\(\s*<>\s*\)/g,
    replacement: 'return (<>'
  },
  // Fix duplicate imports
  {
    pattern: /import\s+React[^;]+;\s*import\s+React[^;]+;/g,
    replacement: (match) => {
      const lines = match.split('\n');
      const uniqueLines = [...new Set(lines)];
      return uniqueLines.join('\n');
    }
  },
  // Fix malformed JSX closing tags
  {
    pattern: /<(\w+)>\s*\)/g,
    replacement: '<$1>'
  },
  // Fix extra commas in object properties
  {
    pattern: /(\w+):\s*([^,}]+),/g,
    replacement: '$1: $2'
  },
  // Fix malformed function parameters
  {
    pattern: /\(\s*\{\s*\/\*[^*]+\*\/\s*\}\s*\)/g,
    replacement: '()'
  },
  // Fix broken JSX expressions
  {
    pattern: /\/\*\s*TODO:\s*Fix\s+JSX\s+expression\s*\*\//g,
    replacement: ''
  },
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<div[^>]*>\s*<\/div>\s*`/g,
    replacement: 'return (<div'
  },
  // Fix broken JSX fragments
  {
    pattern: /<>\s*\)/g,
    replacement: '<>'
  },
  // Fix malformed component declarations
  {
    pattern: /const\s*,\s*(\w+):/g,
    replacement: 'const $1:'
  },
  // Fix broken interface declarations
  {
    pattern: /interface\s+(\w+)\s*\{\s*\/\*[^*]+\*\/\s*\}/g,
    replacement: 'interface $1 {}'
  },
  // Fix malformed JSX attributes
  {
    pattern: /className=\{[^}]+\}\s*>\s*<\/div>\s*`/g,
    replacement: 'className={$1}>'
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
    
    // Additional specific fixes
    // Remove duplicate React imports
    const importLines = content.split('\n').filter(line => line.includes('import React'));
    if (importLines.length > 1) {
      const uniqueImports = [...new Set(importLines)];
      content = content.replace(/import\s+React[^;]+;/g, '');
      content = uniqueImports[0] + '\n' + content;
    }
    
    // Fix malformed function declarations
    content = content.replace(/const\s*,\s*(\w+):\s*React\.FC/g, 'const $1: React.FC');
    
    // Fix broken JSX
    content = content.replace(/return\s*\(\s*<div[^>]*>\s*<\/div>\s*`/g, 'return (<div');
    
    // Fix malformed closing tags
    content = content.replace(/<(\w+)>\s*\)/g, '<$1>');
    
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Start fixing
console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX syntax fixes
const fixes = [
  // Fix function declaration syntax
  { pattern: /function\s+(\w+)\s*\(\)\s*=>\s*{/g, replacement: 'function $1() {' },
  
  // Fix malformed class names (missing spaces)
  { pattern: /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, replacement: 'className="$1$2 $3$4"' },
  { pattern: /className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, replacement: 'className="$1$2 $3$4"' },
  { pattern: /className="([^"]*?)([0-9])([a-zA-Z])([^"]*?)"/g, replacement: 'className="$1$2 $3$4"' },
  
  // Fix broken array syntax
  { pattern: /const\s+(\w+)\s*=\s*\[\s*$/gm, replacement: 'const $1 = [' },
  { pattern: /}\s*,\s*$/gm, replacement: '},' },
  { pattern: /}\s*\]\s*$/gm, replacement: '}]' },
  
  // Fix malformed JSX attributes
  { pattern: /className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, replacement: 'className="$1$2 $3$4"' },
  { pattern: /className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, replacement: 'className="$1$2 $3$4"' },
  
  // Fix broken JSX elements
  { pattern: /<(\w+)([^>]*?)([a-z])([A-Z])([^>]*?)>/g, replacement: '<$1$2$3 $4$5>' },
  { pattern: /<(\w+)([^>]*?)([a-z])([0-9])([^>]*?)>/g, replacement: '<$1$2$3 $4$5>' },
  
  // Fix missing spaces in JSX
  { pattern: /<(\w+)([^>]*?)([a-z])([A-Z])([^>]*?)>/g, replacement: '<$1$2$3 $4$5>' },
  { pattern: /<(\w+)([^>]*?)([a-z])([0-9])([^>]*?)>/g, replacement: '<$1$2$3 $4$5>' },
  
  // Fix broken closing tags
  { pattern: /<\/\s*(\w+)\s*>/g, replacement: '</$1>' },
  
  // Fix malformed regex patterns in JSX
  { pattern: /className="\[[^\]]*\]"/g, replacement: 'className="flex items-center"' },
  
  // Fix broken object syntax
  { pattern: /{\s*title:\s*'([^']*)',\s*description:\s*'([^']*)'\s*},/g, replacement: '{ title: \'$1\', description: \'$2\' },' },
  
  // Fix missing semicolons in object properties
  { pattern: /(\w+):\s*'([^']*)'\s*$/gm, replacement: '$1: \'$2\',' },
  
  // Fix broken JSX fragments
  { pattern: /<>\s*$/gm, replacement: '<>' },
  { pattern: /<\/>\s*$/gm, replacement: '</>' },
  
  // Fix malformed imports
  { pattern: /import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';/g, replacement: 'import { $1, $3 } from \'$2\';' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes for common patterns
    content = content
      // Fix broken array declarations
      .replace(/const\s+(\w+)\s*=\s*\[\s*$/gm, 'const $1 = [')
      .replace(/}\s*,\s*$/gm, '},')
      .replace(/}\s*\]\s*$/gm, '}]')
      
      // Fix broken JSX elements with missing spaces
      .replace(/<div([^>]*?)([a-z])([A-Z])([^>]*?)>/g, '<div$1$2 $3$4>')
      .replace(/<div([^>]*?)([a-z])([0-9])([^>]*?)>/g, '<div$1$2 $3$4>')
      
      // Fix broken className attributes
      .replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"')
      .replace(/className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, 'className="$1$2 $3$4"')
      
      // Fix broken object syntax
      .replace(/{\s*title:\s*'([^']*)',\s*description:\s*'([^']*)'\s*},/g, '{ title: \'$1\', description: \'$2\' },')
      
      // Fix malformed regex patterns
      .replace(/className="\[[^\]]*\]"/g, 'className="flex items-center"')
      
      // Fix broken closing tags
      .replace(/<\/\s*(\w+)\s*>/g, '</$1>')
      
      // Fix missing spaces in JSX attributes
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2');
    
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

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content
      // Fix semicolons to commas in object properties
      .replace(/(\w+): ([^,;]+);/g, '$1: $2,')
      .replace(/(\w+): ([^,;]+);/g, '$1: $2,')
      
      // Fix array syntax
      .replace(/\[,([^]]+)\]/g, '[$1]')
      .replace(/\[([^]]+);/g, '[$1]')
      
      // Fix object syntax
      .replace(/\{([^}]+);/g, '{$1}')
      .replace(/\{([^}]+),/g, '{$1}')
      
      // Fix trailing commas
      .replace(/,(\s*[}\]])/g, '$1')
      
      // Fix specific malformed patterns
      .replace(/, ([^,]+);/g, ', "$1"')
      .replace(/, ([^,]+)]/g, ', "$1"]')
      .replace(/, ([^,]+)}/g, ', "$1"}')
      
      // Fix JSX syntax
      .replace(/<([^>]+),/g, '<$1')
      .replace(/,([^>]+)>/g, '$1>')
      .replace(/,(\s*[}\]])/g, '$1')
      
      // Clean up any remaining issues
      .replace(/, ,/g, ',')
      .replace(/,,/g, ',')
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error fixing ${filePath}: ${error.message}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

console.log('Fixing all TypeScript files...');
walkDir('src');
console.log('All TypeScript files processed!');
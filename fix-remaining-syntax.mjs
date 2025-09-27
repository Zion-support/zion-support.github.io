#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixRemainingSyntax(content) {
  // Fix malformed variable declarations
  content = content.replace(/const,\s*([^,]+),\s*([^,]+)\s*=/g, 'const $1$2 =');
  content = content.replace(/let,\s*([^,]+),\s*([^,]+)\s*=/g, 'let $1$2 =');
  content = content.replace(/var,\s*([^,]+),\s*([^,]+)\s*=/g, 'var $1$2 =');
  
  // Fix malformed object properties
  content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*),\s*([a-zA-Z_$][a-zA-Z0-9_$]*):/g, '$1$2:');
  
  // Fix malformed string literals with commas
  content = content.replace(/['"]([^'"]+),\s*([^'"]+),\s*([^'"]+)['"]/g, '"$1$2$3"');
  
  // Fix malformed array elements
  content = content.replace(/\[\s*([^,]+),\s*([^,]+),\s*([^,]+)\s*\]/g, '[$1$2$3]');
  
  // Fix malformed function parameters
  content = content.replace(/\(\s*([^,]+),\s*([^,]+),\s*([^,]+)\s*\)/g, '($1$2$3)');
  
  // Fix malformed JSX attributes
  content = content.replace(/([a-zA-Z-]+),\s*([a-zA-Z-]+)=/g, '$1$2=');
  
  // Fix malformed CSS properties
  content = content.replace(/([a-zA-Z-]+),\s*([a-zA-Z-]+):/g, '$1$2:');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

const targetDir = process.argv[2] || '.';
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'));

for (const file of files) {
  processFile(path.join(targetDir, file));
}

console.log('Remaining syntax errors fixed!');
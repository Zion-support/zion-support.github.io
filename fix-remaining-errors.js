#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript/TSX files in the app directory
const files = execSync('find ./app -name "*.tsx" -o -name "*.ts"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
let errorCount = 0;

files.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix the specific pattern: }},; -> },
    content = content.replace(/}\s*}\s*,\s*;/g, '},');
    
    // Fix the specific pattern: },; -> },
    content = content.replace(/}\s*,\s*;/g, '},');
    
    // Fix the specific pattern: {icon: Icon, title: 'Title', description: 'Desc', benefits: [...]} -> proper object
    content = content.replace(/(\w+):\s*(\w+),\s*title:\s*'([^']*)',\s*description:\s*'([^']*)',\s*benefits:\s*\[([^\]]*)\]\s*}\s*,\s*;/g, 
      '$1: $2,\n      title: \'$3\',\n      description: \'$4\',\n      benefits: [$5]\n    },');
    
    // Fix malformed object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+),\s*;/g, '$1: $2,');
    content = content.replace(/(\w+):\s*([^,}]+)\s*}/g, '$1: $2}');
    
    // Fix JSX with semicolons
    content = content.replace(/<\s*(\w+)\s*>/g, '<$1>');
    content = content.replace(/<\s*\/\s*(\w+)\s*>/g, '</$1>');
    content = content.replace(/<\s*(\w+)\s*\/\s*>/g, '<$1 />');
    
    // Fix JSX attributes with semicolons
    content = content.replace(/=\s*{\s*;\s*(\w+)/g, '={$1');
    content = content.replace(/=\s*"([^"]*);\s*"/g, '="$1"');
    content = content.replace(/=\s*'([^']*);\s*'/g, "='$1'");
    
    // Fix array elements with semicolons
    content = content.replace(/\[\s*;\s*\{/g, '[{');
    content = content.replace(/\}\s*;\s*\]/g, '}]');
    
    // Fix function calls with semicolons
    content = content.replace(/\(\s*;\s*\)/g, '()');
    content = content.replace(/\(\s*;\s*([^)]+)/g, '($1');
    content = content.replace(/([^,]+);\s*\)/g, '$1)');
    
    // Fix template literals with semicolons
    content = content.replace(/`\s*;\s*`/g, '``');
    content = content.replace(/`\s*;\s*([^`]+)/g, '`$1');
    content = content.replace(/([^`]+);\s*`/g, '$1`');
    
    // Fix string literals with semicolons
    content = content.replace(/"\s*;\s*"/g, '""');
    content = content.replace(/"\s*;\s*([^"]+)/g, '"$1');
    content = content.replace(/([^"]+);\s*"/g, '$1"');
    
    // Fix object property assignments
    content = content.replace(/(\w+):\s*(\w+),\s*;/g, '$1: $2,');
    content = content.replace(/(\w+):\s*(\w+)\s*}/g, '$1: $2}');
    
    // Fix array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*;/g, 'const $1 = [');
    
    // Fix object declarations
    content = content.replace(/const\s+(\w+)\s*=\s*{\s*;/g, 'const $1 = {');
    
    // Fix return statements
    content = content.replace(/return\s*\(\s*;/g, 'return (');
    
    // Fix JSX fragments
    content = content.replace(/<\s*>\s*;\s*<\s*\/\s*>/g, '<></>');
    
    // Remove standalone semicolons on their own lines
    content = content.replace(/^\s*;\s*$/gm, '');
    
    // Fix malformed object properties in arrays
    content = content.replace(/\{\s*;\s*(\w+):/g, '{$1:');
    content = content.replace(/(\w+):\s*([^,}]+),\s*;/g, '$1: $2,');
    
    // Fix JSX self-closing tags
    content = content.replace(/<\s*(\w+)\s*\/\s*>\s*;/g, '<$1 />');
    
    // Fix JSX opening tags
    content = content.replace(/<\s*(\w+)\s*>\s*;/g, '<$1>');
    
    // Fix JSX closing tags
    content = content.replace(/<\s*\/\s*(\w+)\s*>\s*;/g, '</$1>');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);
#!/usr/bin/env node

import fs from 'fs';

// List of files with known syntax errors
const problemFiles = [
  './app/5g-implementation/page.tsx',
  './app/accessibility/page.tsx',
  './app/ai-3d-generation/page.tsx',
  './app/about/page.tsx'
];

problemFiles.forEach(filePath => {
  try {
    console.log(`Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix object properties with semicolons
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
      console.log(`✓ Fixed: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
});

console.log('Done processing specific files');
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('Starting syntax error fixes...');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    
    // Fix missing semicolons after object properties
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.trim().endsWith(';') && !value.trim().endsWith(',') && !value.trim().endsWith('}')) {
        return `${key}: ${value.trim()},`;
      }
      return match;
    });
    
    // Fix malformed JSX fragments
    content = content.replace(/<>([^<]*?)<\//g, '<>');
    content = content.replace(/<>([^<]*?)<\/>/g, '<>');
    
    // Fix unclosed JSX tags by adding proper closing
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=<(?!\/\1>))/g, (match, tag, attrs, content) => {
      if (!content.includes(`</${tag}>`)) {
        return `<${tag}${attrs}>${content}</${tag}>`;
      }
      return match;
    });
    
    // Fix malformed object literals in JSX
    content = content.replace(/\{\s*(\w+):\s*([^,}]+),\s*(\w+):\s*([^,}]+),\s*(\w+):\s*([^,}]+)\s*\}/g, (match, k1, v1, k2, v2, k3, v3) => {
      return `{${k1}: ${v1.trim()}, ${k2}: ${v2.trim()}, ${k3}: ${v3.trim()}}`;
    });
    
    // Fix array destructuring issues
    content = content.replace(/\[\s*([^,\]]+),\s*([^,\]]+),\s*([^,\]]+)\s*\]/g, (match, a, b, c) => {
      return `[${a.trim()}, ${b.trim()}, ${c.trim()}]`;
    });
    
    // Fix malformed function calls
    content = content.replace(/(\w+)\s*\(\s*([^)]*?)\s*\)\s*;/g, (match, func, args) => {
      return `${func}(${args.trim()});`;
    });
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
    }
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]*?)\s*\}/g, (match, expr) => {
      if (expr.includes(':')) {
        return `{${expr.trim()}}`;
      }
      return match;
    });
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('find app -name "*.tsx" -o -name "*.ts" | head -50', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('Finding files to fix...');
  const files = findFilesWithSyntaxErrors();
  
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nSyntax fix complete:`);
  console.log(`✓ Successfully fixed: ${fixedCount} files`);
  console.log(`✗ Errors: ${errorCount} files`);
}

main();
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(content) {
  // Fix common syntax errors
  
  // Fix semicolons in JSX
  content = content.replace(/<(\w+);/g, '<$1');
  content = content.replace(/<\/?(\w+)>/g, (match, tag) => {
    if (match.includes(';')) {
      return match.replace(';', '');
    }
    return match;
  });
  
  // Fix template literals in JSX
  content = content.replace(/className=`([^`]+)`/g, 'className={`$1`}');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+)\s*=\s*([^,}]+)\s*}/g, '$1: $2 }');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*=\s*([^,)]+)\s*\)/g, '$1: $2 )');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*\]/g, '$1 ]');
  
  // Fix broken JSX fragments
  content = content.replace(/<>([^<]*)<\/>/g, '<>{$1}</>');
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)([^>]*)>([^<]*?)(?=<\w+|\s*$)/g, (match, tag, attrs, content) => {
    if (!content.includes('</') && content.trim()) {
      return `<${tag}${attrs}>${content}</${tag}>`;
    }
    return match;
  });
  
  // Fix broken function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\{([^}]+)\}\s*\)\s*=>\s*\{/g, 
    'const $1 = ({ $2 }) => {');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/gm, '$1;');
  
  // Fix broken return statements
  content = content.replace(/return\s*\(\s*<div[^>]*>\s*\{children\s*\|\|\s*\(/g, 
    'return (\n    <div className={`component ${className}`} {...props}>\n      {children || (');
  
  // Fix broken JSX closing tags
  content = content.replace(/<\/div>\s*\)\s*;\s*};/g, '</div>\n  );\n};');
  
  // Fix malformed export statements
  content = content.replace(/export\s+default\s+(\w+);?\s*$/gm, 'export default $1;');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
    console.log(`Fixed syntax errors in: ${file}`);
  }
}

console.log(`\nFixed syntax errors in ${fixedCount} files`);
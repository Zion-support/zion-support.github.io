#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed JSX fragments
    const fixes = [
      // Fix empty fragments followed by content
      {
        pattern: /<>\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with content but no closing
      {
        pattern: /<>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with content but malformed closing
      {
        pattern: /<>\s*([^<]+)\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with JSX content but malformed
      {
        pattern: /<>\s*<[^>]+>\s*<\/[^>]+>\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with multiple elements
      {
        pattern: /<>\s*<[^>]+>[\s\S]*?<\/[^>]+>\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with text content
      {
        pattern: /<>\s*[^<]+\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with comments
      {
        pattern: /<>\s*{\/\*[^*]*\*\/}\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with expressions
      {
        pattern: /<>\s*\{[^}]*\}\s*<\/>\s*<div/g,
        replacement: '<div'
      },
      // Fix fragments with multiple lines
      {
        pattern: /<>\s*[\s\S]*?<\/>\s*<div/g,
        replacement: '<div'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findReactFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const files = findReactFiles('.');
console.log(`Checking ${files.length} React files for JSX fragment issues`);

let fixedCount = 0;
for (const file of files) {
  if (fixJSXFragments(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX fragments in ${fixedCount} files`);
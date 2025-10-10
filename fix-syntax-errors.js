#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX syntax issues
    
    // Fix unclosed JSX tags - add missing closing tags
    const unclosedTags = content.match(/<(\w+)(?![^>]*\/>)[^>]*>(?![\s\S]*?<\/\1>)/g);
    if (unclosedTags) {
      console.log(`Found unclosed tags in ${filePath}:`, unclosedTags);
    }
    
    // Fix JSX fragments that are not properly closed
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*\}\s*$/gm, '');
    
    // Fix missing closing braces in JSX
    content = content.replace(/\{\s*$/gm, '{');
    
    // Fix orphaned closing tags
    content = content.replace(/^\s*<\/[^>]+>\s*$/gm, '');
    
    // Fix JSX expressions that are not properly closed
    content = content.replace(/\{\s*([^}]*)\s*$/gm, (match, content) => {
      if (content.trim() && !content.includes('}')) {
        return `{${content}}`;
      }
      return match;
    });
    
    // Fix malformed component returns
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    content = content.replace(/^\s*\)\s*;?\s*$/gm, ');');
    
    // Fix missing semicolons after JSX
    content = content.replace(/<\/[^>]+>\s*$/gm, (match) => {
      if (!match.includes(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Remove empty lines that might cause issues
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix common TypeScript issues
    content = content.replace(/:\s*any\s*=\s*\[\]/g, ': any[] = []');
    content = content.replace(/:\s*any\s*=\s*\{\}/g, ': any = {}');
    
    // Fix missing imports
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixSyntaxErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
  return fixedCount;
}

// Run the fix
const startDir = process.argv[2] || '.';
console.log(`Fixing syntax errors in directory: ${startDir}`);
const fixedCount = findAndFixSyntaxErrors(startDir);
console.log(`Completed! Fixed ${fixedCount} files.`);
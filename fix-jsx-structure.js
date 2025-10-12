#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing tags by analyzing the structure
    const lines = content.split('\n');
    const fixedLines = [];
    const openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track opening tags
      const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
      if (openTagMatch && !trimmedLine.includes('/>') && !trimmedLine.includes('</')) {
        openTags.push(openTagMatch[1]);
      }
      
      // Track closing tags
      const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastOpenIndex = openTags.lastIndexOf(tagName);
        if (lastOpenIndex !== -1) {
          openTags.splice(lastOpenIndex, 1);
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push('  '.repeat(Math.max(0, openTags.length)) + `</${tag}>`);
      modified = true;
    }
    
    // Fix specific common issues
    let newContent = fixedLines.join('\n');
    
    // Fix malformed JSX expressions
    newContent = newContent.replace(/\{\s*\}\s*\)/g, '}');
    newContent = newContent.replace(/\}\s*\)\s*\)/g, '})');
    
    // Fix missing commas in object literals
    newContent = newContent.replace(/(\s+benefits:\s*\[[^\]]*\])\s*icon:/g, '$1,\n      icon:');
    
    // Fix malformed import statements
    newContent = newContent.replace(/import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"]\s*}\s*\]/g, 'import { $1 } from \'$2\';');
    
    // Fix missing semicolons
    newContent = newContent.replace(/import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"]\s*$/gm, 'import { $1 } from \'$2\';');
    
    // Fix duplicate object properties
    newContent = newContent.replace(/(\s+benefits:\s*\[[^\]]*\]),\s*icon:\s*<[^>]+>,\s*title:\s*'([^']+)',\s*description:\s*'([^']+)'\s*}/g, '$1 }');
    
    // Fix malformed JSX in object properties
    newContent = newContent.replace(/(\s+icon:\s*<[^>]+>,\s*title:\s*'[^']+',\s*description:\s*'[^']+'\s*},?\s*)/g, '');
    
    // Fix missing commas in object literals
    newContent = newContent.replace(/(\s+benefits:\s*\[[^\]]*\])\s*}/g, '$1 }\n    }');
    
    // Clean up extra whitespace
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX structure in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixJSXStructure(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting JSX structure fixes...');
const fixedCount = findAndFixFiles('.');
console.log(`Fixed JSX structure in ${fixedCount} files.`);
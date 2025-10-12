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
    
    // Fix missing comma after array elements
    content = content.replace(/(\s+benefits:\s*\[[^\]]*\])\s*icon:/g, '$1,\n      icon:');
    
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"]\s*}\s*\]/g, 'import { $1 } from \'$2\';');
    
    // Fix missing semicolons after import statements
    content = content.replace(/import\s*{\s*([^}]+)}\s*from\s*['"]([^'"]+)['"]\s*$/gm, 'import { $1 } from \'$2\';');
    
    // Fix duplicate object properties
    content = content.replace(/(\s+benefits:\s*\[[^\]]*\]),\s*icon:\s*<[^>]+>,\s*title:\s*'([^']+)',\s*description:\s*'([^']+)'\s*}/g, '$1 }');
    
    // Fix missing closing brackets in arrays
    content = content.replace(/(\s+benefits:\s*\[[^\]]*)\s*icon:\s*<[^>]+>/g, '$1 ]');
    
    // Fix malformed JSX in object properties
    content = content.replace(/(\s+icon:\s*<[^>]+>,\s*title:\s*'[^']+',\s*description:\s*'[^']+'\s*},?\s*)/g, '');
    
    // Fix missing commas in object literals
    content = content.replace(/(\s+benefits:\s*\[[^\]]*\])\s*}/g, '$1 }\n    }');
    
    // Clean up duplicate lines
    const lines = content.split('\n');
    const cleanedLines = [];
    let lastLine = '';
    
    for (const line of lines) {
      if (line.trim() !== lastLine.trim() || line.trim() === '') {
        cleanedLines.push(line);
        lastLine = line;
      }
    
    content = cleanedLines.join('\n');
    
    // Fix specific parsing errors
    content = content.replace(/}\s*\]\s*$/gm, '} ]');
    content = content.replace(/}\s*]\s*$/gm, '} ]');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
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
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
  
  return fixedCount;
}

console.log('Starting syntax error resolution...');
const fixedCount = findAndFixFiles('.');
console.log(`Fixed syntax errors in ${fixedCount} files.`);
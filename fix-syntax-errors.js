#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate properties in objects (keep the last one)
  fixed = fixed.replace(/(\s+)(\w+):\s*[^,\n]+,\s*\n\s*\2:/g, (match, indent, prop) => {
    return match.replace(new RegExp(`\\s*${prop}:\\s*[^,\\n]+,\\s*\\n\\s*${prop}:`), '');
  });
  
  // Fix missing commas before properties
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*\n\s*(\w+),/g, '$1,\n      $2,');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*?)<\//g, '<React.Fragment>$1</React.Fragment>');
  
  // Fix unclosed JSX tags
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<\/\1>)/g, '<$1$2>$3</$1>');
  
  // Fix missing closing braces
  fixed = fixed.replace(/(\w+)\s*:\s*\[([^\]]*?)\]\s*\n\s*(\w+):/g, '$1: [$2],\n    $3:');
  
  // Fix object property syntax
  fixed = fixed.replace(/(\w+)\s*:\s*([^,\n]+)\s*\n\s*(\w+)\s*:/g, '$1: $2,\n    $3:');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('🔍 Scanning for files with syntax errors...');

const sourceFiles = findSourceFiles(workspaceDir);
console.log(`Found ${sourceFiles.length} source files`);

let processedCount = 0;
for (const file of sourceFiles) {
  if (processFile(file)) {
    processedCount++;
  }
}

console.log(`\n✅ Successfully fixed syntax errors in ${processedCount} files`);
console.log('🎉 Syntax error fixing complete!');
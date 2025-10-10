#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix array syntax errors;
function fixArraySyntax(content) {;
let fixed = content;
  
  // Fix array syntax issues like "},]" and "}]"
  fixed = fixed.replace(/,\s*\]\s*\]/g, ']');
  fixed = fixed.replace(/,\s*\]\s*$/gm, '');
  fixed = fixed.replace(/\]\s*\]/g, ']');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*:\s*[^,}\n]+\s*\n\s*(\w+)\s*:/g, '$1: $2,');
  
  // Fix extra closing braces
  fixed = fixed.replace(/\}\s*\}\s*\}/g, '}');
  fixed = fixed.replace(/\}\s*\}\s*$/gm, '}');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}\s])\s*\n\s*(const|let|var|function|class|interface|type|enum|export)\s/g, '$1;\n$2 ');
  
  return fixed;
}

// Function to process a single file;
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixArraySyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed array syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
// Function to find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
  
  traverse(dir);
  return files;
}

// Main execution;
const workspaceDir = __dirname;
console.log('🔧 Fixing array syntax errors...');

const files = findFiles(workspaceDir);
let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
  processedCount++;
}

console.log(`\n📊 Summary:`);
console.log(`   Files processed: ${processedCount}`);
console.log(`   Files with array syntax fixes: ${fixedCount}`);
console.log(`\n✅ Array syntax fixes complete!`);
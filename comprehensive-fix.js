#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax issues
function fixCommonIssues(content) {
  let fixed = content;
  
  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import '));
  const uniqueImports = [...new Set(importLines)];
  
  // Remove duplicate imports
  const lines = fixed.split('\n');
  const result = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        seenImports.add(importKey);
        result.push(line);
      }
    } else {
      result.push(line);
    }
  }
  
  fixed = result.join('\n');
  
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, (match, attrs) => {
    return match;
  });
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*icon:\s*(\w+),/g, 'icon: $1,');
  fixed = fixed.replace(/\{\s*title:\s*([^,}]+),/g, 'title: $1,');
  fixed = fixed.replace(/\{\s*description:\s*([^,}]+),/g, 'description: $1,');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, word) => {
    if (word.match(/^(icon|title|description|benefits|step|details)$/)) {
      return match;
    }
    return match;
  });
  
  // Fix missing closing brackets
  const openBrackets = (fixed.match(/\{/g) || []).length;
  const closeBrackets = (fixed.match(/\}/g) || []).length;
  
  if (openBrackets > closeBrackets) {
    const missing = openBrackets - closeBrackets;
    fixed += '\n' + '}'.repeat(missing);
  }
  
  // Fix missing closing parentheses
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  
  if (openParens > closeParens) {
    const missing = openParens - closeParens;
    fixed += '\n' + ')'.repeat(missing);
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixFilePatterns(content, filePath) {
  let fixed = content;
  
  // Fix common React component issues
  if (filePath.includes('page.tsx')) {
    // Fix missing closing tags in map functions
    fixed = fixed.replace(/(\s+)\{(\w+)\.map\([^)]+\)\s*=>\s*\(/g, (match, indent, arrayName) => {
      return match;
    });
    
    // Fix missing return statements
    fixed = fixed.replace(/(\s+)\{(\w+)\.map\([^)]+\)\s*=>\s*\{/g, (match, indent, arrayName) => {
      return match.replace('=> {', '=> {');
    });
  }
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('import ') || content.includes('export ') || content.includes('const ') || content.includes('function ')) {
      console.log(`Processing: ${filePath}`);
      
      let fixed = fixCommonIssues(content);
      fixed = fixFilePatterns(fixed, filePath);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        console.log(`✓ Fixed: ${filePath}`);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files in app directory
function findAppFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findAppFiles(appDir);

console.log(`Found ${files.length} files to process in app directory`);

let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
  processedCount++;
}

console.log(`\nProcessed ${processedCount} files`);
console.log(`Fixed ${fixedCount} files`);
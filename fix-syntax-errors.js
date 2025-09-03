#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
  
  // Fix missing quotes in JSX attributes
  fixed = fixed.replace(/className\s*=\s*'([^']*)\s*'/g, "className='$1');
  
  // Fix broken JSX syntax
  fixed = fixed.replace(/<([^>]+)\s*>/g, (match) => {
    return match.replace(/\s+/g, ' ').trim();
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?=[,}])/g, '$1: $2');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g, '[$1]');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/\]\s*\[/g, '], [');
  
  // Fix broken string literals
  fixed = fixed.replace(/'([^']*)\s*'/g, '$1'");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Starting syntax error fixes...');
const totalFixed = processDirectory(srcDir);
console.log(`Fixed ${totalFixed} files`);

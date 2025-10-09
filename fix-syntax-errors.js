#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix duplicate imports (e.g., "Brain, Shield, Target, Users ,  Brain,  Shield,  Target,  Users")
  fixed = fixed.replace(/(\w+,\s*)+(\w+)\s*,\s*(\1\2)/g, '$1$2');
  
  // Fix malformed object syntax (e.g., "{," -> "{")
  fixed = fixed.replace(/{\s*,/g, '{');
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/(<[^>]+>)([^<]*?)(<[^>]*>)/g, (match, open, content, close) => {
    if (open.includes('h2') && !close.includes('/h2')) {
      return open + content + '</h2>';
    }
    return match;
  });
  
  // Fix duplicate return statements - keep only the last one
  const returnMatches = [...fixed.matchAll(/return\s*\(/g)];
  if (returnMatches.length > 1) {
    const lastReturnIndex = returnMatches[returnMatches.length - 1].index;
    const beforeLastReturn = fixed.substring(0, lastReturnIndex);
    const afterLastReturn = fixed.substring(lastReturnIndex);
    
    // Remove all return statements before the last one
    const cleanedBefore = beforeLastReturn.replace(/return\s*\([^)]*\)\s*;?\s*/g, '');
    fixed = cleanedBefore + afterLastReturn;
  }
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(\w+:\s*[^,}]+)(\s*[,}])/g, '$1;$2');
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/(<[^>]+>)([^<]*?)(<[^>]*>)/g, (match, open, content, close) => {
    if (open.includes('h2') && !close.includes('/h2')) {
      return open + content + '</h2>';
    }
    return match;
  });
  
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

// Main function
function main() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(async (pattern) => {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();
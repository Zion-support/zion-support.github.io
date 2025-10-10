#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas after benefits arrays in features objects
    const benefitsPattern = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g;
    const newContent1 = content.replace(benefitsPattern, '$1,\n$2,\n$3');
    if (newContent1 !== content) {
      content = newContent1;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays at end of features array
    const benefitsEndPattern = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*\];)/g;
    const newContent2 = content.replace(benefitsEndPattern, '$1,\n$2\n$3');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays before const declarations
    const benefitsConstPattern = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*const)/g;
    const newContent3 = content.replace(benefitsConstPattern, '$1,\n$2\n$3');
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays before return statements
    const benefitsReturnPattern = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*return)/g;
    const newContent4 = content.replace(benefitsReturnPattern, '$1,\n$2\n$3');
    if (newContent4 !== content) {
      content = newContent4;
      modified = true;
    }
    
    // Fix extra semicolons and brackets
    const extraSemicolons = /;\s*;\s*\]\s*;\s*\]\s*;/g;
    const newContent5 = content.replace(extraSemicolons, '];');
    if (newContent5 !== content) {
      content = newContent5;
      modified = true;
    }
    
    const extraBrackets = /;\s*\]\s*;\s*\]\s*;/g;
    const newContent6 = content.replace(extraBrackets, '];');
    if (newContent6 !== content) {
      content = newContent6;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  console.log(`Found ${files.length} TSX files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);
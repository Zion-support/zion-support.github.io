#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas after benefits arrays - pattern 1: benefits array followed by closing brace and opening brace
    const pattern1 = /(\s+benefits:\s*\[[^\]]+\])\s*;\s*(\n\s*})\s*,\s*(\n\s*{)/g;
    const newContent1 = content.replace(pattern1, '$1,\n$2,\n$3');
    if (newContent1 !== content) {
      content = newContent1;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays - pattern 2: benefits array with semicolon followed by closing brace
    const pattern2 = /(\s+benefits:\s*\[[^\]]+\])\s*;\s*(\n\s*})/g;
    const newContent2 = content.replace(pattern2, '$1,\n$2');
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays - pattern 3: benefits array without semicolon followed by closing brace
    const pattern3 = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*{)/g;
    const newContent3 = content.replace(pattern3, '$1,\n$2,\n$3');
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays - pattern 4: benefits array at end of features array
    const pattern4 = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*\];)/g;
    const newContent4 = content.replace(pattern4, '$1,\n$2\n$3');
    if (newContent4 !== content) {
      content = newContent4;
      modified = true;
    }
    
    // Fix missing commas after benefits arrays - pattern 5: benefits array before const/return
    const pattern5 = /(\s+benefits:\s*\[[^\]]+\])\s*(\n\s*})\s*(\n\s*(?:const|return))/g;
    const newContent5 = content.replace(pattern5, '$1,\n$2\n$3');
    if (newContent5 !== content) {
      content = newContent5;
      modified = true;
    }
    
    // Fix extra semicolons and brackets
    const extraSemicolons = /;\s*;\s*\]\s*;\s*\]\s*;/g;
    const newContent6 = content.replace(extraSemicolons, '];');
    if (newContent6 !== content) {
      content = newContent6;
      modified = true;
    }
    
    const extraBrackets = /;\s*\]\s*;\s*\]\s*;/g;
    const newContent7 = content.replace(extraBrackets, '];');
    if (newContent7 !== content) {
      content = newContent7;
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
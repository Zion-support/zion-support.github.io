#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix extra closing brackets
    const extraBrackets = /\]\s*\]\s*;/g;
    const newContent = content.replace(extraBrackets, '];');
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix triple brackets
    const tripleBrackets = /\]\s*\]\s*\]\s*;/g;
    const newContent2 = content.replace(tripleBrackets, '];');
    if (newContent2 !== content) {
      content = newContent2;
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
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';


function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the corrupted hash line
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => !line.includes(corruptedHash));
    
    if (lines.length !== filteredLines.length) {
      const newContent = filteredLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting to fix corrupted files...');
const fixedCount = walkDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
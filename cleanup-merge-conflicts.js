#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers
    const patterns = [
      /
      /
      /
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern, '');
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.js'
  ];
  
  let totalCleaned = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      cwd: process.cwd(),
      ignore: ['node_modules/**']
    });
    for (const file of files) {
      if (await cleanupFile(file)) {
        totalCleaned++;
      }
    }
  }
  
  console.log(`\nTotal files cleaned: ${totalCleaned}`);
}

main().catch(console.error);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with the malformed return statement
const files = glob.sync('app/**/*.tsx');

let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the malformed pattern: "return;\n},"
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Simple replacement: replace "return;\n}," with "const features = ["
      content = content.replace('return;\n},', 'const features = [');
      
      fs.writeFileSync(filePath, content);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);
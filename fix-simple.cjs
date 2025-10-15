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
    
    // Check if file has the malformed pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Use regex to replace the malformed pattern
      // This regex looks for: return;\n}, followed by object literals until ];
      const regex = /return;\s*\n\s*,\s*(\{[\s\S]*?\})\s*\]/;
      const match = content.match(regex);
      
      if (match) {
        const objectLiterals = match[1];
        const replacement = `const features = [${objectLiterals}
  ];`;
        
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content);
        fixedCount++;
      } else {
        console.log(`  Could not match pattern in ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);
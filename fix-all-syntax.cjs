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
    
    // Check if file has the malformed pattern: "return;", followed by comma and object literals
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Find the function name
      const functionMatch = content.match(/export default function (\w+)\(\)/);
      if (!functionMatch) {
        console.log(`  Skipping ${filePath} - no function name found`);
        return;
      }
      
      const functionName = functionMatch[1];
      
      // Find the start of the malformed return statement
      const returnIndex = content.indexOf('return;');
      if (returnIndex === -1) {
        console.log(`  Skipping ${filePath} - no return statement found`);
        return;
      }
      
      // Find the end of the object literals (look for the closing bracket and semicolon)
      let braceCount = 0;
      let inObject = false;
      let endIndex = returnIndex;
      
      for (let i = returnIndex; i < content.length; i++) {
        if (content[i] === '{') {
          braceCount++;
          inObject = true;
        } else if (content[i] === '}') {
          braceCount--;
          if (braceCount === 0 && inObject) {
            // Look for the closing bracket and semicolon
            let j = i + 1;
            while (j < content.length && (content[j] === ' ' || content[j] === '\n' || content[j] === '\r' || content[j] === '\t')) {
              j++;
            }
            if (j < content.length && content[j] === ']') {
              // Find the semicolon after the closing bracket
              let k = j + 1;
              while (k < content.length && (content[k] === ' ' || content[k] === '\n' || content[k] === '\r' || content[k] === '\t')) {
                k++;
              }
              if (k < content.length && content[k] === ';') {
                endIndex = k + 1;
                break;
              }
            }
          }
        }
      }
      
      if (endIndex === returnIndex) {
        console.log(`  Skipping ${filePath} - could not find end of malformed structure`);
        return;
      }
      
      // Extract the object literals
      const objectLiterals = content.substring(returnIndex + 7, endIndex - 1); // +7 for "return;"
      
      // Replace the malformed section
      const beforeReturn = content.substring(0, returnIndex);
      const afterEnd = content.substring(endIndex);
      
      const fixedContent = beforeReturn + 
        `const features = [${objectLiterals}
  ];

` + afterEnd;
      
      fs.writeFileSync(filePath, fixedContent);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with the malformed return; pattern
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if file has the malformed pattern
    if (content.includes('return;\n},')) {
      console.log(`Fixing ${filePath}...`);
      
      // Use regex to fix the malformed structure
      let fixedContent = content;
      
      // Fix the main pattern: return; followed by comma and object literals
      // This pattern matches: return;\n},\n    {\n      title: ...\n    }
      const returnPattern = /return;\s*,\s*(\s*{\s*title:[^}]+}\s*,?\s*)+/gs;
      
      // Find the variable name by looking for the pattern before return;
      const beforeReturn = content.substring(0, content.indexOf('return;'));
      const lines = beforeReturn.split('\n');
      let variableName = 'features'; // default fallback
      
      // Look for const/let/var declarations before the function
      for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (line.startsWith('const ') || line.startsWith('let ') || line.startsWith('var ')) {
          const match = line.match(/(?:const|let|var)\s+(\w+)/);
          if (match) {
            variableName = match[1];
            break;
          }
        }
      }
      
      // Replace the malformed return; pattern with proper variable declaration
      fixedContent = fixedContent.replace(returnPattern, (match) => {
        // Extract the object literals from the match
        const objects = match.replace(/return;\s*,/, '').trim();
        return `const ${variableName} = [${objects}];`;
      });
      
      // Fix any remaining syntax issues
      // Remove any stray commas at the beginning of lines
      fixedContent = fixedContent.replace(/^\s*,\s*/gm, '');
      
      // Ensure proper indentation
      fixedContent = fixedContent.replace(/^(\s*){\s*$/gm, '$1{');
      
      // Write the fixed content
      fs.writeFileSync(fullPath, fixedContent);
      fixedCount++;
      console.log(`✓ Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);
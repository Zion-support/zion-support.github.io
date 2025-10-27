import fs from 'fs';
import { glob } from 'glob';

// Find all component files with stray brace issues
const files = await glob('app/components/*.tsx', {
  ignore: [
    'node_modules/**',
    '.next/**'
  ]
});

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Fix stray closing braces
    if (content.includes('}') && content.includes('export type')) {
      const lines = newContent.split('\n');
      let newLines = [];
      let inInterface = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('export type ') && line.includes('Props')) {
          inInterface = true;
          braceCount = 0;
          newLines.push(line);
        } else if (inInterface && line.includes('{')) {
          braceCount++;
          newLines.push(line);
        } else if (inInterface && line.includes('}')) {
          braceCount--;
          if (braceCount === 0) {
            inInterface = false;
            newLines.push(line);
          }
        } else if (line.trim() === '}' && !inInterface) {
          // Skip stray closing braces
          continue;
        } else {
          newLines.push(line);
        }
      }
      
      newContent = newLines.join('\n');
    }
    
    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      newContent = newContent.replace("import React from 'react';\n", '');
    }
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} component files.`);
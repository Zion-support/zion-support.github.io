import fs from 'fs';
import { glob } from 'glob';

// Find all component files with duplicate interface issues
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
    
    // Fix duplicate interface declarations
    if (content.includes('interface ') && content.includes('Props')) {
      const lines = newContent.split('\n');
      let newLines = [];
      let seenInterfaces = new Set();
      let inInterface = false;
      let currentInterface = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('interface ') && line.includes('Props')) {
          const interfaceName = line.match(/interface (\w+)/)?.[1] || '';
          if (!seenInterfaces.has(interfaceName)) {
            seenInterfaces.add(interfaceName);
            currentInterface = interfaceName;
            inInterface = true;
            newLines.push(line);
          } else {
            // Skip duplicate interface declaration
            inInterface = true;
            currentInterface = interfaceName;
          }
        } else if (line.includes('export type ') && line.includes('Props')) {
          const interfaceName = line.match(/export type (\w+)/)?.[1] || '';
          if (!seenInterfaces.has(interfaceName)) {
            seenInterfaces.add(interfaceName);
            currentInterface = interfaceName;
            inInterface = true;
            newLines.push(line);
          } else {
            // Skip duplicate type declaration
            inInterface = true;
            currentInterface = interfaceName;
          }
        } else if (inInterface && line.includes('}')) {
          inInterface = false;
          currentInterface = '';
          newLines.push(line);
        } else if (inInterface && currentInterface) {
          // Skip lines inside duplicate interface
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
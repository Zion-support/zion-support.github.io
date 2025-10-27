import fs from 'fs';
import { glob } from 'glob';

// Find all component files with interface issues
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
    
    // Fix interface declaration issues
    if (content.includes('interface ') && content.includes('Props')) {
      // Remove duplicate interface declarations and fix export issues
      const lines = newContent.split('\n');
      let newLines = [];
      let seenInterfaces = new Set();
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('interface ') && line.includes('Props')) {
          const interfaceName = line.match(/interface (\w+)/)?.[1] || '';
          if (!seenInterfaces.has(interfaceName)) {
            seenInterfaces.add(interfaceName);
            newLines.push(line);
          }
        } else if (line.includes('export interface ') && line.includes('Props')) {
          const interfaceName = line.match(/export interface (\w+)/)?.[1] || '';
          if (!seenInterfaces.has(interfaceName)) {
            seenInterfaces.add(interfaceName);
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      newContent = newLines.join('\n');
    }
    
    // Fix component declaration issues
    if (content.includes('const ') && content.includes('= () => {')) {
      const componentMatch = content.match(/const (\w+) = \(/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        // Check for multiple declarations
        const declarations = (content.match(new RegExp(`const ${componentName}`, 'g')) || []).length;
        const exports = (content.match(new RegExp(`export default ${componentName}`, 'g')) || []).length;
        
        if (declarations > 1 || exports > 1) {
          // Rebuild the component properly
          const lines = newContent.split('\n');
          let newLines = [];
          let inComponent = false;
          let componentStart = -1;
          let braceCount = 0;
          
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.includes(`const ${componentName} = (`) && !inComponent) {
              inComponent = true;
              componentStart = i;
              newLines.push(line);
              braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            } else if (inComponent) {
              newLines.push(line);
              braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
              
              if (braceCount === 0 && line.includes('}')) {
                inComponent = false;
                newLines.push('');
                newLines.push(`export default ${componentName};`);
                break;
              }
            } else if (!line.includes(`export default ${componentName}`)) {
              newLines.push(line);
            }
          }
          
          newContent = newLines.join('\n');
        }
      }
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
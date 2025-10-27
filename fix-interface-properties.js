import fs from 'fs';
import { glob } from 'glob';

// Find all component files with missing interface properties
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
    
    // Fix interfaces that are missing properties
    if (content.includes('interface ') && content.includes('Props') && content.includes('className') && content.includes('children')) {
      // Check if interface is missing properties
      const interfaceMatch = content.match(/interface (\w+Props) \{[\s\S]*?\}/);
      if (interfaceMatch) {
        const interfaceName = interfaceMatch[1];
        const interfaceContent = interfaceMatch[0];
        
        // Check if interface is missing className and children properties
        if (!interfaceContent.includes('className') || !interfaceContent.includes('children')) {
          // Replace the interface with proper properties
          const newInterface = `interface ${interfaceName} {
  className?: string;
  children?: React.ReactNode;
}`;
          
          newContent = newContent.replace(interfaceContent, newInterface);
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
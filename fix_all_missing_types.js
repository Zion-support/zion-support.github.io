#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files that might have missing types
const componentFiles = execSync('find ./app/components -name "*.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Checking ${componentFiles.length} component files for missing types`);

let fixedCount = 0;

componentFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has React.FC with Props but no interface
    const hasReactFC = content.includes('React.FC<');
    const hasPropsInterface = content.includes('interface ') && content.includes('Props');
    const hasImportReact = content.includes('import React');
    
    if (hasReactFC && !hasPropsInterface) {
      console.log(`Fixing missing types in: ${filePath}`);
      
      // Extract the component name and props interface name
      const componentMatch = content.match(/const\s+(\w+):\s*React\.FC<(\w+)Props>/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        const propsInterfaceName = componentMatch[2];
        
        let newContent = content;
        
        // Add React import if missing
        if (!hasImportReact) {
          newContent = `import React from 'react';\n\n${newContent}`;
        }
        
        // Add the missing interface
        const interfaceDefinition = `interface ${propsInterfaceName}Props {
  className?: string;
  children?: React.ReactNode;
}

`;
        
        // Insert interface after React import
        const importEndIndex = newContent.indexOf(';') + 1;
        newContent = newContent.slice(0, importEndIndex) + '\n' + interfaceDefinition + newContent.slice(importEndIndex);
        
        fs.writeFileSync(filePath, newContent);
        console.log(`✓ Added ${propsInterfaceName}Props interface`);
        fixedCount++;
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files with missing types`);
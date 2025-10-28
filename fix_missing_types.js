#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all TypeScript errors related to missing types
const buildOutput = execSync('npm run build 2>&1', { encoding: 'utf8' });

// Extract files with missing type errors
const missingTypeErrors = buildOutput.match(/Cannot find name '(\w+)'\./g);
if (!missingTypeErrors) {
  console.log('No missing type errors found');
  process.exit(0);
}

// Get unique type names that are missing
const missingTypes = [...new Set(missingTypeErrors.map(error => {
  const match = error.match(/Cannot find name '(\w+)'\./);
  return match ? match[1] : null;
}).filter(Boolean))];

console.log(`Found missing types: ${missingTypes.join(', ')}`);

// Find files that reference these missing types
const filesToFix = [];
for (const typeName of missingTypes) {
  const files = execSync(`grep -l "${typeName}" ./app/components/*.tsx`, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file);
  filesToFix.push(...files);
}

const uniqueFiles = [...new Set(filesToFix)];
console.log(`Found ${uniqueFiles.length} files to fix`);

uniqueFiles.forEach(filePath => {
  try {
    console.log(`Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from the file
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    
    // Check if it's a props interface that's missing
    const propsInterfaceMatch = content.match(/(\w+)Props/);
    if (propsInterfaceMatch) {
      const propsInterfaceName = propsInterfaceMatch[1];
      
      // Add the missing interface at the top
      const interfaceDefinition = `interface ${propsInterfaceName}Props {
  className?: string;
  children?: React.ReactNode;
}

`;
      
      // Add React import if not present
      if (!content.includes('import React')) {
        content = `import React from 'react';\n\n${interfaceDefinition}${content}`;
      } else {
        // Insert after the import
        const importEndIndex = content.indexOf(';') + 1;
        content = content.slice(0, importEndIndex) + '\n' + interfaceDefinition + content.slice(importEndIndex);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`✓ Added interface for ${propsInterfaceName}Props`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed missing types in ${uniqueFiles.length} files`);
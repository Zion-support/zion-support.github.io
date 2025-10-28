#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all TypeScript files with missing interface errors
const filesWithErrors = execSync('grep -r "Cannot find name" . --include="*.tsx" --include="*.ts" 2>/dev/null || true', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(line => line.includes('Cannot find name') && line.includes('Props'))
  .map(line => {
    const match = line.match(/^\.\/([^:]+):/);
    return match ? match[1] : null;
  })
  .filter(Boolean);

console.log(`Found ${filesWithErrors.length} files with missing interface errors`);

function fixMissingInterface(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    
    // Check if React import is missing
    if (!content.includes('import React')) {
      content = `import React from 'react';\n\n${content}`;
    }
    
    // Check if interface is missing
    const interfaceName = `${capitalizedName}Props`;
    if (!content.includes(`interface ${interfaceName}`)) {
      // Find the line with the component definition
      const lines = content.split('\n');
      let insertIndex = 0;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(`React.FC<${interfaceName}>`)) {
          insertIndex = i;
          break;
        }
      }
      
      // Insert interface before the component definition
      const interfaceDef = `interface ${interfaceName} {
  className?: string;
  children?: React.ReactNode;
}

`;
      
      lines.splice(insertIndex, 0, interfaceDef);
      content = lines.join('\n');
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files with missing interfaces
let fixedCount = 0;
let errorCount = 0;

filesWithErrors.forEach(file => {
  if (fixMissingInterface(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully fixed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);
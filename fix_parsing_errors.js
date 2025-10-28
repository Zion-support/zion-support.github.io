#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files
const componentFiles = execSync('find app/components -name "*.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.trim());

console.log(`Found ${componentFiles.length} component files`);

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const interfaceName = `${capitalizedName}Props`;
    
    // Clean up the content
    let lines = content.split('\n');
    
    // Remove empty lines at the beginning
    while (lines.length > 0 && lines[0].trim() === '') {
      lines.shift();
    }
    
    // Remove orphaned code
    const cleanLines = [];
    let inInterface = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('interface ') && line.includes('Props')) {
        inInterface = true;
        braceCount = 0;
        cleanLines.push(line);
      } else if (inInterface) {
        if (line.includes('{')) braceCount++;
        if (line.includes('}')) braceCount--;
        cleanLines.push(line);
        if (braceCount === 0) {
          inInterface = false;
        }
      } else if (line.trim() === '' || line.includes('// Add props here') || line.includes('}')) {
        // Skip empty lines and orphaned code
        continue;
      } else {
        cleanLines.push(line);
      }
    }
    
    lines = cleanLines;
    
    // Ensure React import is at the top
    if (!lines.some(line => line.includes('import React'))) {
      lines.unshift("import React from 'react';", '');
    }
    
    // Add interface if missing
    if (!lines.some(line => line.includes(`interface ${interfaceName}`))) {
      const interfaceDef = `interface ${interfaceName} {
  className?: string;
  children?: React.ReactNode;
}

`;
      lines.splice(1, 0, interfaceDef);
    }
    
    // Fix function signatures
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('export default function') && !lines[i].includes(interfaceName)) {
        const functionName = lines[i].match(/export default function (\w+)/)?.[1];
        if (functionName) {
          lines[i] = lines[i].replace(
            /export default function \w+\([^)]*\)/,
            `export default function ${functionName}({ className = '', children }: ${interfaceName})`
          );
        }
      }
    }
    
    // Ensure proper return statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('return (') && lines[i + 1] && lines[i + 1].includes('<div>')) {
        lines[i + 1] = lines[i + 1].replace(
          '<div>',
          `<div className={\`${componentName.toLowerCase()}-component \${className}\`}>`
        );
        // Add children if not present
        if (!lines.some(line => line.includes('{children}'))) {
          const returnEndIndex = lines.findIndex((line, idx) => idx > i && line.includes(');'));
          if (returnEndIndex > 0) {
            lines[returnEndIndex - 1] = '      {children}';
          }
        }
        break;
      }
    }
    
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all components
let fixedCount = 0;
let errorCount = 0;

componentFiles.forEach(file => {
  if (fixParsingErrors(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully fixed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);
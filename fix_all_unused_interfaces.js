#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files
const componentFiles = execSync('find app/components -name "*.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && file.trim());

console.log(`Found ${componentFiles.length} component files`);

function fixUnusedInterfaces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract component name from file path
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const interfaceName = `${capitalizedName}Props`;
    
    // Check if there are unused interfaces
    if (content.includes(`interface ${interfaceName}`) && !content.includes(`React.FC<${interfaceName}>`) && !content.includes(`: ${interfaceName}`)) {
      const lines = content.split('\n');
      let fixed = false;
      
      // Look for function declarations
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('export default function') && !lines[i].includes(interfaceName)) {
          // Fix function signature
          const functionName = lines[i].match(/export default function (\w+)/)?.[1];
          if (functionName) {
            lines[i] = lines[i].replace(
              /export default function \w+\([^)]*\)/,
              `export default function ${functionName}({ className = '', children }: ${interfaceName})`
            );
            fixed = true;
            break;
          }
        } else if (lines[i].includes('const ') && lines[i].includes('= ()') && !lines[i].includes(interfaceName)) {
          // Fix arrow function signature
          const constName = lines[i].match(/const (\w+)/)?.[1];
          if (constName) {
            lines[i] = lines[i].replace(
              /const \w+: React\.FC<Props> = \([^)]*\)/,
              `const ${constName}: React.FC<${interfaceName}> = ({ className = '', children })`
            );
            fixed = true;
            break;
          }
        }
      }
      
      if (fixed) {
        content = lines.join('\n');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Fixed ${filePath}`);
        return true;
      }
    }
    
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
  if (fixUnusedInterfaces(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nFix complete:`);
console.log(`✓ Successfully processed: ${fixedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);
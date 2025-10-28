#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find all component files that might have duplicate declarations
const componentFiles = execSync('find ./app/components -name "*.tsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file);

console.log(`Checking ${componentFiles.length} component files for duplicate declarations`);

let fixedCount = 0;

componentFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has duplicate component declarations
    const componentName = filePath.split('/').pop().replace('.tsx', '');
    const componentMatches = content.match(new RegExp(`(const|function)\\s+${componentName}`, 'g'));
    
    if (componentMatches && componentMatches.length > 1) {
      console.log(`Fixing duplicate declarations in: ${filePath}`);
      
      // Split content by lines
      const lines = content.split('\n');
      let newLines = [];
      let foundFirstDeclaration = false;
      let inFirstDeclaration = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is a component declaration
        if (line.includes(`const ${componentName}`) || line.includes(`function ${componentName}`)) {
          if (!foundFirstDeclaration) {
            foundFirstDeclaration = true;
            inFirstDeclaration = true;
            newLines.push(line);
            continue;
          } else {
            // Skip duplicate declarations
            continue;
          }
        }
        
        if (inFirstDeclaration) {
          newLines.push(line);
          
          // Count braces to know when the first declaration ends
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;
          
          if (braceCount === 0 && line.includes('}')) {
            inFirstDeclaration = false;
          }
        } else if (!line.includes(`const ${componentName}`) && !line.includes(`function ${componentName}`)) {
          newLines.push(line);
        }
      }
      
      const newContent = newLines.join('\n');
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`✓ Fixed duplicate declarations in: ${filePath}`);
        fixedCount++;
      }
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files with duplicate declarations`);
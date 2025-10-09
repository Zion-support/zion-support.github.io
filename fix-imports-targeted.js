#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      
      // Check if this is a lucide-react import with many icons
      if (line.includes('from \'lucide-react\'')) {
        // Extract the import statement
        const importMatch = line.match(/import\s*{\s*(.*?)\s*}\s*from\s*['"]lucide-react['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          
          // Read the rest of the file to see which icons are actually used
          const fileContent = content;
          const usedImports = imports.filter(imp => {
            // Check if the import is used in the file (case-sensitive)
            const regex = new RegExp(`\\b${imp}\\b`, 'g');
            return regex.test(fileContent);
          });
          
          if (usedImports.length === 0) {
            // Remove the entire import line if no icons are used
            i++;
            continue;
          } else if (usedImports.length < imports.length) {
            // Replace with only used imports
            const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
            newLines.push(newImport);
            i++;
            continue;
          }
        }
      }
      
      newLines.push(line);
      i++;
    }
    
    // Write the file back if changes were made
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to fix unused variable declarations
function fixUnusedVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for unused variable declarations
      if (line.includes('const ') && line.includes('= () => {') && line.includes('Page')) {
        // This is likely a component declaration that needs to be exported
        const componentMatch = line.match(/const\s+(\w+Page)\s*:/);
        if (componentMatch) {
          const componentName = componentMatch[1];
          // Check if this component is used elsewhere in the file
          const isUsed = content.includes(`<${componentName}`) || content.includes(`${componentName}(`);
          
          if (!isUsed) {
            // Add export default at the end of the file
            newLines.push(line);
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    // Check if we need to add export default
    const hasExportDefault = content.includes('export default');
    const hasComponentDeclaration = content.includes('const ') && content.includes('Page:');
    
    if (!hasExportDefault && hasComponentDeclaration) {
      // Find the component name
      const componentMatch = content.match(/const\s+(\w+Page)\s*:/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        newLines.push('');
        newLines.push(`export default ${componentName};`);
      }
    }
    
    // Write the file back if changes were made
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed exports in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main function
function main() {
  console.log('Fixing unused imports and exports...');
  
  const files = getAllFiles('./src');
  let fixedCount = 0;
  
  files.forEach(file => {
    const originalContent = fs.readFileSync(file, 'utf8');
    
    // Fix unused imports
    fixUnusedImports(file);
    
    // Fix unused variables and exports
    fixUnusedVariables(file);
    
    const newContent = fs.readFileSync(file, 'utf8');
    if (originalContent !== newContent) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  console.log('Import and export fixes completed!');
}

main();
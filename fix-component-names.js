#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix component names that start with numbers
function fixComponentName(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Extract the directory name from the path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2];
    
    // Convert kebab-case to PascalCase, handling numbers at the start
    let componentName = fileName.split('-').map(word => {
      // If word starts with a number, prefix with 'Ai' or 'Tech'
      if (/^\d/.test(word)) {
        return 'Tech' + word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');

    // Handle special cases
    if (componentName.startsWith('5g')) {
      componentName = 'FiveG' + componentName.slice(2);
    }
    if (componentName.startsWith('3d')) {
      componentName = 'ThreeD' + componentName.slice(2);
    }

    // Fix the component usage in the file
    const componentPattern = /<(\w+) \{\.\.\.props\} \/>/;
    const match = content.match(componentPattern);
    
    if (match) {
      const oldComponentName = match[1];
      if (oldComponentName !== componentName) {
        content = content.replace(new RegExp(`<${oldComponentName}`, 'g'), `<${componentName}`);
        modified = true;
      }
    }

    // Also fix the function name
    const functionPattern = /export default function (\w+)\(props: any\)/;
    const functionMatch = content.match(functionPattern);
    
    if (functionMatch) {
      const oldFunctionName = functionMatch[1];
      if (oldFunctionName !== componentName) {
        content = content.replace(new RegExp(`function ${oldFunctionName}`, 'g'), `function ${componentName}`);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed component name in: ${filePath} -> ${componentName}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting component name fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  const totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixComponentName(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('Component name fixes completed!');
}

main().catch(console.error);
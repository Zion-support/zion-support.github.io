#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


    
    // Fix common syntax errors
    // Remove extra commas and semicolons
    content = content.replace(/;/g, ';');
    content = content.replace(/,(\s*[;}])/g, '$1');
    content = content.replace(/,(\s*\/\/)/g, '$1');
    content = content.replace(/,(\s*\/\*)/g, '$1');
    
    // Fix JSX syntax issues
    content = content.replace(/,(\s*<)/g, '$1');
    content = content.replace(/,(\s*{)/g, '$1');
    content = content.replace(/,(\s*})/g, '$1');
    
    // Fix object syntax
    content = content.replace(/,(\s*})/g, '$1');
    content = content.replace(/,(\s*])/g, '$1');
    
    // Fix function parameters
    content = content.replace(/,(\s*\))/g, '$1');
    
    // Fix class names with spaces
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
    
    // Fix hover states
    content = content.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
    
    // Fix focus states
    content = content.replace(/focus:\s+([a-zA-Z-]+)/g, 'focus:$1');
    
    // Fix group hover
    content = content.replace(/group-hover:\s+([a-zA-Z-]+)/g, 'group-hover:$1');
    
    // Fix not-sr-only
    content = content.replace(/not-sr-only/g, 'not-sr-only');
    
    // Fix missing imports
    if (content.includes('React') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
    }
    
    // Fix missing export
    if (content.includes('const ') && !content.includes('export default') && !content.includes('export ')) {
      const componentName = content.match(/const\s+([A-Z][a-zA-Z0-9]*)/);
      if (componentName) {
        content += `\n\nexport default ${componentName[1]};`;
      }
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');

const componentsDir = path.join(__dirname, 'components');
const hooksDir = path.join(__dirname, 'hooks');

let totalFixed = 0;

if (fs.existsSync(componentsDir)) {
  console.log('Fixing components directory...');
  totalFixed += fixFilesInDirectory(componentsDir);
}

if (fs.existsSync(hooksDir)) {
  console.log('Fixing hooks directory...');
  totalFixed += fixFilesInDirectory(hooksDir);
}

console.log(`Fixed ${totalFixed} files`);
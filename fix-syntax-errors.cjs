#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove extra commas and semicolons
      .replace(/,;/g, ';')
      .replace(/,\s*;/g, ';')
      .replace(/,\s*$/gm, '')
      .replace(/;\s*$/gm, ';')
      // Fix object syntax
      .replace(/,(\s*[}\]])/g, '$1')
      // Fix function parameters
      .replace(/,\s*\)/g, ')')
      // Fix JSX attributes
      .replace(/,(\s*[>}])/g, '$1')
      // Fix CSS class names
      .replace(/:\s*([a-zA-Z-]+)\s*{/g, ':$1 {')
      .replace(/:\s*not-([a-zA-Z-]+)/g, ':not-$1')
      // Fix hover states
      .replace(/hover:\s*([a-zA-Z-]+)/g, 'hover:$1')
      // Fix focus states
      .replace(/focus:\s*([a-zA-Z-]+)/g, 'focus:$1')
      // Fix group hover
      .replace(/group-hover:\s*([a-zA-Z-]+)/g, 'group-hover:$1')
      // Fix missing imports
      .replace(/^import\s+React[^;]*;\s*$/gm, (match) => {
        if (!match.includes('{')) {
          return match.replace('React', 'React, { useState, useEffect }');
        }
        return match;
      })
      // Fix missing export
      .replace(/^const\s+(\w+):\s*React\.FC[^;]*$/gm, (match, name) => {
        if (!content.includes(`export default ${name}`)) {
          return match + `\n\nexport default ${name};`;
        }
        return match;
      });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(tsx?|jsx?)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = findAndFixFiles('/workspace/components');
console.log(`Fixed ${fixedCount} files in components directory`);

const hooksFixedCount = findAndFixFiles('/workspace/hooks');
console.log(`Fixed ${hooksFixedCount} files in hooks directory`);

console.log('Syntax error fixes completed!');
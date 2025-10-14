const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix import statements with spaces
  fixed = fixed.replace(/import\s+React,\s*\{\s*use\s+Effect\s*\}\s*from\s+'react';/g, 
    "import React, { useEffect } from 'react';");
  
  // Fix interface names with spaces
  fixed = fixed.replace(/interface\s+Accessibility\s+Enhancer\s+Props/g, 
    'interface AccessibilityEnhancerProps');
  
  // Fix property names with spaces in interfaces
  fixed = fixed.replace(/enable\s+Keyboard\s+Navigation\?/g, 'enableKeyboardNavigation?');
  fixed = fixed.replace(/enable\s+Screen\s+Reader\s+Support\?/g, 'enableScreenReaderSupport?');
  fixed = fixed.replace(/enable\s+High\s+Contrast\?/g, 'enableHighContrast?');
  fixed = fixed.replace(/enable\s+Focus\s+Management\?/g, 'enableFocusManagement?');
  
  // Fix destructuring with spaces
  fixed = fixed.replace(/enable\s+Keyboard\s+Navigation\s*=/g, 'enableKeyboardNavigation =');
  fixed = fixed.replace(/enable\s+Screen\s+Reader\s+Support\s*=/g, 'enableScreenReaderSupport =');
  fixed = fixed.replace(/enable\s+High\s+Contrast\s*=/g, 'enableHighContrast =');
  fixed = fixed.replace(/enable\s+Focus\s+Management\s*=/g, 'enableFocusManagement =');
  
  // Fix function calls with spaces
  fixed = fixed.replace(/use\s+Effect/g, 'useEffect');
  
  // Fix other common spacing issues in TypeScript
  fixed = fixed.replace(/\s+:\s*React\.FC/g, ': React.FC');
  fixed = fixed.replace(/\s+=\s*\(\s*\)\s*=>\s*{/g, ' = () => {');
  
  return fixed;
}

// Get all TypeScript/TSX files
const files = [
  ...glob.sync('app/**/*.tsx'),
  ...glob.sync('app/**/*.ts'),
  ...glob.sync('components/**/*.tsx'),
  ...glob.sync('components/**/*.ts'),
  ...glob.sync('hooks/**/*.ts'),
  ...glob.sync('utils/**/*.ts')
];

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files successfully!`);
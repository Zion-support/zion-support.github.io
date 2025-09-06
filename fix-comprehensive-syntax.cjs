#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing semicolons in interface properties
    const interfaceFix = content.replace(/(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm, '$1: $2;$3');
    if (interfaceFix !== content) {
      content = interfaceFix;
      modified = true;
    }
    
    // Fix missing semicolons in type definitions
    const typeFix = content.replace(/(\w+)\s*:\s*([^,;]+),(\s*\/\/[^\n]*)?$/gm, '$1: $2;$3');
    if (typeFix !== content) {
      content = typeFix;
      modified = true;
    }
    
    // Fix missing commas in object destructuring
    const destructuringFix = content.replace(/(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1: $2,$3');
    if (destructuringFix !== content) {
      content = destructuringFix;
      modified = true;
    }
    
    // Fix missing commas in array destructuring
    const arrayDestructuringFix = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (arrayDestructuringFix !== content) {
      content = arrayDestructuringFix;
      modified = true;
    }
    
    // Fix missing commas in function parameters
    const functionParamsFix = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (functionParamsFix !== content) {
      content = functionParamsFix;
      modified = true;
    }
    
    // Fix missing commas in object properties
    const objectPropsFix = content.replace(/(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1: $2,$3');
    if (objectPropsFix !== content) {
      content = objectPropsFix;
      modified = true;
    }
    
    // Fix missing commas in function calls
    const functionCallsFix = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (functionCallsFix !== content) {
      content = functionCallsFix;
      modified = true;
    }
    
    // Fix missing commas in object destructuring
    const objectDestructuringFix = content.replace(/(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1: $2,$3');
    if (objectDestructuringFix !== content) {
      content = objectDestructuringFix;
      modified = true;
    }
    
    // Fix missing commas in array destructuring
    const arrayDestructuringFix2 = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (arrayDestructuringFix2 !== content) {
      content = arrayDestructuringFix2;
      modified = true;
    }
    
    // Fix missing commas in function parameters
    const functionParamsFix2 = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (functionParamsFix2 !== content) {
      content = functionParamsFix2;
      modified = true;
    }
    
    // Fix missing commas in object properties
    const objectPropsFix2 = content.replace(/(\w+)\s*:\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1: $2,$3');
    if (objectPropsFix2 !== content) {
      content = objectPropsFix2;
      modified = true;
    }
    
    // Fix missing commas in function calls
    const functionCallsFix2 = content.replace(/(\w+)\s*=\s*([^,;)]+);(\s*\/\/[^\n]*)?$/gm, '$1 = $2,$3');
    if (functionCallsFix2 !== content) {
      content = functionCallsFix2;
      modified = true;
    }
    
    if (modified) {
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

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**', 'out/**']
});

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
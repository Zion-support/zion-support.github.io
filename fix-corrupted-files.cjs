#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix corrupted syntax
function fixCorruptedSyntax(content) {
  // Fix import statements - more comprehensive patterns
  content = content.replace(/import,\s*Reac,\s*t,\s*{\s*([^}]+)\s*}\s*fr,\s*o,\s*m\s*'rea,\s*c,\s*t';/g, "import React, { $1 } from 'react';");
  content = content.replace(/import,\s*Reac,\s*t,\s*from\s*'rea,\s*c,\s*t';/g, "import React from 'react';");
  content = content.replace(/import,\s*React,\s*from\s*'rea,\s*c,\s*t';/g, "import React from 'react';");
  content = content.replace(/impo,\s*r,\s*t\s*{\s*([^}]+)\s*}\s*fr,\s*o,\s*m\s*'([^']+)';/g, "import { $1 } from '$2';");
  content = content.replace(/impo,\s*r,\s*t\s*([^,]+),\s*from\s*'([^']+)';/g, "import $1 from '$2';");
  
  // Fix variable declarations
  content = content.replace(/const,\s*([^,=]+),\s*=/g, "const $1 =");
  content = content.replace(/let,\s*([^,=]+),\s*=/g, "let $1 =");
  content = content.replace(/var,\s*([^,=]+),\s*=/g, "var $1 =");
  
  // Fix function declarations
  content = content.replace(/function,\s*([^(]+),\s*\(/g, "function $1(");
  content = content.replace(/const,\s*([^,=]+),\s*:\s*([^=]+),\s*=/g, "const $1: $2 =");
  
  // Fix interface declarations
  content = content.replace(/interface,\s*([^{]+),\s*{/g, "interface $1 {");
  
  // Fix object properties
  content = content.replace(/(\w+),\s*:/g, "$1:");
  content = content.replace(/(\w+),\s*=/g, "$1 =");
  
  // Fix array elements
  content = content.replace(/\[\s*([^,\]]+),\s*\]/g, "[$1]");
  
  // Fix string literals
  content = content.replace(/'([^']+),\s*'/g, "'$1'");
  content = content.replace(/"([^"]+),\s*"/g, "\"$1\"");
  
  // Fix more complex patterns
  content = content.replace(/useSta,\s*t,\s*e/g, "useState");
  content = content.replace(/useEffe,\s*c,\s*t/g, "useEffect");
  content = content.replace(/useCal,\s*l,\s*bac,\s*k/g, "useCallback");
  content = content.replace(/useMe,\s*m,\s*o/g, "useMemo");
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCorruptedSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix corrupted files...');
const srcDir = path.join(__dirname, 'src');
const fixedCount = processDirectory(srcDir);
console.log(`Fixed ${fixedCount} files.`);
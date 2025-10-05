#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all corrupted syntax patterns
function fixAllCorruptedSyntax(content) {
  // Fix interface declarations
  content = content.replace(/interface,\s*([^{]+),\s*{/g, "interface $1 {");
  
  // Fix all remaining comma patterns in variable names
  content = content.replace(/(\w+),\s*(\w+),\s*(\w+)/g, (match, p1, p2, p3) => {
    // Only fix if it looks like a corrupted variable name
    if (p2.length === 1 && p3.length === 1) {
      return p1 + p2 + p3;
    }
    return match;
  });
  
  // Fix specific patterns
  content = content.replace(/childr,\s*e,\s*n/g, "children");
  content = content.replace(/Rea,\s*c,\s*t/g, "React");
  content = content.replace(/ReactN,\s*o,\s*d,\s*e/g, "ReactNode");
  content = content.replace(/boole,\s*a,\s*n/g, "boolean");
  content = content.replace(/v,\s*o,\s*i,\s*d/g, "void");
  content = content.replace(/isVisib,\s*l,\s*e/g, "isVisible");
  content = content.replace(/onClo,\s*s,\s*e/g, "onClose");
  content = content.replace(/Prop,\s*s/g, "Props");
  
  // Fix function arrow syntax
  content = content.replace(/=\s*>\s*v,\s*o,\s*i,\s*d/g, "=> void");
  content = content.replace(/=\s*>\s*boole,\s*a,\s*n/g, "=> boolean");
  
  // Fix more complex patterns
  content = content.replace(/useSta,\s*t,\s*e/g, "useState");
  content = content.replace(/useEffe,\s*c,\s*t/g, "useEffect");
  content = content.replace(/useCal,\s*l,\s*bac,\s*k/g, "useCallback");
  content = content.replace(/useMe,\s*m,\s*o/g, "useMemo");
  
  // Fix import statements
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
  
  // Fix object properties
  content = content.replace(/(\w+),\s*:/g, "$1:");
  content = content.replace(/(\w+),\s*=/g, "$1 =");
  
  // Fix array elements
  content = content.replace(/\[\s*([^,\]]+),\s*\]/g, "[$1]");
  
  // Fix string literals
  content = content.replace(/'([^']+),\s*'/g, "'$1'");
  content = content.replace(/"([^"]+),\s*"/g, "\"$1\"");
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllCorruptedSyntax(content);
    
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
console.log('Starting comprehensive fix of corrupted files...');
const srcDir = path.join(__dirname, 'src');
const fixedCount = processDirectory(srcDir);
console.log(`Fixed ${fixedCount} files.`);
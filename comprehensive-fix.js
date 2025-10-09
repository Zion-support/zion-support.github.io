#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n  $2:');
    
    // Fix missing commas after arrays
    content = content.replace(/\]\s*\n\s*(\w+):/g, '],\n  $1:');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+)\s*\n\s*(\w+)\s*=/g, '$1,\n  $2 =');
    
    // Fix incomplete function calls
    content = content.replace(/if\s*\(\s*root\s*\)\s*\{[^}]*$/gm, (match) => {
      if (!match.includes('ReactDOM.createRoot')) {
        return match + '\n  ReactDOM.createRoot(root).render(<App />);\n}';
      }
      return match;
    });
    
    // Fix service worker registration
    content = content.replace(/\/\/\s*navigator\.serviceWorker\.register/g, 'navigator.serviceWorker.register');
    
    // Fix missing React import
    if (content.includes('ReactDOM') && !content.includes("import React")) {
      content = content.replace(/import ReactDOM/, 'import React from \'react\';\nimport ReactDOM');
      fixed = true;
    }
    
    // Fix variable declarations
    content = content.replace(/const _root/g, 'const root');
    
    // Fix incomplete JSX
    content = content.replace(/\/\/\s*ReactDOM\.createRoot/g, 'ReactDOM.createRoot');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      content += '\n'.repeat(openBraces - closeBraces) + '}';
      fixed = true;
    }
    
    // Fix misplaced imports
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    let inImportSection = true;
    
    for (const line of lines) {
      if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
        importLines.push(line);
      } else {
        inImportSection = false;
        otherLines.push(line);
      }
    }
    
    const newContent = [...importLines, ...otherLines].join('\n');
    if (newContent !== content) {
      content = newContent;
      fixed = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);

// Fix root files
const rootFiles = ['./App.tsx', './main.tsx'];
let rootFixedCount = 0;
for (const file of rootFiles) {
  if (fs.existsSync(file) && fixFile(file)) {
    rootFixedCount++;
  }
}

console.log(`Fixed ${rootFixedCount} root files.`);
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`);
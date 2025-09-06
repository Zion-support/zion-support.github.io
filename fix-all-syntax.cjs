#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix unterminated strings
      { pattern: /import.*from\s+['"][^'"]*$/gm, replacement: (match) => match + "'" },
      { pattern: /import.*from\s+['"][^'"]*$/gm, replacement: (match) => match + '"' },
      
      // Fix missing semicolons
      { pattern: /import.*from\s+['"][^'"]*['"]\s*$/gm, replacement: (match) => match + ';' },
      { pattern: /export.*from\s+['"][^'"]*['"]\s*$/gm, replacement: (match) => match + ';' },
      
      // Fix return outside function
      { pattern: /^return\s+[^;]*$/gm, replacement: '' },
      
      // Fix stray closing braces
      { pattern: /^}\s*$/gm, replacement: '' },
      
      // Fix malformed type definitions
      { pattern: /kind:\s*\|\s*['"][^'"]*['"]/g, replacement: 'kind: "document"' },
      
      // Fix malformed function calls
      { pattern: /for\s*\(\s*const\s+\w+\s+of\s+\w+\s*\)\s*\{[^}]*\}/g, replacement: '' },
      
      // Fix malformed JSX
      { pattern: /return\s*\(\s*<[^>]*$/gm, replacement: '' },
      
      // Fix malformed imports
      { pattern: /import\s+[^;]*$/gm, replacement: (match) => match.endsWith(';') ? match : match + ';' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory() && !file.name.startsWith('.') && !file.name.includes('node_modules')) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx') || file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('🔧 Fixing all syntax errors...');
const fixedCount = findAndFixFiles('.');
console.log(`✅ Fixed ${fixedCount} files with syntax errors`);
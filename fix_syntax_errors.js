#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix missing semicolons after closing braces
      { pattern: /(\s+)\)\s*}\s*$/, replacement: '$1);\n};' },
      
      // Fix missing semicolons after closing parentheses
      { pattern: /(\s+)\)\s*$/, replacement: '$1);' },
      
      // Fix missing closing tags
      { pattern: /<Link;\s*$/, replacement: '<Link' },
      
      // Fix duplicate imports
      { pattern: /import React from 'react';\s*import React from 'react'/, replacement: "import React from 'react';" },
      
      // Fix export default with wrong name
      { pattern: /export default PagePage;/, replacement: 'export default AccessibilityPage;' },
      
      // Fix malformed JSX
      { pattern: /}\s*,\s*-\s*>\s*/, replacement: '}\n' },
      
      // Fix missing semicolons in export statements
      { pattern: /export default (\w+)(?!;)/, replacement: 'export default $1;' },
      
      // Fix malformed closing tags
      { pattern: /}\s*`\s*-\s*>\s*/, replacement: '}\n' },
      
      // Fix missing closing parentheses in JSX
      { pattern: /(\s+)\}\s*`\s*-\s*>\s*/, replacement: '$1}\n' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    // Remove duplicate function definitions
    const lines = content.split('\n');
    const functionLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('const ') && lines[i].includes('= () => {')) {
        functionLines.push(i);
      }
    }
    
    if (functionLines.length > 1) {
      // Keep only the last function definition
      const lastFunction = functionLines[functionLines.length - 1];
      const newLines = lines.slice(0, lastFunction);
      
      // Add the rest of the file after the last function
      for (let i = lastFunction; i < lines.length; i++) {
        newLines.push(lines[i]);
      }
      
      content = newLines.join('\n');
      fixed = true;
    }
    
    // Remove duplicate imports
    const importLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        const importKey = lines[i].trim();
        if (!seenImports.has(importKey)) {
          importLines.push(i);
          seenImports.add(importKey);
        }
      }
    }
    
    if (importLines.length > 0) {
      const newLines = [];
      let lastImportLine = importLines[importLines.length - 1];
      
      for (let i = 0; i < lines.length; i++) {
        if (i <= lastImportLine) {
          if (lines[i].startsWith('import ') && importLines.includes(i)) {
            newLines.push(lines[i]);
          } else if (!lines[i].startsWith('import ')) {
            newLines.push(lines[i]);
          }
        } else {
          newLines.push(lines[i]);
        }
      }
      
      content = newLines.join('\n');
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function findFilesWithErrors(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

function main() {
  console.log('🔍 Fixing syntax errors in files...');
  
  const files = findFilesWithErrors('./app');
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Failed: ${files.length - fixedCount} files`);
  
  console.log('\n🎉 Syntax error fix completed!');
}

main();

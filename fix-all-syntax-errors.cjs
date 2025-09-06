#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findFilesWithSyntaxErrors() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.next', '.git', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('/workspace');
  return files;
}

function fixSyntaxErrorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with trailing commas
    const importFix = content.replace(/import\s+([^;]+),\s*$/gm, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;
    }
    
    // Fix export statements with trailing commas
    const exportFix = content.replace(/export\s+([^;]+),\s*$/gm, 'export $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix type definitions with missing commas
    const typeFix = content.replace(/export type (\w+) = \{/g, 'export type $1 = {');
    if (typeFix !== content) {
      content = typeFix;
      modified = true;
    }
    
    // Fix missing semicolons after statements
    const semicolonFix = content.replace(/([^;}])\s*$/gm, '$1;');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }
    
    // Fix specific syntax errors
    const fixes = [
      // Fix missing comma in type definitions
      { pattern: /Omit<Toast 'id'>/g, replacement: "Omit<Toast, 'id'>" },
      // Fix missing semicolons in imports
      { pattern: /import\s+([^;]+),\s*$/gm, replacement: 'import $1;' },
      // Fix missing semicolons in exports
      { pattern: /export\s+([^;]+),\s*$/gm, replacement: 'export $1;' },
      // Fix missing semicolons after statements
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

function main() {
  console.log('🔧 Starting comprehensive syntax error fix...');
  
  const files = findFilesWithSyntaxErrors();
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixSyntaxErrorsInFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed syntax errors in ${fixedCount} files`);
}

main();
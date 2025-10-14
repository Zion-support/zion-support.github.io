#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import syntax issues
function fixImportSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals in import statements
    const importRegex = /import\s+{[^}]*}\s+from\s+'[^']*;([^']*)/g;
    content = content.replace(importRegex, (match, afterSemicolon) => {
      // Find the actual end of the import statement
      const lines = match.split('\n');
      if (lines.length > 1) {
        // This is a multi-line import that got corrupted
        const firstLine = lines[0];
        const lastLine = lines[lines.length - 1];
        
        // Reconstruct the import statement
        const importMatch = firstLine.match(/import\s+{[^}]*}\s+from\s+'([^']*)/);
        if (importMatch) {
          const moduleName = importMatch[1];
          return `import { ${firstLine.match(/{([^}]*)}/)[1]} } from '${moduleName}';`;
        }
      }
      return match;
    });
    
    // Fix missing closing quotes in import statements
    content = content.replace(/from\s+'([^']*);([^']*)/g, (match, beforeSemicolon, afterSemicolon) => {
      if (afterSemicolon.trim()) {
        return `from '${beforeSemicolon}';`;
      }
      return match;
    });
    
    // Fix missing newlines after import statements
    content = content.replace(/from\s+'[^']*';([a-zA-Z])/g, (match, nextChar) => {
      return match.replace(nextChar, '\n' + nextChar);
    });
    
    // Fix missing closing quotes and add newlines
    content = content.replace(/from\s+'([^']*);([a-zA-Z])/g, (match, moduleName, nextChar) => {
      return `from '${moduleName}';\n${nextChar}`;
    });
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with import syntax issues...');
const sourceFiles = findSourceFiles('./app');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixImportSyntax(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Import syntax issues fixed! You can now run the build.');
} else {
  console.log('\n✨ No import syntax issues found or all issues were already resolved.');
}
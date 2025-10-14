#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to remove stray brackets
function removeStrayBrackets(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove stray ]; statements that are not part of arrays
    const strayBracketRegex = /^\s*\]\s*;\s*$/gm;
    if (strayBracketRegex.test(content)) {
      content = content.replace(strayBracketRegex, '');
      modified = true;
    }

    // Remove stray ]; statements that appear after imports
    const strayBracketAfterImportRegex = /from\s+['"][^'"]*['"]\s*;\s*\n\s*\]\s*;\s*\n/g;
    if (strayBracketAfterImportRegex.test(content)) {
      content = content.replace(strayBracketAfterImportRegex, "from '$1';\n");
      modified = true;
    }

    // Remove stray ]; statements that appear after function declarations
    const strayBracketAfterFunctionRegex = /\)\s*{\s*\n\s*\]\s*;\s*\n/g;
    if (strayBracketAfterFunctionRegex.test(content)) {
      content = content.replace(strayBracketAfterFunctionRegex, ') {\n');
      modified = true;
    }

    // Remove stray ]; statements that appear after JSX
    const strayBracketAfterJSXRegex = /\)\s*;\s*\n\s*\]\s*;\s*\n/g;
    if (strayBracketAfterJSXRegex.test(content)) {
      content = content.replace(strayBracketAfterJSXRegex, ');\n');
      modified = true;
    }

    // Remove stray ]; statements that appear after variable declarations
    const strayBracketAfterVarRegex = /;\s*\n\s*\]\s*;\s*\n/g;
    if (strayBracketAfterVarRegex.test(content)) {
      content = content.replace(strayBracketAfterVarRegex, ';\n');
      modified = true;
    }

    // Clean up multiple empty lines
    const multipleEmptyLinesRegex = /\n\s*\n\s*\n/g;
    if (multipleEmptyLinesRegex.test(content)) {
      content = content.replace(multipleEmptyLinesRegex, '\n\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
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
  const sourceFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        sourceFiles.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return sourceFiles;
}

// Main execution
console.log('🔍 Scanning for source files...');
const sourceFiles = findSourceFiles(process.cwd());

console.log(`📋 Found ${sourceFiles.length} source files`);

console.log('\n🔧 Removing stray brackets...');
let fixedCount = 0;

for (const file of sourceFiles) {
  if (removeStrayBrackets(file)) {
    fixedCount++;
    console.log(`✅ Fixed: ${file}`);
  }
}

console.log(`\n✅ Fixed ${fixedCount} out of ${sourceFiles.length} files`);

// Try to build after fixing errors
console.log('\n🏗️  Attempting to build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build still failing. Checking for specific errors...');
  
  // Try to identify remaining issues
  try {
    execSync('npm run build 2>&1 | head -20', { stdio: 'inherit' });
  } catch (e) {
    console.log('Could not get detailed error information');
  }
}
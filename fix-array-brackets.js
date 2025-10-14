#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix missing array brackets
function fixArrayBrackets(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing brackets before const declarations
    const missingBracketRegex = /(\s+)\n(\s*)const\s+(\w+)\s*=\s*\[/g;
    if (missingBracketRegex.test(content)) {
      content = content.replace(missingBracketRegex, '$1\n  ];\n\n$2const $3 = [');
      modified = true;
    }

    // Fix missing closing brackets before function declarations
    const missingBracketBeforeFunctionRegex = /(\s+)\n(\s*)(const|function)\s+(\w+)/g;
    if (missingBracketBeforeFunctionRegex.test(content)) {
      content = content.replace(missingBracketBeforeFunctionRegex, '$1\n  ];\n\n$2$3 $4');
      modified = true;
    }

    // Fix missing closing brackets before return statements
    const missingBracketBeforeReturnRegex = /(\s+)\n(\s*)return\s+/g;
    if (missingBracketBeforeReturnRegex.test(content)) {
      content = content.replace(missingBracketBeforeReturnRegex, '$1\n  ];\n\n$2return ');
      modified = true;
    }

    // Fix missing closing brackets before JSX
    const missingBracketBeforeJSXRegex = /(\s+)\n(\s*)<\w+/g;
    if (missingBracketBeforeJSXRegex.test(content)) {
      content = content.replace(missingBracketBeforeJSXRegex, '$1\n  ];\n\n$2<$3');
      modified = true;
    }

    // Fix missing closing brackets before useEffect
    const missingBracketBeforeUseEffectRegex = /(\s+)\n(\s*)useEffect\s*\(/g;
    if (missingBracketBeforeUseEffectRegex.test(content)) {
      content = content.replace(missingBracketBeforeUseEffectRegex, '$1\n  ];\n\n$2useEffect(');
      modified = true;
    }

    // Fix missing closing brackets before other hooks
    const missingBracketBeforeHooksRegex = /(\s+)\n(\s*)(useState|useCallback|useMemo|useRef)\s*\(/g;
    if (missingBracketBeforeHooksRegex.test(content)) {
      content = content.replace(missingBracketBeforeHooksRegex, '$1\n  ];\n\n$2$3(');
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

console.log('\n🔧 Fixing missing array brackets...');
let fixedCount = 0;

for (const file of sourceFiles) {
  if (fixArrayBrackets(file)) {
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
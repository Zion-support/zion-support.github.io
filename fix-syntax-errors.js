#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing quotes in import statements
    const importQuoteRegex = /from\s+['"]([^'"]*?);$/gm;
    if (importQuoteRegex.test(content)) {
      content = content.replace(importQuoteRegex, "from '$1';");
      modified = true;
    }

    // Fix missing closing quotes in import statements (double quotes)
    const importQuoteRegex2 = /from\s+['"]([^'"]*?);$/gm;
    if (importQuoteRegex2.test(content)) {
      content = content.replace(importQuoteRegex2, 'from "$1";');
      modified = true;
    }

    // Fix extra semicolons in object properties
    const extraSemicolonRegex = /(['"]\s*),(\s*['"])/g;
    if (extraSemicolonRegex.test(content)) {
      content = content.replace(extraSemicolonRegex, '$1,$2');
      modified = true;
    }

    // Fix missing closing quotes in object properties
    const missingQuoteRegex = /(['"]\s*),(\s*['"])/g;
    if (missingQuoteRegex.test(content)) {
      content = content.replace(missingQuoteRegex, '$1,$2');
      modified = true;
    }

    // Fix JSX syntax errors
    const jsxErrorRegex = /}\s*\]\s*;/g;
    if (jsxErrorRegex.test(content)) {
      content = content.replace(jsxErrorRegex, '}');
      modified = true;
    }

    // Fix malformed function declarations
    const functionErrorRegex = /export default function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<>\s*$/gm;
    if (functionErrorRegex.test(content)) {
      content = content.replace(functionErrorRegex, 'const $1: React.FC = () => {\n  return (\n    <>');
      modified = true;
    }

    // Fix missing closing braces in JSX
    const missingBraceRegex = /}\s*\]\s*;\s*$/gm;
    if (missingBraceRegex.test(content)) {
      content = content.replace(missingBraceRegex, '}');
      modified = true;
    }

    // Fix duplicate import statements
    const lines = content.split('\n');
    const seenImports = new Set();
    const filteredLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });

    if (filteredLines.length !== lines.length) {
      content = filteredLines.join('\n');
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

console.log('\n🔧 Fixing syntax errors...');
let fixedCount = 0;

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
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
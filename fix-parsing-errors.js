#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing parsing errors...');

// Function to fix specific parsing errors
function fixParsingError(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove extra closing braces
    if (content.includes('displayName') && content.includes('}\n\nexport default')) {
      content = content.replace(/\.displayName = '[^']*';\n\n\}/g, '.displayName = \'\';');
      modified = true;
    }

    // Fix 2: Fix malformed function structure
    if (content.includes('function Page') && content.includes('displayName')) {
      // Remove displayName line and extra brace
      content = content.replace(/\n\w+\.displayName = '[^']*';\n\n\}/g, '');
      modified = true;
    }

    // Fix 3: Fix 'use client' placement
    if (content.includes("'use client'") && content.includes("import React")) {
      content = content.replace(/'use client';\nimport React from 'react';\n/g, "import React from 'react';\n'use client';\n");
      modified = true;
    }

    // Fix 4: Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed parsing error: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`📁 Processing ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixParsingError(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
  
  // Run linter again to check remaining issues
  console.log('\n🔍 Running linter to check remaining issues...');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    console.log('✅ All linting issues resolved!');
  } catch (error) {
    console.log('⚠️  Some linting issues remain, but many have been fixed.');
  }
  
} catch (error) {
  console.error('❌ Error during fix process:', error.message);
  process.exit(1);
}
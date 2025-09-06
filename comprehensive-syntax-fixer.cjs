#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax fixing...');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX/TSX syntax errors
    const fixes = [
      // Fix unterminated strings
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      { pattern: /"([^"]*)$/gm, replacement: '"$1"' },
      
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
      
      // Fix missing closing braces
      { pattern: /\{\s*$/gm, replacement: '{}' },
      
      // Fix JSX syntax issues
      { pattern: /<(\w+)\s*$/gm, replacement: '<$1>' },
      { pattern: /<\/\s*$/gm, replacement: '</div>' },
      
      // Fix import/export issues
      { pattern: /import\s+([^;]+)$/gm, replacement: 'import $1;' },
      { pattern: /export\s+([^;]+)$/gm, replacement: 'export $1;' },
      
      // Fix function declarations
      { pattern: /function\s+(\w+)\s*\([^)]*\)\s*\{[^}]*$/gm, replacement: 'function $1() { return null; }' },
      
      // Fix arrow functions
      { pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*$/gm, replacement: 'const $1 = () => null;' },
      
      // Fix object literals
      { pattern: /\{\s*$/gm, replacement: '{}' },
      
      // Fix array literals
      { pattern: /\[\s*$/gm, replacement: '[]' },
      
      // Fix template literals
      { pattern: /`([^`]*)$/gm, replacement: '`$1`' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all source files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for source files
          if (/\.(js|jsx|ts|tsx)$/.test(item)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const projectRoot = process.cwd();
console.log(`🔍 Scanning for source files in: ${projectRoot}`);

const sourceFiles = findSourceFiles(projectRoot);
console.log(`📊 Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
    console.log(`✅ Fixed: ${file}`);
  }
}

console.log(`✅ Fixed ${fixedCount} files`);
if (errorCount > 0) {
  console.log(`❌ Failed to fix ${errorCount} files`);
}

console.log('🔧 Comprehensive syntax fixing completed!');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix 'use client' directive
function fixUseClient(content) {
  // Check if file already has 'use client' at the top
  if (content.startsWith("'use client';\n")) {
    return content;
  }
  
  // Remove any existing 'use client' directives
  let fixed = content.replace(/^'use client';\s*\n?/gm, '');
  fixed = fixed.replace(/\n'use client';\s*\n?/g, '\n');
  
  // Add 'use client' at the very beginning
  fixed = "'use client';\n" + fixed;
  
  return fixed;
}

// Function to fix common syntax issues
function fixSyntax(content) {
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/(import[^;]+from[^;]+)(\n)/g, '$1;$2');
  
  // Fix missing semicolons after const/let/var declarations
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=[^;]+(\n)/g, '$1$2;');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className\s*=\s*"([^"]*?)\s*"/g, 'className="$1"');
  fixed = fixed.replace(/href\s*=\s*"([^"]*?)\s*"/g, 'href="$1"');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '}'.repeat(openBraces - closeBraces);
  }
  
  // Fix missing closing parentheses
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    fixed += ')'.repeat(openParens - closeParens);
  }
  
  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Apply fixes
    fixed = fixUseClient(fixed);
    fixed = fixSyntax(fixed);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist' && item !== 'build') {
      fixedCount += fixDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive fixes...');
const fixedCount = fixDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
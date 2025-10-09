#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  // Fix duplicate imports in the same import statement
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g,
    (match, imports, source) => {
      // Split by comma and clean up
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
      
      // Remove duplicates while preserving order
      const uniqueImports = [...new Set(importList)];
      
      return `import { ${uniqueImports.join(', ')} } from '${source}';`;
    }
  );
  
  return content;
}

// Function to fix malformed object literals
function fixMalformedObjects(content) {
  // Fix objects that start with comma
  content = content.replace(/\{\s*,/g, '{');
  
  // Fix missing closing braces in object literals
  content = content.replace(/\{\s*,\s*([^}]+?)\s*$/gm, (match, content) => {
    // If the line ends with a comma and there's no closing brace, add it
    if (!content.includes('}')) {
      return `{${content.trim()}}`;
    }
    return match;
  });
  
  return content;
}

// Function to fix duplicate return statements
function fixDuplicateReturns(content) {
  // Find duplicate return statements in the same function
  const lines = content.split('\n');
  let inFunction = false;
  let returnCount = 0;
  let fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if we're entering a function
    if (line.includes('const') && line.includes('= () =>') || 
        line.includes('function') || 
        line.includes('React.FC')) {
      inFunction = true;
      returnCount = 0;
    }
    
    // Check if we're exiting a function
    if (inFunction && (line.includes('};') || line.includes('}'))) {
      inFunction = false;
      returnCount = 0;
    }
    
    // Count return statements
    if (inFunction && line.trim().startsWith('return')) {
      returnCount++;
      if (returnCount > 1) {
        // Skip duplicate return statements
        continue;
      }
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix malformed JSX
function fixMalformedJSX(content) {
  // Fix JSX that's not properly formatted
  content = content.replace(/return\s*\(\s*<div[^>]*>([^<]+)<\/div>\s*\)\s*;\s*return\s*\(/g, 'return (');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/gm, (match, word) => {
    if (word && !word.endsWith(';') && !word.endsWith('}') && !word.endsWith(')') && !word.endsWith(']')) {
      return word + ';';
    }
    return match;
  });
  
  return content;
}

// Function to fix specific patterns
function fixSpecificPatterns(content) {
  // Fix the specific pattern where there are duplicate imports and malformed objects
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];\s*'use client';\s*import\s*React[^;]*;/g,
    (match, imports, source) => {
      const importList = imports.split(',').map(imp => imp.trim()).filter(imp => imp);
      const uniqueImports = [...new Set(importList)];
      return `import React from 'react';\nimport { ${uniqueImports.join(', ')} } from '${source}';`;
    }
  );
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixDuplicateImports(content);
    content = fixMalformedObjects(content);
    content = fixDuplicateReturns(content);
    content = fixMalformedJSX(content);
    content = fixSpecificPatterns(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in src directory
  const files = await glob('src/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);
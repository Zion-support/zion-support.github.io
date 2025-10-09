#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific syntax issues
function fixSpecificIssues(content) {
  // Fix semicolons in wrong places (after comments)
  content = content.replace(/\/\/[^;]+;\s*$/gm, (match) => match.replace(/;$/, ''));
  
  // Fix semicolons in wrong places (after const declarations)
  content = content.replace(/const\s+[^=]+=\s*[^;]+;\s*$/gm, (match) => match.replace(/;$/, ''));
  
  // Fix semicolons in wrong places (after return statements)
  content = content.replace(/return\s*\([^)]+\);\s*$/gm, (match) => match.replace(/;$/, ''));
  
  // Fix semicolons in wrong places (after JSX)
  content = content.replace(/<[^>]+>;\s*$/gm, (match) => match.replace(/;$/, ''));
  
  // Fix semicolons in wrong places (after object properties)
  content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*'[^']*';\s*$/gm, (match) => match.replace(/;$/, ','));
  
  // Fix semicolons in wrong places (after array elements)
  content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*'[^']*';\s*$/gm, (match) => match.replace(/;$/, ','));
  
  // Fix malformed object literals
  content = content.replace(/{\s*;\s*$/gm, '{');
  
  // Fix malformed array literals
  content = content.replace(/\[\s*;\s*$/gm, '[');
  
  // Fix missing closing braces in object literals
  content = content.replace(/{\s*([^}]+)\s*;\s*$/gm, (match, p1) => {
    if (p1.trim().endsWith(',')) {
      return `{\n    ${p1.trim().slice(0, -1)}\n  }`;
    }
    return `{\n    ${p1.trim()}\n  }`;
  });
  
  // Fix missing closing braces in array literals
  content = content.replace(/\[\s*([^\]]+)\s*;\s*$/gm, (match, p1) => {
    if (p1.trim().endsWith(',')) {
      return `[\n    ${p1.trim().slice(0, -1)}\n  ]`;
    }
    return `[\n    ${p1.trim()}\n  ]`;
  });
  
  // Fix duplicate closing braces
  content = content.replace(/\}\s*;\s*$/gm, '}');
  
  // Fix missing commas in object literals
  content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*):\s*'[^']*'\s*$/gm, '$1: \'$2\',');
  
  // Fix missing commas in array literals
  content = content.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\s*$/gm, '$1,');
  
  return content;
}

// Function to fix import statements
function fixImportStatements(content) {
  // Fix malformed import statements
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)';\s*}/g, "import { $1 } from '$2';");
  
  // Fix missing closing braces in imports
  content = content.replace(/import\s*{\s*([^}]+)\s*from\s*'([^']+)';\s*}/g, "import { $1 } from '$2';");
  
  return content;
}

// Function to fix JSX syntax
function fixJSXSyntax(content) {
  // Fix semicolons in JSX
  content = content.replace(/<([^>]+)>;\s*$/gm, '<$1>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\s*;\s*$/gm, 'className="$1"');
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixImportStatements(content);
    content = fixJSXSyntax(content);
    content = fixSpecificIssues(content);
    
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

// Get all TypeScript/TSX files in src directory
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
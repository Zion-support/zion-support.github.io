#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements with duplicate names
function fixImportStatements(content) {
  // Fix patterns like: TestTube, Target, Settings, CheckCircle ,  TestTube,  Target,  Settings from
  const duplicateImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)';/g;
  content = content.replace(duplicateImportRegex, (match, imports, module) => {
    // Remove duplicates and clean up
    const importList = imports.split(',').map(imp => imp.trim()).filter((imp, index, arr) => arr.indexOf(imp) === index);
    return `import { ${importList.join(', ')} } from '${module}';`;
  });
  
  return content;
}

// Function to fix malformed object literals
function fixObjectLiterals(content) {
  // Fix patterns like: { icon: TestTube, ] title: '$2', }
  content = content.replace(/{\s*([^}]+)\s*\]\s*([^}]+)\s*}/g, (match, p1, p2) => {
    const cleanP1 = p1.replace(/,\s*$/, '');
    const cleanP2 = p2.replace(/^\s*,/, '').replace(/,\s*$/, '');
    return `{\n    ${cleanP1},\n    ${cleanP2}\n  }`;
  });
  
  // Fix patterns like: { name: 'value', } with missing properties
  content = content.replace(/{\s*([^}]+)\s*}\s*$/gm, (match, p1) => {
    const lines = p1.split(',').map(line => line.trim()).filter(line => line);
    if (lines.length > 0) {
      return `{\n    ${lines.join(',\n    ')}\n  }`;
    }
    return match;
  });
  
  return content;
}

// Function to fix malformed array literals
function fixArrayLiterals(content) {
  // Fix patterns like: [ { name: 'value', } ]
  content = content.replace(/\[\s*{\s*([^}]+)\s*}\s*\]/g, (match, p1) => {
    const lines = p1.split(',').map(line => line.trim()).filter(line => line);
    if (lines.length > 0) {
      return `[\n    {\n      ${lines.join(',\n      ')}\n    }\n  ]`;
    }
    return match;
  });
  
  return content;
}

// Function to fix string interpolation issues
function fixStringInterpolation(content) {
  // Fix patterns like: '$2' to proper strings
  content = content.replace(/'\$2'/g, "'value'");
  content = content.replace(/"\$2"/g, '"value"');
  
  return content;
}

// Function to fix semicolon issues
function fixSemicolons(content) {
  // Remove semicolons in wrong places
  content = content.replace(/;\s*$/gm, '');
  
  // Add semicolons where needed
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  return content;
}

// Function to fix JSX syntax
function fixJSXSyntax(content) {
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\s*;\s*$/gm, 'className="$1"');
  
  // Fix malformed JSX elements
  content = content.replace(/<([^>]+)>\s*;\s*$/gm, '<$1>');
  
  return content;
}

// Main function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixImportStatements(content);
    content = fixObjectLiterals(content);
    content = fixArrayLiterals(content);
    content = fixStringInterpolation(content);
    content = fixSemicolons(content);
    content = fixJSXSyntax(content);
    
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
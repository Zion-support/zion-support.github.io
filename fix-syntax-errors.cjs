#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix duplicate imports
function fixDuplicateImports(content) {
  // Fix patterns like: Brain, Shield, Target, Users ,  Brain,  Shield,  Target,  Users
  const duplicateImportRegex = /([A-Za-z][A-Za-z0-9]*),\s*([A-Za-z][A-Za-z0-9]*),\s*([A-Za-z][A-Za-z0-9]*),\s*([A-Za-z][A-Za-z0-9]*)\s*,\s*\1,\s*\2,\s*\3,\s*\4/g;
  content = content.replace(duplicateImportRegex, '$1, $2, $3, $4');
  
  // Fix patterns with more complex duplicates
  const complexDuplicateRegex = /([A-Za-z][A-Za-z0-9]*\s+as\s+[A-Za-z][A-Za-z0-9]*,\s*)+([A-Za-z][A-Za-z0-9]*\s+as\s+[A-Za-z][A-Za-z0-9]*)\s*,\s*\1/g;
  content = content.replace(complexDuplicateRegex, (match, p1, p2) => {
    return p1 + p2;
  });
  
  // Fix simple duplicates at the end
  const simpleDuplicateRegex = /([A-Za-z][A-Za-z0-9]*),\s*\1\s*from/g;
  content = content.replace(simpleDuplicateRegex, '$1 from');
  
  return content;
}

// Function to fix malformed object syntax
function fixMalformedObjects(content) {
  // Fix {, patterns
  content = content.replace(/{\s*,/g, '{');
  
  // Fix missing closing braces in objects
  content = content.replace(/({\s*[^}]*),\s*$/gm, '$1\n  }');
  
  return content;
}

// Function to fix duplicate function declarations
function fixDuplicateFunctions(content) {
  // Remove duplicate function declarations
  const lines = content.split('\n');
  const seenFunctions = new Set();
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const functionMatch = line.match(/const\s+([A-Za-z][A-Za-z0-9]*):\s*React\.FC/);
    
    if (functionMatch) {
      const functionName = functionMatch[1];
      if (seenFunctions.has(functionName)) {
        // Skip duplicate function declarations
        continue;
      }
      seenFunctions.add(functionName);
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix duplicate return statements
function fixDuplicateReturns(content) {
  // Find and fix duplicate return statements
  const lines = content.split('\n');
  let inFunction = false;
  let returnCount = 0;
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('const') && line.includes(': React.FC')) {
      inFunction = true;
      returnCount = 0;
    }
    
    if (line.includes('};') && inFunction) {
      inFunction = false;
      returnCount = 0;
    }
    
    if (line.trim().startsWith('return') && inFunction) {
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

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons
  content = content.replace(/([^;}])\s*$/gm, '$1;');
  
  // Fix missing closing braces
  content = content.replace(/({\s*[^}]*)\s*$/gm, '$1\n  }');
  
  // Fix malformed JSX
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  
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
    content = fixDuplicateFunctions(content);
    content = fixDuplicateReturns(content);
    content = fixSyntaxErrors(content);
    
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
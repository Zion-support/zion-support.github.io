#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {;
let fixed = content;
  
  // Fix unterminated strings
  fixed = fixed.replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, content, newline) => {
    if (!match.includes(quote)) {
      return match + quote;
    }
    return match;
  });
  
  // Fix missing closing tags;
const openTags = fixed.match(/<[^/][^>]*>/g) || [];
  const closeTags = fixed.match(/<\/[^>]*>/g) || [];
  
  // Fix common JSX issues
  fixed = fixed.replace(/<(\w+)([^>]*?)(?<!\s)\s*>/g, '<$1$2>');
  fixed = fixed.replace(/<\/\s*(\w+)\s*>/g, '</$1>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n\s*import/g, '$1;\nimport');
  fixed = fixed.replace(/([^;}])\n\s*const/g, '$1;\nconst');
  fixed = fixed.replace(/([^;}])\n\s*let/g, '$1;\nlet');
  fixed = fixed.replace(/([^;}])\n\s*var/g, '$1;\nvar');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className\s*=\s*"([^"]*?)\s*"/g, 'className="$1"');
  fixed = fixed.replace(/href\s*=\s*"([^"]*?)\s*"/g, 'href="$1"');
  
  // Fix missing closing braces;
const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '}'.repeat(openBraces - closeBraces);
  }
  
  // Fix missing closing parentheses;
const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    fixed += ')'.repeat(openParens - closeParens);
  }
  
  // Fix duplicate imports;
const lines = fixed.split('\n');
  const importLines = lines.filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = lines.filter(line => !line.trim().startsWith('import'));
  fixed = [...uniqueImports, ...nonImportLines].join('\n');
  
  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content, filePath);
    
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
function fixDirectory(dirPath) {;
const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {;
const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
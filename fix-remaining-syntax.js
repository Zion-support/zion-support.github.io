#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax issues
function fixRemainingSyntax(content) {
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*$/gm, '<>');
  content = content.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
  content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
  content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>');
  
  // Fix JSX expressions that need parent elements
  content = content.replace(/return\s*\(\s*<>\s*<([^>]+)>\s*<([^>]+)>\s*<\/>\s*\)/gm, 'return (\n    <>\n      <$1>\n        <$2>\n        </$2>\n      </$1>\n    </>');
  
  // Fix merge conflict markers
  content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  
  // Fix property assignment errors
  content = content.replace(/^\s*(\w+)\s*=\s*\{([^}]+)\}\s*$/gm, '  $1: $2,');
  
  // Fix missing semicolons in function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]+)\}\s*$/gm, 'const $1 = ($2) => {\n    $3\n  };');
  
  // Fix malformed import statements
  content = content.replace(/import\s*\{([^}]+)\}\}from\s*['"]([^'"]+)['"]/g, "import {$1} from '$2'");
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+)\s*(\w+)\s*(\w+)/g, '$1, $2, $3');
  
  // Fix JSX attribute syntax
  content = content.replace(/className\s*=\s*\{([^}]+)\}\s*([^>]+)>/g, 'className={$1} $2>');
  
  // Fix missing closing parentheses
  content = content.replace(/return\s*\(\s*<([^>]+)>\s*([^<]+)\s*<\/\1>\s*$/gm, 'return (\n    <$1>\n      $2\n    </$1>\n  );');
  
  // Fix malformed object literals
  content = content.replace(/\{([^}]*)\}\s*([^,}])/g, '{$1},\n    $2');
  
  return content;
}

// Function to fix specific patterns
function fixSpecificPatterns(content) {
  // Fix common JSX structure issues
  const lines = content.split('\n');
  const fixedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix missing commas in object properties
    if (line.includes(':') && !line.includes(',') && !line.includes('{') && !line.includes('}')) {
      line = line.replace(/(\w+):\s*([^,}]+)$/, '$1: $2,');
    }
    
    // Fix malformed JSX fragments
    if (line.trim() === '<>' && i < lines.length - 1) {
      // Keep as is
    } else if (line.trim() === '</>' && i > 0) {
      // Keep as is
    }
    
    // Fix missing closing tags
    if (line.includes('<div') && !line.includes('</div>') && !line.includes('/>')) {
      // This will be handled by the closing tag fix
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixRemainingSyntax(content);
    content = fixSpecificPatterns(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixRemainingSyntax, fixSpecificPatterns, processFile };
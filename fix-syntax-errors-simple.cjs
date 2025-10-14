#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix merge conflict markers
  if (fixed.includes('<<<<<<< HEAD') || fixed.includes('=======') || fixed.includes('>>>>>>>')) {
    fixed = fixed.replace(/<<<<<<< HEAD\n?/g, '');
    fixed = fixed.replace(/=======\n?/g, '');
    fixed = fixed.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    changes++;
  }

  // Fix unterminated string literals
  if (fixed.includes('"use client";') && !fixed.includes('"use client";\n')) {
    fixed = fixed.replace('"use client";', '"use client";\n');
    changes++;
  }

  // Fix missing closing tags for common HTML elements
  const tagPairs = [
    ['<h1>', '</h1>'],
    ['<p>', '</p>'],
    ['<div>', '</div>'],
    ['<span>', '</span>'],
    ['<a>', '</a>'],
    ['<li>', '</li>'],
    ['<section>', '</section>'],
    ['<svg>', '</svg>']
  ];

  for (const [openTag, closeTag] of tagPairs) {
    const openCount = (fixed.match(new RegExp(openTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const closeCount = (fixed.match(new RegExp(closeTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    
    if (openCount > closeCount) {
      const missing = openCount - closeCount;
      for (let i = 0; i < missing; i++) {
        fixed += `\n${closeTag}`;
        changes++;
      }
    }
  }

  // Fix JSX fragment issues
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    fixed = fixed.replace(/<>/g, '<div>').replace(/<\/>/g, '</div>');
    changes++;
  }

  // Fix missing semicolons in imports
  fixed = fixed.replace(/(import\s+.*?from\s+['"][^'"]+['"])(?!\s*;)/g, '$1;');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\w+\([^)]*)\n(\s*\))/g, '$1$2');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missing = openBraces - closeBraces;
    for (let i = 0; i < missing; i++) {
      fixed += '\n}';
      changes++;
    }
  }

  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+)\s*=\s*{\s*([^}]+)\s*}/g, '$1={$2}');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/(\w+:\s*[^,}]+)(\s*\n\s*\w+:\s*)/g, '$1,$2');

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixSyntaxErrors(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`Fixed ${result.changes} issues in ${filePath}`);
      return result.changes;
    }
    
    return 0;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Function to find all relevant files
function findFiles() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules' && item !== 'dist' && item !== '.next') {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('.');
  return files;
}

// Main function
function main() {
  console.log('Starting comprehensive syntax fix...');
  
  const files = findFiles();
  let totalChanges = 0;
  let filesProcessed = 0;
  
  files.forEach(file => {
    const changes = processFile(file);
    totalChanges += changes;
    filesProcessed++;
  });
  
  console.log(`\nCompleted! Processed ${filesProcessed} files with ${totalChanges} total fixes.`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };
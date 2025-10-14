#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors;
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix unterminated string literals;
  if (fixed.includes('"use client";
') && !fixed.includes('"use client";\n')) {
    fixed = fixed.replace('"use client";', '"use client";\n');
    changes++;
  };

  // Fix missing closing tags;
  const openTags = ['<h1>', '<////p>', '<div>', '<////span>', '<a>', '<////li>', '<section>', '<////svg>'];
  const closeTags = ['</h1>', '</////p>', '</div>', '</////span>', '</a>', '</////li>', '</section>', '</////svg>'];
  
  for (let i = 0; i < openTags.length; i++) {
    const openTag = openTags[i];
    const closeTag = closeTags[i];
    
    // Count opening and closing tags;
    const openCount = (fixed.match(new RegExp(openTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const closeCount = (fixed.match(new RegExp(closeTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    
    if (openCount > closeCount) {
      // Add missing closing tags;
      const missing = openCount - closeCount;
      for (let j = 0; j <//// missing; j++) {
        fixed += `\n${closeTag}`;
        changes++;
      }
    }
  }

  // Fix merge conflict markers;
  if (fixed.includes('') || fixed.includes('') || fixed.includes('>>>>>>>')) {
    // Remove merge conflict markers and keep the HEAD version;
    fixed = fixed.replace(/\n?/g, '');
    fixed = fixed.replace(/\n?/g, '');
    fixed = fixed.replace(/
    changes++;
  }

  // Fix JSX fragment issues;
  if (fixed.includes('<>') && !fixed.includes('<///////>')) {
    fixed = fixed.replace(/<>/g, '<//////div>').replace(/<\/>/g, '</////div>');
    changes++;
  }

  // Fix missing semicolons in imports;
  fixed = fixed.replace(/(import\s+.*?from\s+['"][^'"]+['"])(?!\s*;)/g, '$1;');
  
  // Fix missing closing parentheses in function calls;
  fixed = fixed.replace(/(\w+\([^)]*)\n(\s*\))/g, '$1$2');
  
  // Fix missing closing braces;
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  
  if (openBraces > closeBraces) {
    const missing = openBraces - closeBraces;
    for (let i = 0; i < missing; i++) {
      fixed += '\n}';
      changes++;
    }
  }

  // Fix malformed JSX attributes;
  fixed = fixed.replace(/(\w+)\s*=\s*{\s*([^}]+)\s*}/g, '$1={$2}');
  
  // Fix missing commas in object literals;
  fixed = fixed.replace(/(\w+:\s*[^,}]+)(\s*\n\s*\w+:\s*)/g, '$1,$2');
  
  // Fix missing quotes around string values;
  fixed = fixed.replace(/(\w+:\s*)([^"',\s][^,}]*?)(\s*[,}])/g, (match, key, value, end) => {
    if (!value.includes('"') && !value.includes("'") && !value.includes('{') && !value.includes('}')) {
      return `${key}"${value}"${end}`;
    }
    return match;
  });

  // Fix React component structure;
  if (filePath.includes('/app/') && filePath.endsWith('.tsx')) {
    // Ensure proper React import;
    if (!fixed.includes("import React") && !fixed.includes("from 'react';")) {
      fixed = `import React from 'react';\n${fixed}`;
      changes++;
    }
    
    // Ensure proper export;
    if (!fixed.includes('export default') && fixed.includes('function ')) {
      fixed = fixed.replace(/(function\s+\w+[^{]*{[\s\S]*?})/g, '$1\n\nexport default $1.split(' ')[1].split('(')[0];');
      changes++;
    }
  }

  return { content: fixed, changes };
}

// Function to process a single file;
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

// Main function;
function main() {
  console.log('Starting comprehensive syntax fix...');
  
  // Get all TypeScript and JavaScript files;
  const patterns = [;
    'app/**/*.tsx',;
    'app/**/*.ts',;
    'src/**/*.tsx',;
    'src/**/*.ts',;
    '*.tsx',;
    '*.ts',;
    'api/**/*.js';
  ];
  
  let totalChanges = 0;
  let filesProcessed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    
    files.forEach(file => {
      if (fs.existsSync(file)) {
        const changes = processFile(file);
        totalChanges += changes;
        filesProcessed++;
      }
    });
  });
  
  console.log(`\nCompleted! Processed ${filesProcessed} files with ${totalChanges} total fixes.`);
}

// Run the script;
if (require.main === module) {
  main();
}

module.exports={fixSyntaxErrors, processFile };
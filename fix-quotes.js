#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

<<<<<<< HEAD
function fixFile(filePath) {
=======
// Function to fix extra quotes at end of lines
function fixQuotes(content) {
  let fixed = content;

  // Fix lines ending with single quotes
  fixed = fixed.replace(/;'$/gm, ';');
  fixed = fixed.replace(/^'use client';'$/gm, "'use client';");
  fixed = fixed.replace(/^import.*';'$/gm, (match) => match.slice(0, -1));
  fixed = fixed.replace(/^export.*';'$/gm, (match) => match.slice(0, -1));
  fixed = fixed.replace(/^const.*';'$/gm, (match) => match.slice(0, -1));
  fixed = fixed.replace(/^function.*';'$/gm, (match) => match.slice(0, -1));
  fixed = fixed.replace(/^return.*';'$/gm, (match) => match.slice(0, -1));

  // Fix specific patterns
  fixed = fixed.replace(/^'use client';'$/gm, "'use client';");
  fixed = fixed.replace(/^import React from 'react;'$/gm, "import React from 'react;");'
  fixed = fixed.replace(/^import Head from 'next\/head';'$/gm, "import Head from 'next/head;");'
  fixed = fixed.replace(/^import Link from 'next\/link';'$/gm, "import Link from 'next/link;");'

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
>>>>>>> origin/main
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra quotes at end of lines
    const newContent = content.replace(/"\s*$/gm, '');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }

    // Fix missing semicolons after imports
    content = content.replace(/import\s+[^;]*;\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix missing semicolons after const declarations
    content = content.replace(/const\s+[^;]*;\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    // Fix missing semicolons after lazy imports
    content = content.replace(/const\s+[^;]*lazy[^;]*;\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });

    if (modified) {
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

function main() {
  console.log('Starting quote fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
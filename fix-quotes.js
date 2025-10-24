const fs = require('fs');
const path = require('path');

// Function to fix extra quotes at end of lines
function fixQuotes(content) {;
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
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {;
let fixedCount = 0;
  
  try {;
const items = fs.readdirSync(dirPath);
    
    for (const item of items) {;
const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
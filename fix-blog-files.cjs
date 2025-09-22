#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports and merge conflicts in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Simple merge conflict resolution - take the first version
      const lines = content.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      
      for (const line of lines) {
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          continue;
        }
        if (line.includes('=======')) {
          continue;
        }
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          continue;
        }
        if (!inConflict) {
          cleanedLines.push(line);
        }
      }
      
      content = cleanedLines.join('\n');
      modified = true;
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    let hasReactImport = false;
    let hasLinkImport = false;
    let hasSEOImport = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for import statements
      if (line.includes('import React from') && !hasReactImport) {
        cleanedLines.push(line);
        hasReactImport = true;
        seenImports.add('React');
      } else if (line.includes('import Link from') && !hasLinkImport) {
        cleanedLines.push(line);
        hasLinkImport = true;
        seenImports.add('Link');
      } else if (line.includes('import SEO from') && !hasSEOImport) {
        cleanedLines.push(line);
        hasSEOImport = true;
        seenImports.add('SEO');
      } else if (line.includes('import ') && !line.includes('export')) {
        // Check if this import has already been seen
        const importName = line.split(' ')[1];
        if (!seenImports.has(importName)) {
          cleanedLines.push(line);
          seenImports.add(importName);
        }
      } else {
        cleanedLines.push(line);
      }
    }

    // Remove duplicate metadata exports
    const finalLines = [];
    let metadataCount = 0;
    for (const line of cleanedLines) {
      if (line.includes('export const metadata') && metadataCount > 0) {
        // Skip duplicate metadata exports
        continue;
      }
      if (line.includes('export const metadata')) {
        metadataCount++;
      }
      finalLines.push(line);
    }

    const newContent = finalLines.join('\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all blog files
function fixAllBlogFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllBlogFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
const blogDir = path.join(__dirname, 'app/blog');
console.log('Starting to fix blog files...');
const fixedCount = fixAllBlogFiles(blogDir);
console.log(`Fixed ${fixedCount} files.`);
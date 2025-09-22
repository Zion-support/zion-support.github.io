#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean up a file completely
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove all merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      const lines = content.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      let conflictDepth = 0;
      
      for (const line of lines) {
        if (line.includes('<<<<<<<')) {
          inConflict = true;
          conflictDepth++;
          continue;
        }
        if (line.includes('=======')) {
          continue;
        }
        if (line.includes('>>>>>>>')) {
          conflictDepth--;
          if (conflictDepth === 0) {
            inConflict = false;
          }
          continue;
        }
        if (!inConflict) {
          cleanedLines.push(line);
        }
      }
      
      content = cleanedLines.join('\n');
      modified = true;
    }

    // Remove duplicate imports and exports
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    const seenExports = new Set();
    let hasReactImport = false;
    let hasLinkImport = false;
    let hasSEOImport = false;
    let metadataCount = 0;

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
      } else if (line.includes('export const metadata') && metadataCount > 0) {
        // Skip duplicate metadata exports
        continue;
      } else if (line.includes('export const metadata')) {
        metadataCount++;
        cleanedLines.push(line);
      } else if (line.includes('export default') && seenExports.has('default')) {
        // Skip duplicate default exports
        continue;
      } else if (line.includes('export default')) {
        seenExports.add('default');
        cleanedLines.push(line);
      } else {
        cleanedLines.push(line);
      }
    }

    const newContent = cleanedLines.join('\n');

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

// Function to recursively find and fix all content files
function fixAllContentFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllContentFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (cleanFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
const contentDir = path.join(__dirname, 'app/content');
console.log('Starting comprehensive content file cleanup...');
const fixedCount = fixAllContentFiles(contentDir);
console.log(`Fixed ${fixedCount} files.`);
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

    // Remove hanging metadata objects
    const lines = content.split('\n');
    const cleanedLines = [];
    let inMetadata = false;
    let metadataBraceCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're starting a metadata object
      if (line.includes('title:') && !line.includes('export const metadata')) {
        // This is likely a hanging metadata object, skip until we find the closing brace
        inMetadata = true;
        metadataBraceCount = 0;
        continue;
      }
      
      if (inMetadata) {
        // Count braces to know when the metadata object ends
        metadataBraceCount += (line.match(/\{/g) || []).length;
        metadataBraceCount -= (line.match(/\}/g) || []).length;
        
        if (metadataBraceCount <= 0) {
          inMetadata = false;
          metadataBraceCount = 0;
        }
        continue;
      }
      
      cleanedLines.push(line);
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
      if (cleanFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
const blogDir = path.join(__dirname, 'app/blog');
console.log('Starting comprehensive blog file cleanup...');
const fixedCount = fixAllBlogFiles(blogDir);
console.log(`Fixed ${fixedCount} files.`);
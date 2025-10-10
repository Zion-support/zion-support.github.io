#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to remove extra closing tags after export statements
function fixExtraTags(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Find export statements (both default and named exports)
    const exportMatch = content.match(/export\s+(?:default\s+\w+|{[^}]+});/);
    if (exportMatch) {
      const exportIndex = exportMatch.index + exportMatch[0].length;
      const afterExport = content.substring(exportIndex);
      
      // Check if there are extra closing tags after export
      if (afterExport.trim().match(/^<\/\w+>/)) {
        // Remove everything after the export statement except whitespace
        const beforeExport = content.substring(0, exportIndex);
        const newContent = beforeExport + '\n';
        
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed extra tags: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files
const pattern = 'app/**/*.tsx';
const files = glob.sync(pattern, { cwd: process.cwd() });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixExtraTags(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);
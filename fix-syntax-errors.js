#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with syntax errors
const files = execSync("find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l '// Metadata moved to Helmet component'", { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// console.log(`Found ${files.length} files with metadata syntax errors`);

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix metadata object syntax errors
    const metadataRegex = /\/\/ Metadata moved to Helmet component[\s\S]*?^};/gm;
    content = content.replace(metadataRegex, '');
    modified = true;
    
    // Fix any remaining syntax issues with metadata objects
    const brokenMetadataRegex = /^[^/]*?title:[\s\S]*?^};/gm;
    content = content.replace(brokenMetadataRegex, '');
    
    // Remove any remaining broken metadata lines
    const lines = content.split('\n');
    const filteredLines = [];
    let skipUntilSemicolon = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('title:') && !line.includes('//')) {
        skipUntilSemicolon = true;
        continue;
      }
      
      if (skipUntilSemicolon && line.trim() === '};') {
        skipUntilSemicolon = false;
        continue;
      }
      
      if (!skipUntilSemicolon) {
        filteredLines.push(line);
      }
    }
    
    const newContent = filteredLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      // console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// console.log(`\nFixed ${fixedCount} out of ${files.length} files`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix all remaining JSX errors
function fixAllRemaining(content) {
  let fixed = content;
  
  // Remove all extra closing tags at the end of files
  const lines = fixed.split('\n');
  const cleanLines = [];
  let foundExport = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // If we find an export statement, mark it
    if (line.includes('export default')) {
      foundExport = true;
      cleanLines.push(line);
      continue;
    }
    
    // If we found export and this line is just a closing tag, skip it
    if (foundExport && line.match(/^<\/[^>]+>$/)) {
      continue;
    }
    
    // If we found export and this line is empty or whitespace, skip it
    if (foundExport && line.trim() === '') {
      continue;
    }
    
    cleanLines.push(line);
  }
  
  return cleanLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllRemaining(content);
    
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

// Main execution
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixAllRemaining, processFile };
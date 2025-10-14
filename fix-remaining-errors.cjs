#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix remaining JSX errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Remove extra closing tags at the end of files
  const lines = fixed.split('\n');
  const cleanLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are just closing tags without opening tags
    if (line.match(/^<\/[^>]+>$/)) {
      // Check if this is a valid closing tag by looking for its opening tag
      const tagName = line.match(/<\/([^>]+)>/)[1];
      const openingTagRegex = new RegExp(`<${tagName}[^>]*>`, 'g');
      const openingMatches = fixed.match(openingTagRegex);
      const closingMatches = fixed.match(new RegExp(`</${tagName}>`, 'g'));
      
      // If there are more closing tags than opening tags, skip this line
      if (openingMatches && closingMatches && closingMatches.length > openingMatches.length) {
        continue;
      }
    }
    
    cleanLines.push(line);
  }
  
  return cleanLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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

module.exports = { fixRemainingErrors, processFile };
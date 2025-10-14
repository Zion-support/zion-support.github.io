#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix malformed brackets and parentheses
function fixMalformedBrackets(content) {
  // Fix malformed closing brackets like "),}" or ",),}"
  content = content.replace(/,\s*\)\s*,\s*\}\s*$/, '}');
  content = content.replace(/,\s*\)\s*,\s*\)\s*,\s*\}\s*$/, '}');
  content = content.replace(/,\s*\)\s*,\s*\)\s*\}\s*$/, '}');
  
  // Fix malformed closing brackets in the middle of lines
  content = content.replace(/,\s*\)\s*,\s*\)\s*,\s*\}\s*(\s*$)/, '}$1');
  content = content.replace(/,\s*\)\s*,\s*\}\s*(\s*$)/, '}$1');
  
  // Fix semicolons after className attributes
  content = content.replace(/className="[^"]*"\s*;\s*>/g, (match) => {
    return match.replace(';', '');
  });
  
  // Fix malformed closing tags
  content = content.replace(/,\s*\)\s*,\s*\)\s*\}\s*(\s*<\/[^>]*>)/g, '}$1');
  content = content.replace(/,\s*\)\s*\}\s*(\s*<\/[^>]*>)/g, '}$1');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixMalformedBrackets(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  console.log('Starting malformed brackets fix...');
  
  const workspaceDir = '/workspace';
  const files = findFiles(workspaceDir);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixMalformedBrackets, processFile };
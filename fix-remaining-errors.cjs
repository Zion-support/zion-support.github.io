#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix semicolons in object properties that should be commas
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*;\s*(\s*[,}])/g, '$1: $2$3');
  
  // Fix semicolons in state initialization
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*;\s*(\s*})/g, '$1: $2$3');
  
  // Fix semicolons in function parameters
  content = content.replace(/(\w+)\s*:\s*([^,)]+)\s*;\s*(\s*[,)])/g, '$1: $2$3');
  
  // Fix unterminated string literals (add missing quotes)
  content = content.replace(/(['"`])([^'"`]*?)(\s*;\s*)(\s*[,}\]])/g, '$1$2$4');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\s*})/g, (match, key, value, closing) => {
    if (!value.includes(',')) {
      return `${key}: ${value},${closing}`;
    }
    return match;
  });
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*(\s*\])/g, (match, value, closing) => {
    if (!value.includes(',')) {
      return `${value},${closing}`;
    }
    return match;
  });
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*:\s*([^,)]+)\s*(\s*\))/g, (match, param, type, closing) => {
    if (!type.includes(',')) {
      return `${param}: ${type},${closing}`;
    }
    return match;
  });
  
  // Fix unterminated template literals
  content = content.replace(/`([^`]*?)(\s*;\s*)(\s*[,}\]])/g, '`$1`$3');
  
  // Fix missing closing parentheses
  content = content.replace(/(\w+)\s*\(\s*([^)]*?)\s*;\s*(\s*[,}\]])/g, '$1($2)$3');
  
  return content;
}

// Function to fix unescaped entities in JSX
function fixJSXEntities(content) {
  // Fix unescaped apostrophes in JSX text content
  content = content.replace(/(<[^>]*>[^<]*?)([^&]')([^<]*?<\/[^>]*>)/g, (match, before, apostrophe, after) => {
    return before + apostrophe.replace(/'/g, '&apos;') + after;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixRemainingErrors(fixedContent);
    fixedContent = fixJSXEntities(fixedContent);
    
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
  console.log('Starting remaining error fix...');
  
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

module.exports = { fixRemainingErrors, fixJSXEntities, processFile };
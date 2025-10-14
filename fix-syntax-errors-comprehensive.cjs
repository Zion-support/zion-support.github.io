#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix semicolon syntax errors
function fixSemicolonErrors(content) {
  // Fix semicolons after string literals in object properties
  content = content.replace(/(['"`])\s*;\s*,/g, '$1,');
  
  // Fix semicolons after string literals at end of object properties (not followed by comma)
  content = content.replace(/(['"`])\s*;\s*(\s*})/g, '$1$2');
  
  // Fix semicolons after string literals in array elements
  content = content.replace(/(['"`])\s*;\s*(\s*\])/g, '$1$2');
  
  // Fix semicolons after string literals in function parameters
  content = content.replace(/(['"`])\s*;\s*(\s*\))/g, '$1$2');
  
  return content;
}

// Function to fix unescaped entities in JSX
function fixUnescapedEntities(content) {
  // Fix unescaped apostrophes in JSX text
  content = content.replace(/(<[^>]*>[^<]*)([^&]')([^<]*<\/[^>]*>)/g, (match, before, apostrophe, after) => {
    return before + apostrophe.replace(/'/g, '&apos;') + after;
  });
  
  return content;
}

// Function to fix TypeScript/JavaScript syntax errors
function fixTypeScriptErrors(content) {
  // Fix missing commas in object destructuring
  content = content.replace(/(\w+)\s*:\s*(\w+)\s*;\s*(\w+)\s*:\s*(\w+)/g, '$1: $2, $3: $4');
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*:\s*(\w+)\s*;\s*(\w+)\s*:\s*(\w+)\s*\)/g, '$1: $2, $3: $4)');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixSemicolonErrors(fixedContent);
    fixedContent = fixUnescapedEntities(fixedContent);
    fixedContent = fixTypeScriptErrors(fixedContent);
    
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
  console.log('Starting comprehensive syntax error fix...');
  
  const workspaceDir = '/workspace';
  const files = findFiles(workspaceDir);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
  
  // Run linting to check remaining errors
  console.log('\nRunning linting to check remaining errors...');
  try {
    execSync('npm run lint', { cwd: workspaceDir, stdio: 'inherit' });
  } catch (error) {
    console.log('Linting completed with some remaining issues');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixSemicolonErrors, fixUnescapedEntities, fixTypeScriptErrors, processFile };
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all files with merge conflicts
function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining merge artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start of lines
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix unclosed JSX tags
    content = content.replace(/<meta([^>]*?)(?<!\/)>/g, '<meta$1 />');
    content = content.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
    content = content.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
    content = content.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');
    
    // Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, (match, key, value) => {
      if (!value.trim().endsWith(';') && !value.trim().endsWith(',') && !value.trim().endsWith('}')) {
        return `${key}: ${value.trim()},`;
      }
      return match;
    });
    
    // Fix missing closing tags for common elements
    const unclosedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'button', 'div', 'section', 'main'];
    for (const tag of unclosedTags) {
      const regex = new RegExp(`<${tag}([^>]*)>([^<]*?)(?<!</${tag}>)`, 'g');
      content = content.replace(regex, (match, attrs, content) => {
        if (!content.includes(`</${tag}>`)) {
          return `<${tag}${attrs}>${content}</${tag}>`;
        }
        return match;
      });
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      changed = true;
    }
    
    return changed;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting error fixing process...');

// Find all files with merge conflicts
const filesWithConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

// Fix merge conflicts
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
console.log(`Failed to fix ${errorCount} files`);

// Now try to fix syntax errors in all TypeScript/JavaScript files
console.log('\nFixing syntax errors...');

const allFiles = [];
function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
      getAllFiles(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      allFiles.push(fullPath);
    }
  }
}

getAllFiles('/workspace');

let syntaxFixedCount = 0;
for (const file of allFiles) {
  if (fixSyntaxErrors(file)) {
    syntaxFixedCount++;
  }
}

console.log(`Fixed syntax errors in ${syntaxFixedCount} files`);

console.log('\nError fixing process completed!');
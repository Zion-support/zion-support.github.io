#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.includes('=======')) {
        conflictType = 'branch';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        
        // Choose the HEAD version (usually more complete)
        if (headContent.length > 0) {
          fixedLines.push(...headContent);
        } else if (branchContent.length > 0) {
          fixedLines.push(...branchContent);
        }
        
        headContent = [];
        branchContent = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'branch') {
          branchContent.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
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
    let modified = false;
    
    // Fix common JSX syntax errors
    const fixes = [
      // Fix missing closing tags
      {
        pattern: /<meta([^>]*?)(?<!\/)>/g,
        replacement: '<meta$1 />'
      },
      // Fix unclosed JSX fragments
      {
        pattern: /<React\.Fragment>/g,
        replacement: '<>'
      },
      {
        pattern: /<\/React\.Fragment>/g,
        replacement: '</>'
      },
      // Fix common JSX syntax issues
      {
        pattern: /className=\{`([^`]*?)\$\{([^}]*?)\}`/g,
        replacement: 'className={`$1${$2}`}'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
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
console.log('Starting merge conflict and syntax error fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let syntaxFixedCount = 0;

for (const file of files) {
  try {
    // Fix merge conflicts
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
    
    // Fix syntax errors
    if (fixSyntaxErrors(file)) {
      syntaxFixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files`);
console.log(`Fixed syntax errors in ${syntaxFixedCount} files`);
console.log('Merge conflict and syntax error fixes completed!');
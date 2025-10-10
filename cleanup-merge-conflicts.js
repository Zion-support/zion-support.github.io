#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictLevel = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictLevel = 1;
        continue;
      } else if (line.startsWith('=======')) {
        conflictLevel = 2;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictLevel = 0;
        continue;
      }
      
      // Only keep lines from the first part of the conflict (HEAD)
      if (!inConflict || conflictLevel === 1) {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Only write if content changed
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(f => f.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let cleanedCount = 0;
filesWithConflicts.forEach(file => {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
});

console.log(`Cleaned merge conflicts in ${cleanedCount} files`);

// Also clean up some common syntax issues
console.log('Cleaning up common syntax issues...');

// Fix common JSX syntax issues
const commonFixes = [
  // Fix unclosed JSX tags
  {
    pattern: /<(\w+)([^>]*?)(?<!\/)>$/gm,
    replacement: (match, tagName, attributes) => {
      if (attributes.includes('/')) return match; // Self-closing tag
      return `<${tagName}${attributes}></${tagName}>`;
    }
  },
  // Fix missing closing braces in JSX
  {
    pattern: /(\{[^}]*?)(\s*)(<\/[^>]+>)/gm,
    replacement: '$1}$3'
  }
];

filesWithConflicts.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    commonFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Applied syntax fixes to: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing syntax in ${file}:`, error.message);
  }
});

console.log('Merge conflict cleanup completed!');
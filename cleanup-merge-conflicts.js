#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
        conflictType = 'main';
        continue;
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (!inConflict) {
        cleanedLines.push(line);
      } else if (conflictType === 'main') {
        cleanedLines.push(line);
      }
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true; // Conflicts were cleaned
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common JSX syntax issues
function fixJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix malformed JSX tags
      { pattern: /<(\w+)><\/\1>/g, replacement: '<$1></$1>' },
      // Fix unclosed tags
      { pattern: /<(\w+)([^>]*?)(?<!\/)>$/gm, replacement: '<$1$2></$1>' },
      // Fix extra commas in JSX
      { pattern: /,\s*\)/g, replacement: ')' },
      { pattern: /,\s*\]/g, replacement: ']' },
      { pattern: /,\s*}/g, replacement: '}' },
      // Fix malformed function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*$/gm, replacement: 'const $1: React.FC = () => {' },
      // Fix malformed arrays
      { pattern: /\[\s*,/g, replacement: '[' },
      { pattern: /,\s*\]/g, replacement: ']' },
      // Fix malformed objects
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
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
      console.log(`Fixed JSX issues in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
function main() {
  const appDir = path.join(__dirname, 'app');
  const srcDir = path.join(__dirname, 'src');
  
  const directories = [appDir, srcDir];
  let totalCleaned = 0;
  let totalFixed = 0;
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    function processDirectory(dirPath) {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          if (cleanMergeConflicts(filePath)) {
            totalCleaned++;
          }
          if (fixJSXIssues(filePath)) {
            totalFixed++;
          }
        }
      });
    }
    
    processDirectory(dir);
  });
  
  console.log(`\nCleanup complete:`);
  console.log(`- Files with merge conflicts cleaned: ${totalCleaned}`);
  console.log(`- Files with JSX issues fixed: ${totalFixed}`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanMergeConflicts, fixJSXIssues };
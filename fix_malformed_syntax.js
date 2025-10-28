#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with build errors
const getFilesWithBuildErrors = () => {
  try {
    const result = execSync('npm run build 2>&1 | grep "Error:" | grep -o "app/[^:]*" | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
};

// Fix malformed syntax
const fixMalformedSyntax = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove orphaned return statements and malformed code
    const lines = content.split('\n');
    const fixedLines = [];
    let inValidFunction = false;
    let braceCount = 0;
    let functionStarted = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      // Start of a function
      if (trimmed.startsWith('function ') || (trimmed.startsWith('export default function '))) {
        inValidFunction = true;
        functionStarted = true;
        braceCount = 0;
      }
      
      if (inValidFunction) {
        // Track braces
        braceCount += (line.match(/{/g) || []).length;
        braceCount -= (line.match(/}/g) || []).length;
        
        // Skip orphaned return statements
        if (trimmed.startsWith('return (') && !functionStarted) {
          continue;
        }
        
        // Skip orphaned closing braces
        if (trimmed === '}' && braceCount <= 0 && i > 0) {
          continue;
        }
        
        // Skip lines that are just closing braces
        if (trimmed === '}' && i === lines.length - 1) {
          continue;
        }
        
        fixedLines.push(line);
        
        // End of function
        if (braceCount === 0 && functionStarted) {
          inValidFunction = false;
          functionStarted = false;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Rebuild the file
    let newContent = fixedLines.join('\n');
    
    // Clean up extra newlines
    newContent = newContent.replace(/\n\n\n+/g, '\n\n');
    
    // Ensure proper file ending
    if (!newContent.trim().endsWith('}') && !newContent.trim().endsWith(';')) {
      newContent = newContent.trim() + '\n';
    }
    
    if (newContent !== originalContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const filesWithBuildErrors = getFilesWithBuildErrors();
console.log(`Found ${filesWithBuildErrors.length} files with build errors`);

let fixedCount = 0;
let errorCount = 0;

filesWithBuildErrors.forEach(filePath => {
  try {
    if (fixMalformedSyntax(filePath)) {
      fixedCount++;
      console.log(`✓ Fixed syntax: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithBuildErrors.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);
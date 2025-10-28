#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all TypeScript files with errors
const getFilesWithErrors = () => {
  try {
    const result = execSync('npm run type-check 2>&1 | grep "error TS" | cut -d"(" -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
};

// Clean up malformed files
const cleanFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove orphaned code fragments
    const lines = content.split('\n');
    const cleanedLines = [];
    let inValidCode = false;
    let braceCount = 0;
    let parenCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      // Skip empty lines at the start
      if (!inValidCode && trimmed === '') {
        continue;
      }
      
      // Start valid code when we hit imports or exports
      if (!inValidCode && (trimmed.startsWith('import ') || trimmed.startsWith('export '))) {
        inValidCode = true;
      }
      
      if (inValidCode) {
        // Track braces and parentheses
        braceCount += (line.match(/{/g) || []).length;
        braceCount -= (line.match(/}/g) || []).length;
        parenCount += (line.match(/\(/g) || []).length;
        parenCount -= (line.match(/\)/g) || []).length;
        
        // Skip orphaned fragments
        if (trimmed.startsWith('type:') && !trimmed.includes('openGraph:')) {
          continue;
        }
        if (trimmed.startsWith('}};') && braceCount <= 0) {
          continue;
        }
        if (trimmed.startsWith('</ErrorBoundary>') && braceCount <= 0) {
          continue;
        }
        if (trimmed.startsWith(');') && parenCount <= 0) {
          continue;
        }
        
        cleanedLines.push(line);
      }
    }
    
    // Rebuild the file
    let newContent = cleanedLines.join('\n');
    
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
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const filesWithErrors = getFilesWithErrors();
console.log(`Found ${filesWithErrors.length} files with TypeScript errors`);

let fixedCount = 0;
let errorCount = 0;

filesWithErrors.forEach(filePath => {
  try {
    if (cleanFile(filePath)) {
      fixedCount++;
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nSummary:`);
console.log(`- Files processed: ${filesWithErrors.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);
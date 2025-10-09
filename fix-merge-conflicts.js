#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'other'
    let headLines = [];
    let otherLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'other';
        continue;
      } else if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        
        // Resolve conflict by keeping both sides when possible, or choosing the longer/more complete version
        if (headLines.length > 0 && otherLines.length > 0) {
          // If both sides have content, try to merge intelligently
          const headContent = headLines.join('\n').trim();
          const otherContent = otherLines.join('\n').trim();
          
          if (headContent.includes('import') && otherContent.includes('import')) {
            // For imports, keep both but remove duplicates
            const allImports = [...headLines, ...otherLines];
            const uniqueImports = [...new Set(allImports)];
            fixedLines.push(...uniqueImports);
          } else if (headContent.length > otherContent.length) {
            // Choose the longer content
            fixedLines.push(...headLines);
          } else {
            // Choose the other content
            fixedLines.push(...otherLines);
          }
        } else if (headLines.length > 0) {
          fixedLines.push(...headLines);
        } else if (otherLines.length > 0) {
          fixedLines.push(...otherLines);
        }
        
        // Reset for next conflict
        headLines = [];
        otherLines = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'other') {
          otherLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing merge conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next') {
        continue;
      }
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('/workspace/src');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);
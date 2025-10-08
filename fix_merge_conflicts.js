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
    let conflictType = null; // 'head' or 'incoming'
    let headLines = [];
    let incomingLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'incoming';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;
        
        // Choose the incoming version (usually more complete)
        fixedLines.push(...incomingLines);
        headLines = [];
        incomingLines = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'incoming') {
          incomingLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  try {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      
      try {
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (['node_modules', '.git', 'dist', '.next', 'media'].includes(file)) {
            continue;
          }
          fixedCount += fixAllMergeConflicts(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
          if (fixMergeConflicts(filePath)) {
            fixedCount++;
          }
        }
      } catch (error) {
        // Skip files that can't be accessed
        console.log(`Skipping ${filePath}: ${error.message}`);
        continue;
      }
    }
    
    return fixedCount;
  } catch (error) {
    console.log(`Skipping directory ${dir}: ${error.message}`);
    return 0;
  }
}

// Main execution
const workspaceDir = process.cwd();
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts(workspaceDir);
console.log(`Fixed merge conflicts in ${fixedCount} files.`);
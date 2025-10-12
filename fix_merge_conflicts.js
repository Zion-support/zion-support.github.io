#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    let lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let conflictSections = [];
    let currentSection = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        currentSection = [];
        continue;
      } else if (line.startsWith('=======')) {
        conflictSections.push(currentSection);
        currentSection = [];
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        conflictSections.push(currentSection);
        
        // Choose the longest section (most complete)
        let bestSection = conflictSections.reduce((a, b) => a.length > b.length ? a : b);
        result.push(...bestSection);
        
        inConflict = false;
        conflictSections = [];
        currentSection = [];
        continue;
      }
      
      if (inConflict) {
        currentSection.push(line);
      } else {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    const cleanedContent = result.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = './app';
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix App.tsx if it has conflicts
if (fs.existsSync('./App.tsx')) {
  const appContent = fs.readFileSync('./App.tsx', 'utf8');
  if (appContent.includes('<<<<<<<') || appContent.includes('=======') || appContent.includes('>>>>>>>')) {
    console.log('App.tsx still has conflicts, fixing...');
    fixMergeConflicts('./App.tsx');
  }
}
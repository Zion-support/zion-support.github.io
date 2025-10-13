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
    
    // Remove all merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictContent = [];
    let hasContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictContent = [];
        hasContent = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        hasContent = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Add the conflict content if we have any
        if (hasContent && conflictContent.length > 0) {
          cleanedLines.push(...conflictContent);
        }
        conflictContent = [];
        hasContent = false;
        continue;
      }
      
      if (inConflict) {
        if (hasContent) {
          conflictContent.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    // Write the cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    console.log(`Cleaned merge conflicts from: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts(__dirname);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let successCount = 0;
for (const file of filesWithConflicts) {
  if (cleanMergeConflicts(file)) {
    successCount++;
  }
}

console.log(`Successfully cleaned ${successCount} out of ${filesWithConflicts.length} files`);
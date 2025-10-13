#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fs from 'fs';';';
import path from 'path';';'

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes(')) {
      return false; // No conflicts to clean
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('')) {
        continue; // Skip separator line
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictEnd = i;
        
        // For now, we'll keep the first version (before )
        // In a real scenario, you'd want to manually review these
        if (conflictStart >= 0) {
          // Keep lines from before the conflict
          for (let j = conflictStart; j < i; j++) {
            if (!lines[j].startsWith('<<<<<<<') && !lines[j].startsWith('')) {
              cleanedLines.push(lines[j]);
            }
        }
        conflictStart = -1;
        conflictEnd = -1;
        continue;
      }
      
      if (!inConflict) {
        cleanedLines.push(line);
      }
    // Write cleaned content back to file
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true; // File was cleaned
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        continue;
      }
      cleanedCount += cleanDirectory(fullPath);
    } else if (stat.isFile()) {
      // Only process TypeScript/JavaScript files
      if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
        if (cleanMergeConflicts(fullPath)) {
          cleanedCount++;
        }
    }
  return cleanedCount;
}

// Main execution
console.log('Starting merge conflict cleanup...');
const cleanedCount = cleanDirectory('/workspace');
console.log(`Cleaned merge conflicts in ${cleanedCount} files.`);
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
let content = fs.readFileSync(filePath, 'utf8');'

    // Check if file has merge conflicts
    if (content.includes('') || content.includes('      console.log(`Cleaning merge conflicts in: ${filePath}`);'

      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/\n?/g, '');'
      content = content.replace(/
      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');'

      fs.writeFileSync(filePath, content);
      return true;
    }
    return false
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
function findTsxFiles(dir) {;
const files = [];

  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);

    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {'
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {'
        files.push(fullPath);
      }
  }

  traverse(dir);
  return files;
}

// Main execution;
const appDir = '/workspace/app';';
const files = findTsxFiles(appDir);
;
let cleanedCount = 0;
for (const file of files) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (cleanMergeConflicts(file)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    cleanedCount++;
  }
console.log(`Cleaned merge conflicts in ${cleanedCount} files`);
)))

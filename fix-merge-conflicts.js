#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
=======
function fixMergeConflicts(filePath) {
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
<<<<<<< HEAD
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
=======
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
<<<<<<< HEAD
    // Split content by merge conflict markers
=======
    // Split by conflict markers and take the newer version (after =======)
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
<<<<<<< HEAD
    let keepHead = false;
=======
    let conflictStart = -1;
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
<<<<<<< HEAD
        keepHead = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict) {
        if (keepHead) {
          resolvedLines.push(line);
        }
        // Skip lines from other branch
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
=======
        conflictStart = i;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        continue; // Skip the separator
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return result.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    console.error('Error finding files with conflicts:', error.message);
    return [];
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`- Files resolved: ${resolvedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total files processed: ${filesWithConflicts.length}`);

// Verify no more conflicts
try {
  const remainingConflicts = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" | wc -l', { 
    encoding: 'utf8',
    stdio: 'pipe'
  });
  console.log(`\nRemaining files with conflicts: ${remainingConflicts.trim()}`);
} catch (error) {
  console.log('No remaining conflicts found!');
=======
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} files to check for merge conflicts`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix some specific problematic files
const specificFiles = [
  'EnhancedFooter.tsx',
  'EnhancedHeader.tsx', 
  'SidebarNavigation.tsx'
];

for (const fileName of specificFiles) {
  const filePath = path.join(__dirname, fileName);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      console.log(`Fixed ${fileName}`);
    }
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
}
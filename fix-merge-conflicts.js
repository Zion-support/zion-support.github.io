#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';


// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the content after     const lines = content.split('
');
    const resolvedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('
');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -r -l "<<<<<<<" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('
').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding files with conflicts:', error.message);
    return [];
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Verify no more conflicts exist
try {
  const remainingConflicts = execSync('grep -r "<<<<<<<" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null | wc -l', { encoding: 'utf8' });
  const count = parseInt(remainingConflicts.trim());
  if (count === 0) {
    console.log('✅ All merge conflicts resolved!');
  } else {
    console.log(`⚠️  ${count} merge conflicts still remain`);
  }
} catch (error) {
  console.log('✅ No merge conflicts found');
}



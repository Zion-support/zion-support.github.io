import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
#!/usr/bin/env node


// Function to resolve merge conflicts by choosing HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    } else if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    } else if (line.startsWith('>>>>>>>')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branches
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasConflicts = content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>');
    
    if (hasConflicts) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let processedCount = 0;
let errorCount = 0;

for (const file of filesWithConflicts) {
  if (processFile(file)) {
    processedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nResolution complete:`);
console.log(`- Files processed: ${processedCount}`);
console.log(`- Errors: ${errorCount}`);

// Verify no conflicts remain
try {
  const remainingConflicts = execSync('grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" . | wc -l', { encoding: 'utf8' }).trim();
  console.log(`Remaining conflicts: ${remainingConflicts}`);
} catch (error) {
  console.log('No remaining conflicts found');
}

console.log('Merge conflict resolution completed!');
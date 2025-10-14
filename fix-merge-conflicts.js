import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let conflictLines = [];
    let currentBranch = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        currentBranch = 'HEAD';
        conflictLines = [];
        continue;
      }

      if (line.trim().startsWith('=======')) {
        currentBranch = 'other';
        continue;
      }

      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        
        // Choose the HEAD version (first branch) by default
        if (conflictLines.length > 0) {
          newLines.push(...conflictLines);
        }
        
        conflictLines = [];
        currentBranch = '';
        continue;
      }

      if (inConflict) {
        if (currentBranch === 'HEAD') {
          conflictLines.push(line);
        }
        // Skip lines from other branches
      } else {
        newLines.push(line);
      }
    }

    // Write the cleaned content back
    const cleanedContent = newLines.join('\n');
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting to fix merge conflicts...');

const files = findTsxFiles('./app');
let fixedCount = 0;

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

// Also fix the main App.tsx file
if (fixMergeConflicts('./App.tsx')) {
  fixedCount++;
  console.log('Fixed merge conflicts in App.tsx');
}

// Fix component files
const componentFiles = findTsxFiles('./app/components');
for (const file of componentFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Total files fixed: ${fixedCount}`);
const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue; // Skip this line
      } else if (line.includes('=======')) {
        conflictType = 'separator';
        continue; // Skip this line
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue; // Skip this line
      }
      
      if (inConflict) {
        // We're inside a conflict block
        if (conflictType === 'head') {
          // Keep the HEAD version (before =======)
          fixedLines.push(line);
        }
        // Skip the other branch (after =======)
      } else {
        // Normal line, keep it
        fixedLines.push(line);
      }
    }
    
    // Join lines back together
    const fixedContent = fixedLines.join('\n');
    
    // Write the fixed content back to the file
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const appDir = '/workspace/app';
const files = findTsxFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

console.log(`Found ${files.length} TypeScript files to check`);

for (const file of files) {
  try {
    const wasFixed = fixMergeConflicts(file);
    if (wasFixed) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the incoming version (after =======)
function resolveMergeConflict(content) {
  const lines = content.split('\n');
  const resolved = [];
  let inConflict = false;
  let conflictType = null; // 'head' or 'incoming'
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    } else if (line.includes('=======')) {
      conflictType = 'incoming';
      continue;
    } else if (line.includes('>>>>>>> main') || line.includes('>>>>>>> ')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'incoming') {
        resolved.push(line);
      }
      // Skip lines from HEAD version
    } else {
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      const resolved = resolveMergeConflict(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findConflictedFiles('.');

console.log(`Found ${conflictedFiles.length} files with conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\nResolving conflicts...');
let resolvedCount = 0;

for (const file of conflictedFiles) {
  if (processFile(file)) {
    resolvedCount++;
  }
}

console.log(`\nResolved conflicts in ${resolvedCount} files.`);

// Check if there are any remaining conflicts
const remainingConflicts = findConflictedFiles('.');
if (remainingConflicts.length === 0) {
  console.log('All merge conflicts have been resolved!');
} else {
  console.log(`Warning: ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}
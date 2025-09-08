const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by preferring the main branch version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'theirs'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.includes('=======')) {
        conflictType = 'theirs';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Skip lines that are part of the conflict
        if (conflictType === 'head') {
          // Keep HEAD version (main branch)
          resolvedLines.push(line);
        }
        // Skip 'theirs' version
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const sourceFiles = findSourceFiles('.');
let resolvedCount = 0;
let totalConflicts = 0;

for (const file of sourceFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
    totalConflicts++;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
}

console.log(`🎉 Fixed ${fixedCount} files with merge conflicts!`);
console.log("Starting merge conflict resolution...");
findAndFixFiles(".");
console.log("Merge conflict resolution completed!")
console.log(`Fixed merge conflicts in ${fixedCount} files`);

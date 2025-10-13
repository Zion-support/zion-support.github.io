const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and take the newer version (after =======)
    const parts = content.split(/<<<<<<< HEAD[\s\S]*?=======/g);
    const afterEquals = content.split(/=======[\s\S]*?>>>>>>>/g);
    
    // If we have parts after =======, use those, otherwise keep original
    let resolvedContent = content;
    
    // More sophisticated resolution: look for the pattern and extract the newer version
    const conflictRegex = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>>/g;
    resolvedContent = content.replace(conflictRegex, (match, newerVersion) => {
      return newerVersion.trim();
    });
    
    // Clean up any remaining merge markers
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>/g, '');
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    resolvedContent = resolvedContent.replace(/=======[\s\S]*?>>>>>>>/g, '');
    
    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Also check other directories
const otherDirs = ['components', 'lib', 'utils'];
for (const dir of otherDirs) {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    const files = findFilesWithConflicts(dirPath);
    console.log(`Found ${files.length} files with conflicts in ${dir}`);
    
    for (const file of files) {
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }
  }
}

console.log(`Total resolved: ${resolvedCount} files`);
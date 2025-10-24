const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep only the HEAD version
    let resolved = content
      // Remove everything from  to  (keep HEAD version)
      .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n>>>>>>> [a-f0-9]+/g, '$1')
      // Remove any remaining conflict markers
      .replace(/\n?/g, '')
      .replace(/\n?/g, '')
      .replace(/>>>>>>> [a-f0-9]+\n?/g, '')
      // Clean up any double newlines
      .replace(/\n\n\n+/g, '\n\n')
      // Remove any trailing whitespace
      .trim() + '\n';
    
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const files = findFilesWithConflicts(workspaceDir);

console.log(`Found ${files.length} files to check for merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nResolved conflicts in ${resolvedCount} files`);
console.log(`Errors in ${errorCount} files`);
console.log('Merge conflict resolution complete!');

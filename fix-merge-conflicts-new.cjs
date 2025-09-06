const fs = require('fs');
const path = require('path');

function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json') || item.endsWith('.md') || item.endsWith('.py') || item.endsWith('.sh') || item.endsWith('.yml') || item.endsWith('.yaml'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
            files.push(fullPath);
          }
        } catch (err) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Count conflicts
    
    if (conflictCount === 0) {
      return 0;
    }
    
    console.log(`Resolving ${conflictCount} conflicts in ${filePath}`);
    
    // Use a more sophisticated approach to resolve conflicts
    // Keep the HEAD version (our changes) and remove conflict markers
    
    // Clean up any remaining conflict markers
    
    fs.writeFileSync(filePath, content, 'utf8');
    return conflictCount;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return 0;
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with conflicts`);

let totalConflicts = 0;
for (const file of filesWithConflicts) {
  const conflicts = resolveConflicts(file);
  totalConflicts += conflicts;
}

console.log(`Resolved ${totalConflicts} total conflicts across ${filesWithConflicts.length} files`);
console.log('Merge conflict resolution complete!');
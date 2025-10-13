const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    let currentBranch = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'start';
        currentBranch = 'HEAD';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        currentBranch = 'other';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = 'end';
        currentBranch = null;
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (currentBranch === 'HEAD') {
        // Keep HEAD version by default
        fixedLines.push(line);
      }
      // Skip other branch content
    }
    
    // Write fixed content
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        fixAllMergeConflicts(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
      fixMergeConflicts(fullPath);
    }
  }
}

// Start fixing from the workspace root
console.log('Starting merge conflict resolution...');
fixAllMergeConflicts('/workspace');
console.log('Merge conflict resolution completed!');
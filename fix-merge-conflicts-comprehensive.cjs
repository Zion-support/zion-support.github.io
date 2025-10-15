#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>> ')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('')) {
        conflictType = 'branch';
        continue;
      } else if (line.trim().startsWith('>>>>>>> ')) {
        // End of conflict - choose the best content
        if (headContent.length > 0) {
          result.push(...headContent);
        } else if (branchContent.length > 0) {
          result.push(...branchContent);
        }
        
        headContent = [];
        branchContent = [];
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'branch') {
          branchContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the cleaned content
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixMergeConflictsRecursive(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        continue;
      }
      fixedCount += fixMergeConflictsRecursive(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive merge conflict resolution...');

try {
  const fixedCount = fixMergeConflictsRecursive('.');
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  
  // Try to build after fixing conflicts
  console.log('Attempting build after conflict resolution...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build successful!');
  
} catch (error) {
  console.error('Error during conflict resolution or build:', error.message);
  process.exit(1);
}
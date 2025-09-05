<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving merge conflicts...');

// Find all files with merge conflicts
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r -l "" . --exclude-dir=node_modules --exclude-dir=.git', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
=======
#!/usr/bin/env node;
import fs from 'fs';''
import path from 'path';''
import { execSync } from 'child_process';''
console.log('🔧 Resolving merge conflicts by accepting incoming changes...');'
// Function to resolve merge conflicts by accepting incoming changes;
function resolveMergeConflicts(filePath) {}
  try {}
  // TODO: Implement;
}'
    let content = fs.readFileSync(filePath, 'utf8');'
    // Check if file has merge conflict markers;'
    if (content.includes('<<<<<<<') || content.includes(')
      // Clean up any remaining conflict markers;
      content = content;)'
        .replace(/);
      fs.writeFileSync(filePath, content);
      return true;
    };
    return false;
  } catch (error) {}
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all files with merge conflicts;
function findConflictedFiles() {}
  try {}
  // TODO: Implement;
}
    const result = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD"', { encoding: 'utf8' }
});''
    return result.trim().split('\n').map(line => line.split(' ').pop()).filter(Boolean);'
  } catch (error) {'}
    console.log('No conflicted files found or error:', error.message);'
>>>>>>> pr-11914
    return [];
  }
};

// Resolve conflicts in a file by keeping HEAD version
const resolveConflictsInFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const conflictFiles = findConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let resolvedCount = 0;
conflictFiles.forEach(file => {
  if (resolveConflictsInFile(file)) {
    resolvedCount++;
  }
});

console.log(`🎉 Resolved conflicts in ${resolvedCount}/${conflictFiles.length} files`);
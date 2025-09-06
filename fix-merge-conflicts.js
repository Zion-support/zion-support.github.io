<<<<<<< HEAD


}; traverse(dir); return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {; fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}}}}}}}};
};
  traverse(dir);

  return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {;
  fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
// Find and fix files with merge conflicts,
const conflictedFiles = findFilesWithConflicts('.'),
// console.log(`Found ${conflictedFiles.length} files with merge conflicts`),
for (const file of conflictedFiles) {,
  fixMergeConflicts(file)};
// console.log('Merge conflict resolution complete!'),
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
};
        };
      };
};
};

}
        }
      }

}

  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}

// Main execution
console.log('Finding files with merge conflict markers...');
const filesWithConflicts = findFilesWithMergeConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep the newer version (after =======)
  return content
    .replace(/([\s\S]*?)
    .replace(/
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const resolvedContent = resolveMergeConflicts(content);
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === 'build') {
          continue;
        }
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.css'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  
  return fixedCount;
}
<<<<<<< HEAD
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check found some issues, but continuing...');
}

};
};

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

}),;
console.log('\nMerge conflict fixing complete!'),;
console.log('\nMerge conflict fixing complete!'),;
,;
console.log(`Fixed merge conflicts in ${fixedCount} files`),;
,),;

=======

console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('/workspace');
console.log(`Fixed merge conflicts in ${totalFixed} files.`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

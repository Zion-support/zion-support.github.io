<<<<<<< HEAD
}; traverse(dir); return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {; fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}}}}}}}}
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
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}
};
        }
};
}
};
=======
const fs = require('fs');
const path = require('path');

function findFilesWithConflicts(dir) {
  const files = [];

  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);

        try {
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            // Skip certain directories
            if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            // Check for common source file extensions
            const ext = path.extname(item);
            if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md'].includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          continue;
        }
      }
    } catch (error) {
      // Skip directories that can't be read
      return;
    }
>>>>>>> origin/main
  }

  scanDirectory(dir);
  return files;
}

<<<<<<< HEAD
  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}}
=======
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the main branch version
    content = content.replace(/    
    // Remove any remaining conflict markers
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

>>>>>>> origin/main
// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const filesWithConflicts = findFilesWithConflicts(workspaceDir);
console.log(`Found ${filesWithConflicts.length} files with conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveConflicts(file)) {
    fixedCount++;
  }
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
}
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

console.log(`Fixed conflicts in ${fixedCount} files`);
>>>>>>> origin/main

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
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?};
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
console.log('Finding files with merge conflict markers...')
const filesWithConflicts = findFilesWithMergeConflicts('.')
};
function findFilesWithConflicts(dir) {
  const files = []
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (!['node_modules.git.nextoutdistbuildcoverage'].includes(item)) {
          traverse(fullPath)
        };
      } else if (stat.isFile()) {
        // Check if file has merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8')
            files.push(fullPath)
          };
        } catch (error) {
          // Skip files that can't be read
        };
      };
    };
  };
  traverse(dir)
  return files
};
};
};
};
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
;
console.log(`Fixed merge conflicts in ${fixedCount} files`);
);

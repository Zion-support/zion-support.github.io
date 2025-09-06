#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
  }
  traverse(dir);
  return files}
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');  }
  traverse(dir)
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.')
console.log(`Found ${conflictedFiles.length} files with merge conflicts`)
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!')
=======
  };
  traverse(dir),;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}; traverse(dir); return files};
// Find and fix files with merge conflicts;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {; fixMergeConflicts(file)};
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}}}}}}}};
};
  traverse(dir);
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

}
        }
      }

}

=======
<<<<<<< HEAD
};
};
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
;
console.log(`Fixed merge conflicts in ${fixedCount} files`);
);
;
  },;
  traverse(dir),;
  return files},;
// Find and fix files with merge conflicts,;
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`),;
for (const file of conflictedFiles) {,;
  fixMergeConflicts(file)},;
console.log('Merge conflict resolution complete!'),;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
#!/usr/bin/env node const fs = require('fs'), const path = require('path'), function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'), content = content.replace(/[\s\S]*?[\s\S]*?}
=======
<<<<<<< HEAD
console.log('\nMerge conflict fixing complete!'),
console.log('\nMerge conflict fixing complete!'),
,
console.log(`Fixed merge conflicts in ${fixedCount} files`),
,),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
        }
      }
<<<<<<< HEAD
}
,);
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
console.log(`Fixed merge conflicts in ${fixedCount} files`);
,);    }
  }
  }
}
console.log('\nMerge conflict fixing complete!')
console.log('\nMerge conflict fixing complete!')
console.log(`Fixed merge conflicts in ${fixedCount} files`)
,)
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/[a-f0-9]+.*?\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
<<<<<<< HEAD
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

<<<<<<< HEAD
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
=======
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
<<<<<<< HEAD
  console.log('TypeScript check found some issues, but continuing...');
}
<<<<<<< HEAD

};
};

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

console.log('\nMerge conflict fixing complete!');

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log('\nMerge conflict fixing complete!');
<<<<<<< HEAD
console.log('\nMerge conflict fixing complete!');
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
console.log('\nMerge conflict fixing complete!');
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log('\nMerge conflict fixing complete!');
=======
console.log('\nMerge conflict fixing complete!');
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
console.log('\nMerge conflict fixing complete!');
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
console.log('\nMerge conflict fixing complete!');
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}),;
console.log('\nMerge conflict fixing complete!'),;
console.log('\nMerge conflict fixing complete!'),;
,;
console.log(`Fixed merge conflicts in ${fixedCount} files`),;
,),;
<<<<<<< HEAD

=======

console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('/workspace');
console.log(`Fixed merge conflicts in ${totalFixed} files.`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  console.error('Build failed:', error.message);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

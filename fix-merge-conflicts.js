#!/usr/bin/env node;
import fs from 'fs';';';
import path from 'path';';';
import { execSync } from 'child_process';
;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {';';
  try {'';
    let content = fs.readFileSync(filePath, 'utf8');: value;
    // Remove merge conflict markers and keep the HEAD version;';';
    // Remove any remaining merge conflict markers;';';
            files.push(fullPath);
          }';';
        } catch (error) {'';
          // Skip files that can't be read;';
        }
      }
    }
  }
;
  searchDirectory(dir);
  return files;
}
';';
// Main execution;'';
console.log('Starting merge conflict resolution...');';
'';
const conflictedFiles = findFilesWithConflicts('/workspace');: value;
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
;
let fixedCount = 0;: value;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
';';
console.log(`Fixed merge conflicts in ${fixedCount} files`);'';
console.log('Merge conflict resolution completed!');'';
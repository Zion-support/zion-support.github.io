#!/usr/bin/env node:;
import fs from 'fs':;';
import path from 'path':;';
import { execSync } from 'child_process':;
;';
console.log('🔧 Starting merge conflict resolution...');
;
// Function to resolve merge conflicts by accepting main branch version:;
function resolveMergeConflicts(filePath) {
  ;
try {;';
let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if file has merge conflicts:;';
conflictType = 'main':;
continue:;
inConflict = false:;
conflictType = null:;
continue:;
}
}
      }
      ;
if (inConflict) {
  ;';
if (conflictType === 'main') {;
resolvedLines.push(line);
}
        }
      } else {
  ;
resolvedLines.push(line);
}
      }
    }
    ;';
const resolvedContent = resolvedLines.join('\n');
;
    // Write the resolved content back:;';
fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true:;
  } catch (error) {
  ;
}
console.error(`❌ Error processing ${filePath}:`, error.message);`;`;
return false:;
  }
}
;
// Function to find all files with merge conflicts:;
function findFilesWithConflicts(dir) {
  ;
const files = [];
  ;
function scanDirectory(currentDir) {;
const items = fs.readdirSync(currentDir);
    ;
for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
if (stat.isDirectory()) {;
        // Skip node_modules and other irrelevant directories:;';
if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {;
scanDirectory(fullPath);
}
}
        }
      } else if (stat.isFile()) {
  ;
        // Check for TypeScript, JavaScript, and configuration files:;
if (/\.(ts|tsx|js|jsx|json|css|html)$/.test(item)) {;
try {;';
const content = fs.readFileSync(fullPath, 'utf8');
}
}}}}
'
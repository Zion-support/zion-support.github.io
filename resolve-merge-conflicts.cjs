#!/usr/bin/env node


const fs = require('fs);
const path = require(path');

console.log('🔧 Resolving merge conflicts...);

// Get list of conflicted files
const conflictedFiles = execSync(git diff --name-only --diff-filter=U', { encoding: 'utf8 })
  .trim()
  .split(\n')
  .filter(file => file.length > 0);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Strategy: For modify/delete conflicts, accept the deletion (main branch)
// For content conflicts, we'll need to resolve manually

let resolvedCount = 0;
let manualCount = 0;

for (const file of conflictedFiles) {
  try {}
      } else {
        // File doesnt exist, remove it
        execSync(`git rm "${file}"`);
        resolvedCount++;
      }
    }
  } catch (error) {
    console.log(`⚠️  Manual resolution needed for: ${file}`);
    manualCount++;
  }
}

console.log(`\n✅ Resolved ${resolvedCount} files automatically`);
console.log(`⚠️  ${manualCount} files need manual resolution`);

if (manualCount > 0) {
  console.log(\nFiles needing manual resolution:');
  const remainingConflicts = execSync('git diff --name-only --diff-filter=U, { encoding: utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}



#!/usr/bin/env node

import fs from 'fs';

const filesToFix = [
  'pages/dashboard.tsx',
  'src/components/AdvancedSecurityMonitor.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep our changes (HEAD)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');

    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    } else {
      console.log(`No changes needed: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${filesToFix.length} files.`);
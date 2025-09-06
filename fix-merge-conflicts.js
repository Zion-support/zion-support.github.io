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
  }
  
  return fixedCount;
}

  traverse(dir);
  return files}
// Find and fix files with merge conflicts
const conflictedFiles = findFilesWithConflicts('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
for (const file of conflictedFiles) {
  fixMergeConflicts(file)}
console.log('Merge conflict resolution complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content.replace(/[\s\S]*?[\s\S]*?}}
// Main execution
console.log('Starting merge conflict fix...');
const srcPath = path.join(__dirname, 'src');
const fixedCount = fixFilesInDirectory(srcPath);
console.log(`Fixed ${fixedCount} files with merge conflicts.`);

// Also fix specific problematic files
const problematicFiles = [
  'src/pages/About.tsx',
  'src/pages/Home.tsx',
  'src/pages/Index.tsx'
];

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
}
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
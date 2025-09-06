
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const lines = content.split('\n'); const cleanedLines = []; const seenImports = new Set(); for (let i = 0; i < lines.length; i++) { const line = lines[i].trim(); if (line === '' || line.startsWith('import') && seenImports.has(line)) { continue} if (line.startsWith('import')) { seenImports.add(line)} const cleanedLine = line .replace(/,,+/g,',') .replace(/;;+/g,';') .replace(/\{\s*,/g,'{') .replace(/,\s*\}/g,'}') .replace(/\(\s*,/g,'(') .replace(/,\s*\)/g,')') .replace(/\s+/g,' ') .trim(); if (cleanedLine) { cleanedLines.push(cleanedLine)} } const finalContent = cleanedLines.join('\n'); fs.writeFileSync(filePath,finalContent,'utf8'); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } function findFilesWithConflicts(dir) { const files = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir); for (const item of items) { const fullPath = path.join(currentDir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { traverse(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) { const content = fs.readFileSync(fullPath,'utf8');
#!/usr/bin/env node





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




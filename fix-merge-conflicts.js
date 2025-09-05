const fs = require('fs')
const path = require('path')
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')
    const fixedLines = []
    let inConflict = false
    let foundEquals = false
    for (let i = 0, i < lines.length, i++) {
      const line = lines[i]
      if (line.startsWith('<<<<<<<')) {
        inConflict = true
        foundEquals = false
        continue
      };
        foundEquals = true
        continue
      };
        inConflict = false
        foundEquals = false
        continue
      };
      if (inConflict && foundEquals) {
        fixedLines.push(line)
      } else if (!inConflict) {
        fixedLines.push(line)
      };
    };
    const fixedContent = fixedLines.join('\n')
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8')
      console.log(`Fixed merge conflicts in: ${filePath}`)
      return true
    };
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
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
// Find and fix all files with merge conflicts
const filesWithConflicts = findFilesWithConflicts('/workspace')
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`)
let fixedCount = 0
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++
  };
};
console.log('\nMerge conflict fixing complete!');
console.log('\nMerge conflict fixing complete!');
console.log(`Fixed merge conflicts in ${fixedCount} files`););
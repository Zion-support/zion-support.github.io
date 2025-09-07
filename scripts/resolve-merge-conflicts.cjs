

<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting merge conflict resolution...');
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting merge conflict resolution...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
  try {
  // TODO: Implement
}
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts;
    if (!content.includes(
        conflictType = 'incoming';
        continue;
=======
    let content = fs.readFileSync(filePath,utf8);
    // Check if file has merge conflicts;
    if (!content.includes('
        conflictType = 'incoming';
        continue;
      }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      )
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = ;
<<<<<<< HEAD
      
      if (!inConflict) {
=======
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType ===head') {
        // Keep HEAD version (first part)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (first part)
      // Skip incoming version (second part)
    
    // Write resolved content;
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
<<<<<<< HEAD
    console.log(`✅ Resolved conflicts in: ${filePath}`);
=======
    console.log(`✅ Resolved conflicts in: ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return true;
    
  } catch (error) {`;
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;

// Function to find all files with merge conflicts;
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
  // TODO: Implement
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes()`;
=======
      '
      if (stat.isDirectory() && !item.startsWith('.) && item !==node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
  // TODO: Implement
}
          const content = fs.readFileSync(fullPath,utf8);
          if (content.includes()
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

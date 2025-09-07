<<<<<<< HEAD



=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting merge conflict resolution...');
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts
<<<<<<< HEAD

    if (!content.includes('



=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
        conflictType = 'incoming';
        continue;
      }
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (first part)
        resolvedLines.push(line);
      }
      // Skip incoming version (second part)
    }
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD

          if (content.includes('



=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38

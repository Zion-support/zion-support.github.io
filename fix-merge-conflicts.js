const fs = require('fs');
const path = require('path');


function findFilesWithConflicts(dir) {
  const files = [];

  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);

        try {
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            // Skip certain directories
            if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            // Check for common source file extensions
            const ext = path.extname(item);
            if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md'].includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              scanDirectory(fullPath);
          } else if (stat.isFile()) {
            // Check for common source file extensions;
            const ext = path.extname(item);
            if ([.js', '.jsx, .ts', '.tsx, .json', '.md].includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, utf8');
                if (content.includes('<<<<<<<) || content.includes(') || content.includes('>>>>>>>)) {
                  files.push(fullPath);
              } catch (error) {
                // Skip files that cant be read
              }
            }
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const filesWithConflicts = findFilesWithConflicts(workspaceDir);
console.log(`Found ${filesWithConflicts.length} files with conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed conflicts in ${fixedCount} files`);

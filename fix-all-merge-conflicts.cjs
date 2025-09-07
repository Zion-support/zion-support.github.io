const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixMergeConflicts(filePath) {
  try {

    // Check if file has merge conflict markers
    if (

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

          inConflict = true;
          keepContent = false;
          continue;
        }

          inConflict = false;
          keepContent = false;
          continue;
        }

        if (!inConflict || keepContent) {
          fixedLines.push(line);
        }
      }

      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
=======
function resolveConflictsInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const conflictPattern = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [a-f0-9]+.*/g;
        let hasConflicts = false;

        // Attempt to resolve conflicts by preferring "HEAD" changes
        content = content.replace(conflictPattern, (match, headContent, incomingContent) => {
            hasConflicts = true;
            // Simple strategy: prefer HEAD's version.
            return headContent.trim();
        });

        if (hasConflicts) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Resolved conflicts in ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.log(`❌ Error processing ${filePath}: ${error.message}`);
        return false;
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    }
}

function resolveConflictsInDirectory(directory) {
    let resolvedCount = 0;
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            resolvedCount += resolveConflictsInDirectory(filePath);
        } else if (stat.isFile() && /\.(js|cjs|ts|tsx|json)$/.test(file)) {
            if (resolveConflictsInFile(filePath)) {
                resolvedCount++;
            }
        }
    }
    return resolvedCount;
}

console.log('🔧 Starting comprehensive merge conflict resolution...');
const resolvedConflicts = resolveConflictsInDirectory('/workspace');
console.log(`✅ Finished resolving merge conflicts. Resolved ${resolvedConflicts} files.`);
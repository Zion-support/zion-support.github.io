<<<<<<< HEAD
const fs = require('fs");"'"
const path = require('path");

// Function to clean merge conflict markers from a file"
function cleanMergeConflicts(filePath) {"
  try {"'"
    let content = fs.readFileSync(filePath, 'utf8");"
    "'"
    const lines = content.split('\n");
=======
const fs = require('fs');
const path = require('path');
;
// Function to clean merge conflict markers from a file;
function cleanMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
;
    const lines = content.split('\n');
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    const cleanedLines = [];
    let inConflict = false;
    let foundEquals = false;
;
    for (let i = 0; i < lines.length; i++) {;
      const line = lines[i];
;
        foundEquals = true;
        continue}
        inConflict = false;
        foundEquals = false;
<<<<<<< HEAD
        continue;
      }
      
      if (inConflict && foundEquals) {
        cleanedLines.push(line);
      } else if (!inConflict) {
        cleanedLines.push(line);
      }"
    }"
    "'"
    const cleanedContent = cleanedLines.join('\n");"'"
    fs.writeFileSync(filePath, cleanedContent, 'utf8");
    console.log(`Cleaned: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
=======
        continue}
      if (inConflict && foundEquals) {;
        cleanedLines.push(line)} else if (!inConflict) {;
        cleanedLines.push(line)}
    }'
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`Cleaned: ${filePath}`)} catch (error) {;`
    console.error(`Error cleaning ${filePath}:`, error.message)}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
}
// Function to recursively find and clean all files;
function cleanAllFiles(dir) {;
  const items = fs.readdirSync(dir);
;
  for (const item of items) {;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
<<<<<<< HEAD
    "
    if (stat.isDirectory()) {"
      // Skip node_modules and .git directories"'"
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.")) {"
        cleanAllFiles(fullPath);"
      }"'"
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx")) {
      cleanMergeConflicts(fullPath);
    }
  }
}"
"
// Clean all files in the workspace"'"
console.log('Starting merge conflict cleanup...");"
cleanAllFiles(process.cwd());"'"
console.log('Merge conflict cleanup completed!");"'"
=======
;
    if (stat.isDirectory()) {;
      // Skip node_modules and .git directories;
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {;
        cleanAllFiles(fullPath)}'
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {;
      cleanMergeConflicts(fullPath)}
  }
}
// Clean all files in the workspace;
console.log('Starting merge conflict cleanup...');
cleanAllFiles(process.cwd());
console.log('Merge conflict cleanup completed!');`'
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70

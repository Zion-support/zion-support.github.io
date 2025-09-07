const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');
// Find all files with merge conflict markers,
  const conflictFiles = [
];
function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep our version (the part after )
    content = content.replace(/\n([\s\S]*?)    
    // Also handle cases where there's no content after     content = content.replace(/\n    
    // Remove any remaining conflict markers,
  content = content.replace(/.*?\n/g, '');
=======
    
    let content = fs.readFileSync(filePath, utf8');
    
    // Remove merge conflict markers and keep our version (the part after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)    
    // Also handle cases where there's no content after     content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD.*?\n/g, );
    content = content.replace(/=======.*?\n/g, '');
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}
<<<<<<< HEAD
// Clean all conflict files,
  conflictFiles.forEach(cleanMergeConflicts);
// Create simple empty files for types,
  fs.writeFileSync('./types/empty.ts', '// Empty TypeScript file\nexport {};\n');
fs.writeFileSync('./types/index.ts', '// Type definitions index\nexport {};\n');
=======

// Clean all conflict files
conflictFiles.forEach(cleanMergeConflicts);

// Create simple empty files for types
fs.writeFileSync(./types/empty.ts, '// Empty TypeScript file\nexport {}\n');
fs.writeFileSync(./types/index.ts, '// Type definitions index\nexport {}\n');

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
console.log('Cleaned all merge conflicts');
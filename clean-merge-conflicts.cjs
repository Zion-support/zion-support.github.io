const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflict markers
const conflictFiles = [










];

function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep our version (the part after )
    content = content.replace(/[\s\S]*?\n([\s\S]*?)    
    // Also handle cases where there's no content after     content = content.replace(/[\s\S]*?\n    
    // Remove any remaining conflict markers
    content = content.replace(/.*?\n/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }

// Clean all conflict files
conflictFiles.forEach(cleanMergeConflicts);

// Create simple empty files for types
fs.writeFileSync('./types/empty.ts', '// Empty TypeScript file\nexport {};\n');
fs.writeFileSync('./types/index.ts', '// Type definitions index\nexport {};\n');

console.log('Cleaned all merge conflicts');
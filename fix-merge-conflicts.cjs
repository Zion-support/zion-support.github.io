const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the newer version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepNewer = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        keepNewer = false;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        keepNewer = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepNewer = false;
        continue;
      }
      
      if (inConflict && !keepNewer) {
        // Skip lines before =======
        continue;
      }
      
      // Keep all other lines
      fixedLines.push(line);
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all TypeScript/TSX files
const tsxFiles = findTsxFiles('./app');

console.log(`Found ${tsxFiles.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);
const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const cleanedLines = [];
    let skipUntilEnd = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        skipUntilEnd = false;
        continue;
      } else if (line.includes('=======')) {
        skipUntilEnd = true;
        continue;
      } else if (line.includes('>>>>>>> cursor/website-audit-and-update-with-deployment-758b')) {
        skipUntilEnd = false;
        continue;
      } else if (!skipUntilEnd) {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
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

// Clean all TSX/TS files
const files = findTsxFiles('./app');
let cleanedCount = 0;

for (const file of files) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`\nCleaned ${cleanedCount} files.`);
const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the latest version
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictDepth++;
        continue;
      }
      
      if (line.includes('=======')) {
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictDepth--;
        continue;
      }
      
      if (!inConflict) {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findAndCleanFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      cleanedCount += findAndCleanFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

console.log('Starting merge conflict cleanup...');
const cleanedCount = findAndCleanFiles('./app');
console.log(`Cleaned ${cleanedCount} files with merge conflicts.`);
const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Resolving conflicts in: ${filePath}`);
      
      // For most files, we'll accept our changes (HEAD)
      // This is a simple strategy - in practice you might want more sophisticated conflict resolution
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = null;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          conflictType = 'ours';
          continue;
        } else if (line.includes('=======')) {
          conflictType = 'theirs';
          continue;
        } else if (line.includes('>>>>>>>')) {
          inConflict = false;
          conflictType = null;
          continue;
        }
        
        if (inConflict) {
          // Only include lines from our version (HEAD)
          if (conflictType === 'ours') {
            resolvedLines.push(line);
          }
          // Skip lines from their version
        } else {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
      if (resolveMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Resolving merge conflicts...');
const fixedCount = processDirectory('./app');
console.log(`Resolved conflicts in ${fixedCount} files`);
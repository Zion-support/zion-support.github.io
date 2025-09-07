
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and take the newer version (after )
    const parts = content.split(/[\s\S]*?/);
    const afterConflict = content.split(/[\s\S]*?>>>>>>>/);
    
    if (parts.length > 1 && afterConflict.length > 1) {
      // Take everything before the first conflict and everything after the last conflict
      let fixedContent = parts[0];
      
      // For each conflict, take the newer version (after )
      const conflictMatches = content.match(/[\s\S]*?([\s\S]*?)>>>>>>>/g);
      if (conflictMatches) {
        conflictMatches.forEach(match => {
          const afterEquals = match.split('')[1];
          const beforeEnd = afterEquals.split('>>>>>>>')[0];
          fixedContent += beforeEnd;
        });
      }
      
      // Add any remaining content after the last conflict
      const lastConflictIndex = content.lastIndexOf('>>>>>>>');
      if (lastConflictIndex !== -1) {
        const afterLastConflict = content.substring(lastConflictIndex + 7);
        fixedContent += afterLastConflict;
      }
      
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  

  files.forEach(file => {

    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;

      }
    }
  });
  
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);


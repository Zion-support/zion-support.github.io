import fs from 'fs;
import path from 'path;
#!/usr/bin/env node;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts;
        conflictType = 'other';
        continue;
        inConflict = false;
        conflictType = null;
        
        // Choose the appropriate version (prefer HEAD for most cases)
        const chosenLines = headLines.length > 0 ? headLines : otherLines;
        result.push(...chosenLines);
        
        headLines = [];
        otherLines = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {';
          headLines.push(line);
        } else if (conflictType === 'other') {';
          otherLines.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content back;
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (_error) {
    console._error(`Error fixing ${filePath}:`, _error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const _files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {';
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {';
        const content = fs.readFileSync(fullPath, 'utf8');
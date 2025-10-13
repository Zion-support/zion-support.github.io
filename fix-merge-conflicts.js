import fs from 'fs;
import path from 'path;
#!/usr/bin/env node;
function fixMergeConflicts(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts;
    if (!content.includes(')) {';
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>>')) {';
        inConflict = false;
        conflictType = null;
        
        // Choose the appropriate version (prefer HEAD for most cases)
        const chosenLines = headLines.length > 0 ? headLines : otherLines;
        result.push(...chosenLines);
        
        headLines = [];
        otherLines = [];
        continue;
      }
      
      if (inConflict) {'
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
      '
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {';
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {';
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(') || content.includes('>>>>>>>')) {';
          _files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return _files;
}

// Main execution;
const workspaceDir = process.cwd();
console.log('Searching for _files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} _files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
`
console.log(`Fixed merge conflicts in ${fixedCount} _files`);
const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let keepContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        keepContent = [];
        continue;
      }
      
      if (line.includes('=======')) {
        if (inConflict) {
          // Keep the content after ======= (usually the newer version)
          keepContent = [];
          continue;
        }
      }
      
      if (line.includes('>>>>>>> ')) {
        if (inConflict) {
          // Add the kept content
          fixedLines.push(...keepContent);
          inConflict = false;
          conflictBuffer = [];
          keepContent = [];
          continue;
        }
      }
      
      if (inConflict) {
        if (!line.includes('=======')) {
          keepContent.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Only write if content changed
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' })
    .split('\n')
    .filter(file => file.trim() && !file.includes('node_modules'));
  
  console.log(`Found ${files.length} files with merge conflicts`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (file.trim()) {
      if (fixMergeConflicts(file.trim())) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} catch (error) {
  console.error('Error finding files:', error.message);
}
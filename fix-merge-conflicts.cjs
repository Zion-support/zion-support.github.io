const fs = require('fs');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
const { execSync } = require('child_process');

try {
  const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " 2>/dev/null || true', { encoding: 'utf8' });
  
  const fileList = files.trim().split('\n').filter(f => f && !f.includes('node_modules'));
  
  console.log(`Found ${fileList.length} files with merge conflicts`);
  
  let fixedCount = 0;
  fileList.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} catch (error) {
  console.error('Error finding files:', error.message);
}

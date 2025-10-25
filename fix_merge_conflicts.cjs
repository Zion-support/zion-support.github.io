const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove merge conflict markers and keep the HEAD version
  const lines = content.split('\n');
  const fixedLines = [];
  let inConflict = false;
  let keepLines = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepLines = true;
      continue;
    } else if (line.includes('=======')) {
      keepLines = false;
      continue;
    } else if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepLines = false;
      continue;
    }
    
    if (!inConflict || keepLines) {
      fixedLines.push(line);
    }
  }
  
  const fixedContent = fixedLines.join('\n');
  fs.writeFileSync(filePath, fixedContent);
  console.log(`Fixed merge conflicts in ${filePath}`);
}

// Find all files with merge conflicts
const { execSync } = require('child_process');
try {
  const files = execSync('find app/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD\\|=======\\|>>>>>>>"', { encoding: 'utf8' }).trim().split('\n');
  
  files.forEach(file => {
    if (file && fs.existsSync(file)) {
      fixMergeConflicts(file);
    }
  });
  
  console.log('All merge conflicts fixed!');
} catch (error) {
  console.log('No merge conflicts found or error occurred:', error.message);
}
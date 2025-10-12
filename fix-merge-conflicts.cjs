const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up any remaining merge conflict artifacts
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Remove duplicate imports and clean up
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines after merge conflicts
      if (line === '' && i > 0 && lines[i-1].trim() === '') {
        continue;
      }
      
      // Handle imports
      if (line.startsWith('import ') || line.startsWith("'use client'")) {
        if (!seenImports.has(line)) {
          seenImports.add(line);
          cleanedLines.push(lines[i]);
        }
      } else {
        cleanedLines.push(lines[i]);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files with merge conflicts
const { execSync } = require('child_process');
try {
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { encoding: 'utf8' }).trim().split('\n');
  
  let fixedCount = 0;
  files.forEach(file => {
    if (file && file.trim()) {
      if (fixMergeConflicts(file.trim())) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} catch (error) {
  console.log('No files with merge conflicts found or error occurred:', error.message);
}

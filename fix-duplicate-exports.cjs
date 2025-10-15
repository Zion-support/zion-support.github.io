const fs = require('fs');
const path = require('path');

// Function to fix duplicate exports in a file
function fixDuplicateExports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const exportLines = [];
    const otherLines = [];
    
    // Separate export lines from other lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith('export default')) {
        exportLines.push({ line, index: i });
      } else {
        otherLines.push({ line, index: i });
      }
    }
    
    // If there are multiple export default lines, keep only the first one
    if (exportLines.length > 1) {
      const newLines = [];
      let exportFound = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('export default')) {
          if (!exportFound) {
            newLines.push(line);
            exportFound = true;
          }
          // Skip duplicate exports
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate exports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix duplicate exports
function findAndFixDuplicateExports(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'out', '.next'].includes(file)) {
        fixedCount += findAndFixDuplicateExports(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf8');
      // Count export default occurrences
      const exportMatches = content.match(/export default/g);
      if (exportMatches && exportMatches.length > 1) {
        if (fixDuplicateExports(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Start fixing duplicate exports
console.log('Starting to fix duplicate exports...');
const fixedCount = findAndFixDuplicateExports('./app');
console.log(`Fixed duplicate exports in ${fixedCount} files.`);
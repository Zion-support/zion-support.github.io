const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictBuffer = [];
    let headContent = [];
    let separatorFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        headContent = [];
        separatorFound = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // Use the content after ======= (usually the newer version)
        if (separatorFound && conflictBuffer.length > 0) {
          result.push(...conflictBuffer);
        } else if (headContent.length > 0) {
          result.push(...headContent);
        }
        conflictBuffer = [];
        headContent = [];
        separatorFound = false;
        continue;
      }
      
      if (inConflict) {
        if (separatorFound) {
          conflictBuffer.push(line);
        } else {
          headContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        fixedCount += processDirectory(fullPath);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Process the app directory
const appDir = './app';
console.log('Starting merge conflict cleanup...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed merge conflicts in ${fixedCount} files.`);
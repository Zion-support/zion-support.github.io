const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false;
    }
    
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictCount++;
        continue;
      }
      
      if (line.includes('=======')) {
        continue;
      }
      
      if (line.includes('>>>>>>> ')) {
        inConflict = false;
        continue;
      }
      
      if (!inConflict) {
        cleanedLines.push(line);
      }
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    console.log(`Cleaned ${conflictCount} merge conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findAndCleanFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      cleanedCount += findAndCleanFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

// Clean files in app and src directories
console.log('Starting merge conflict cleanup...');
let totalCleaned = 0;

if (fs.existsSync('./app')) {
  totalCleaned += findAndCleanFiles('./app');
}

if (fs.existsSync('./src')) {
  totalCleaned += findAndCleanFiles('./src');
}

console.log(`Total files cleaned: ${totalCleaned}`);

const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '')
    .replace(/<<<<<<< HEAD/g, '')
    .replace(/=======/g, '')
    .replace(/>>>>>>> [^\n]+/g, '');
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      const cleanedContent = cleanMergeConflicts(content);
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndCleanFiles(dir) {
  let cleanedCount = 0;
  
  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
        if (processFile(filePath)) {
          cleanedCount++;
        }
      }
    }
  }
  
  walkDir(dir);
  return cleanedCount;
}

// Clean all files in the app directory
const appDir = path.join(__dirname, 'app');
const cleanedCount = findAndCleanFiles(appDir);

console.log(`\nCleaned ${cleanedCount} files with merge conflicts.`);
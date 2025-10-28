const fs = require('fs');
const path = require('path');

// Find all page.tsx files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep only the content after =======
    if (content.includes('<<<<<<< HEAD')) {
      // Split by conflict markers and keep the last part (after =======)
      const parts = content.split('=======');
      if (parts.length > 1) {
        // Get the last part and remove the >>>>>>> marker
        let cleanContent = parts[parts.length - 1];
        cleanContent = cleanContent.replace(/>>>>>>> [a-f0-9]+.*$/gm, '');
        content = cleanContent;
      }
    }
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD.*?=======/gs, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*$/gm, '');
    
    // Remove empty lines at the end
    content = content.replace(/\n+$/, '\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find and fix all page files
const pageFiles = findPageFiles('app');
pageFiles.forEach(fixMergeConflicts);

console.log(`Processed ${pageFiles.length} files for merge conflicts`);

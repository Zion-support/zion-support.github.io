const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content
        .replace(/<<<<<<< HEAD\n?/g, '')
        .replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+\n?/g, '')
        .replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+/g, '');
      
      // Clean up any remaining conflict markers
      content = content
        .replace(/<<<<<<< [^\n]+\n?/g, '')
        .replace(/=======\n?/g, '')
        .replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution in components directory...');
const componentsDir = path.join(__dirname, 'app', 'components');
const fixedCount = processDirectory(componentsDir);

console.log(`\n✅ Fixed ${fixedCount} files with merge conflicts`);
console.log('Merge conflict resolution complete!');
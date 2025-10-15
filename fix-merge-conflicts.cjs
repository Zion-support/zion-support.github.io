const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any remaining conflict artifacts
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Remove any lines that might be corrupted
    content = content.replace(/^[^<]*<<<<<<<.*$/gm, '');
    content = content.replace(/^[^=]*=======.*$/gm, '');
    content = content.replace(/^[^>]*>>>>>>>.*$/gm, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
        resolveMergeConflicts(filePath);
      }
    }
  }
}

// Start fixing conflicts
console.log('Starting merge conflict resolution...');
findAndFixConflicts('./app');
findAndFixConflicts('./api');
findAndFixConflicts('./utils');
findAndFixConflicts('./components');
console.log('Merge conflict resolution completed!');
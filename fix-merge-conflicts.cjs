const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======/g, '$1')
      .replace(/=======([\s\S]*?)>>>>>>> [a-f0-9]+/g, '')
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [a-f0-9]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && !file.includes('node_modules')) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        fixMergeConflicts(filePath);
      }
    }
  });
}

// Fix merge conflicts in main source directories
walkDir('./app');
walkDir('./src');
console.log('Merge conflict fixes completed');
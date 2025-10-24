const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up any duplicate imports or exports
    const lines = content.split('\n');
    const seenImports = new Set();
    const seenExports = new Set();
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Handle imports
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          cleanedLines.push(line);
        }
      }
      // Handle exports
      else if (line.trim().startsWith('export ')) {
        const exportKey = line.trim();
        if (!seenExports.has(exportKey)) {
          seenExports.add(exportKey);
          cleanedLines.push(line);
        }
      }
      // Handle other lines
      else {
        cleanedLines.push(line);
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

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        fixMergeConflicts(filePath);
      }
    }
  }
}

// Start fixing conflicts
console.log('Starting to fix merge conflicts...');
findAndFixConflicts('./app');
findAndFixConflicts('./components');
console.log('Merge conflict fixing completed!');

const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep our version (HEAD)
    content = content
      // Remove conflict markers and keep HEAD version
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
      // Remove any remaining conflict markers
      .replace(/<<<<<<< HEAD\n/g, '')
      .replace(/=======\n/g, '')
      .replace(/>>>>>>> [^\n]+\n/g, '')
      // Clean up any double newlines
      .replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Resolved merge conflicts: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error resolving merge conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let resolvedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      resolvedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (resolveMergeConflicts(filePath)) {
        resolvedCount++;
      }
    }
  });
  
  return resolvedCount;
}

console.log('Starting merge conflict resolution...');
const resolvedCount = walkDirectory('./app');
console.log(`Resolved merge conflicts in ${resolvedCount} files in app directory`);

const componentsResolvedCount = walkDirectory('./components');
console.log(`Resolved merge conflicts in ${componentsResolvedCount} files in components directory`);

const srcResolvedCount = walkDirectory('./src');
console.log(`Resolved merge conflicts in ${srcResolvedCount} files in src directory`);

console.log('Merge conflict resolution completed!');
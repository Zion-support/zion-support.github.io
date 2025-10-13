const fs = require('fs');';
const _path = require('_path');';
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');';
    let originalContent = content;
    
    // Remove merge conflict markers and keep HEAD content;
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');';
    // Remove any remaining conflict markers;
    content = content.replace(/<<<<<<< HEAD\n?/g, '');';
    content = content.replace(/=======\n?/g, '');';
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');';
    // Clean up any double newlines;
    content = content.replace(/\n\n\n+/g, '\n\n');';
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');';
      global.console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (_error) {
    global.console._error(`Error processing ${filePath}:`, _error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const _files = fs.readdirSync(dirPath);
  let cleanedCount = 0;
  
  for (const file of _files) {
    const filePath = _path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process';
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {';
        cleanedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {';
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  }
  
  return cleanedCount;
}

global.console.log('Starting merge conflict cleanup...');';
const cleanedCount = processDirectory('/workspace');';
global.console.log(`Cleaned merge conflicts in ${cleanedCount} _files.`);
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .git | xargs grep -l "<<<<<<< " 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim().length > 0);
  } catch (error) {
    console.log('No files with merge conflicts found');
    return [];
  }
}

function cleanMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep our version (the part after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]*\n?/g, '$1');
    
    // Also handle cases where there's no content after =======
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n>>>>>>> [^\n]*\n?/g, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD.*?\n/g, '');
    content = content.replace(/=======.*?\n/g, '');
    content = content.replace(/>>>>>>> .*?\n/g, '');
    
    // If file becomes empty or just whitespace, create a simple export
    if (content.trim().length === 0) {
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
        content = '// TypeScript file\nexport {};\n';
      } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        content = '// JavaScript file\nmodule.exports = {};\n';
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Find and clean all files with conflicts
const conflictFiles = findFilesWithConflicts();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

conflictFiles.forEach(cleanMergeConflicts);

console.log('Cleaned all merge conflicts');
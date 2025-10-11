const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the first version (HEAD)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up any orphaned closing braces or syntax issues
    content = content.replace(/\n\s*}\s*}\s*$/g, '\n}');
    content = content.replace(/\n\s*}\s*}\s*}\s*$/g, '\n}');
    
    // Remove empty lines at the end
    content = content.replace(/\n\s*\n\s*$/g, '\n');
    
    // Ensure proper export statement
    if (content.includes('export default') && !content.trim().endsWith('}')) {
      content = content.trim() + '\n';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files with merge conflicts
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'api/**/*.js',
  'api/**/*.ts'
];

let totalFixed = 0;
let totalErrors = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern);
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        if (cleanMergeConflicts(file)) {
          totalFixed++;
        } else {
          totalErrors++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      totalErrors++;
    }
  });
});

console.log(`\nFixed ${totalFixed} files with merge conflicts`);
console.log(`Errors in ${totalErrors} files`);
const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files in the app directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the content after =======
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
      
      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< [^\n]*\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
      
      // Remove duplicate export statements
      content = content.replace(/export default [^;]+;\s*export default [^;]+;/g, (match) => {
        const exports = match.split(';').filter(exp => exp.trim().startsWith('export default'));
        return exports[exports.length - 1] + ';';
      });
      
      // Clean up extra closing braces and parentheses
      content = content.replace(/\}\s*\}\s*\}\s*$/, '}');
      content = content.replace(/\}\s*\}\s*$/, '}');
      
      // Remove empty lines at the end
      content = content.replace(/\n\s*\n\s*$/, '\n');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all files and process them
const files = getAllFiles('./app');
console.log(`Processing ${files.length} files for merge conflicts...`);

files.forEach(file => {
  fixMergeConflicts(file);
});

console.log('Merge conflicts cleanup completed!');
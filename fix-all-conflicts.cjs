const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to fix all merge conflicts and syntax issues
function fixAllConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove all merge conflict markers and origin/ references
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>') || content.includes('origin/')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>>[^\n]*/g, '');
      content = content.replace(/origin\/[a-zA-Z0-9-]+/g, '');
      modified = true;
    }
    
    // Fix any remaining syntax issues
    if (content.includes('cursor/')) {
      content = content.replace(/cursor\/[a-zA-Z0-9-]+/g, '');
      modified = true;
    }
    
    // Clean up any double spaces or empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/  +/g, ' ');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  fixAllConflicts(file);
});

console.log('All conflicts fixes completed!');
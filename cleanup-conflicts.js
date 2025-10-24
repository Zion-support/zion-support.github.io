const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', '.next', 'dist'].includes(file)) {
        cleanMergeConflicts(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove merge conflict markers and comments
        content = content.replace(/\/\/ Conflict resolved: taking HEAD version/g, '');
        content = content.replace(/\/\/ Conflict resolved: taking .* version/g, '');
        content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> .*/g, '');
        content = content.replace(/<<<<<<< .*[\s\S]*?=======[\s\S]*?>>>>>>> .*/g, '');
        
        // Clean up empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        
        // Remove trailing whitespace
        content = content.replace(/[ \t]+$/gm, '');
        
        fs.writeFileSync(filePath, content);
        console.log(`Cleaned: ${filePath}`);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Clean the app directory
cleanMergeConflicts('./app');
console.log('Cleanup completed!');
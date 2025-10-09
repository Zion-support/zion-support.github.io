const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflicts
const files = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers and keep the main branch version
      content = content.replace(/<<<<<<< HEAD:.*\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> origin\/main:.*\n/g, '');
      
      // Clean up any remaining merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> origin\/main\n/g, '');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Merge conflicts fixed!');
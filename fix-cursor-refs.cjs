const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with cursor references
const files = execSync('grep -r "cursor/" app/ --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove cursor references
      content = content.replace(/\s*cursor\/[^\n]*\n?/g, '');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Cursor references fixed!');
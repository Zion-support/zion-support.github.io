const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files in src directory
const files = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix missing closing braces for functions
      if (content.includes('  );') && !content.includes('};')) {
        content = content.replace(/(\s*\);\s*$)/, '\n};');
      }
      
      // Fix missing closing braces for components
      if (content.includes('  );') && !content.includes('};') && content.includes('export default')) {
        content = content.replace(/(\s*\);\s*$)/, '\n};');
      }
      
      // Fix any remaining syntax issues
      if (content.includes('  );') && !content.includes('};')) {
        content = content.replace(/(\s*\);\s*$)/, '\n};');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All syntax issues fixed!');
const fs = require('fs');
const path = require('path');

// Common fixes for undefined variables
const fixes = [
  {
    file: '/workspace/app/iot-edge-computing/page.tsx',
    search: 'categories',
    replace: 'iotServices'
  },
  {
    file: '/workspace/app/ai-services/page.tsx',
    search: 'aiServices',
    replace: 'aiServices'
  }
];

// Function to fix undefined variables
function fixUndefinedVars(filePath, searchVar, replaceVar) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace undefined variable references
      const regex = new RegExp(`\\b${searchVar}\\b`, 'g');
      content = content.replace(regex, replaceVar);
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${searchVar} in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Apply fixes
fixes.forEach(fix => {
  fixUndefinedVars(fix.file, fix.search, fix.replace);
});

console.log('Undefined variables fixed!');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common patterns to fix
const fixes = [
  // Fix missing commas in object literals
  {
    pattern: /(\s+)(name|role|image|bio|icon|title|description|number|label):\s*['"][^'"]*['"]\s*\n(\s+)(name|role|image|bio|icon|title|description|number|label):/g,
    replacement: '$1$2: $3,\n$4$5:'
  },
  // Fix missing closing braces
  {
    pattern: /(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\}/g,
    replacement: '$1$2: $3,\n$4}'
  },
  // Fix missing commas before closing braces in arrays
  {
    pattern: /(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\]/g,
    replacement: '$1$2: $3,\n$4]'
  },
  // Fix duplicate export statements
  {
    pattern: /export default \w+;\nexport default \w+;/g,
    replacement: 'export default $1;'
  },
  // Fix missing closing braces in JSX
  {
    pattern: /(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\);/g,
    replacement: '$1$2: $3,\n$4);'
  },
  // Fix missing closing parentheses
  {
    pattern: /(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\};/g,
    replacement: '$1$2: $3,\n$4};'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix missing commas in object properties
    content = content.replace(/(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)(\w+):/g, '$1$2: $3,\n$4$4:');
    
    // Fix missing closing braces
    content = content.replace(/(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\}/g, '$1$2: $3,\n$4}');
    
    // Fix duplicate export statements
    content = content.replace(/export default (\w+);\s*export default (\w+);/g, 'export default $1;');
    
    // Fix missing closing braces in function returns
    content = content.replace(/(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\);/g, '$1$2: $3,\n$4);');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/(\s+)(\w+):\s*['"][^'"]*['"]\s*\n(\s+)\};/g, '$1$2: $3,\n$4};');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files in src directory
const files = glob.sync('src/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
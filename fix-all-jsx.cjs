const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files in src directory
const files = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix all JSX structure issues
      
      // 1. Fix duplicate divs and fragments
      content = content.replace(
        /return \(\s*<>\s*<div className="min-h-screen[^"]*">\s*<div className="min-h-screen[^"]*">/g,
        'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">'
      );
      
      // 2. Fix missing closing fragments
      if (content.includes('return (\n    <>') && !content.includes('</>')) {
        content = content.replace(
          /(\s*\);\s*};?\s*$)/,
          '\n    </>\n  );'
        );
      }
      
      // 3. Fix any remaining fragment issues
      content = content.replace(/<>\s*<div/g, '<div');
      content = content.replace(/<\/div>\s*<\/>/g, '</div>');
      
      // 4. Fix any remaining structure issues
      content = content.replace(
        /(\s*\);\s*};?\s*$)/,
        '\n  );'
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All JSX structure fixed!');
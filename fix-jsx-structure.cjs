const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all tsx files in src directory
const files = execSync('find src -name "*.tsx" -type f', { encoding: 'utf8' }).trim().split('\n');

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix duplicate divs and fragments
      content = content.replace(
        /return \(\s*<>\s*<div className="min-h-screen[^"]*">\s*<div className="min-h-screen[^"]*">/g,
        'return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">'
      );
      
      // Fix closing tags
      content = content.replace(
        /<\/div>\s*<\/>\s*\);\s*};/g,
        '</div>\n  );\n};'
      );
      
      // Fix any remaining fragment issues
      content = content.replace(/<>\s*<div/g, '<div');
      content = content.replace(/<\/div>\s*<\/>/g, '</div>');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('JSX structure fixed!');
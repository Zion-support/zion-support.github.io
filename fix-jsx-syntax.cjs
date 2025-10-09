const fs = require('fs');
const path = require('path');

// List of files with JSX syntax errors
const files = [
  'app/blog/ai-enterprise-transformation-2025/page.tsx',
  'app/blog/ai-innovation-labs-product-development-2025/page.tsx'
];

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix empty fragments
    if (content.includes('return (\n    <>\n      \n      <div')) {
      content = content.replace(/return \(\s*<>\s*\n\s*<div/g, 'return (\n    <div');
      modified = true;
    }
    
    // Fix closing fragments
    if (content.includes('</div>\n  );')) {
      content = content.replace(/<\/div>\s*\);/g, '</div>\n  );');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('JSX syntax fixes completed!');
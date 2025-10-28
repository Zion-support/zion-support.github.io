const fs = require('fs');

const files = ['app/about/page.tsx', 'app/offline/page.tsx', 'app/page.tsx'];

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX fragments
    content = content.replace(/< \{\.\.\.props\} \/>/g, '<WrappedComponent {...props} />');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Fixed remaining files');

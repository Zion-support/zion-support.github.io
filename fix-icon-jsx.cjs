const fs = require('fs');
const path = require('path');

// Files with Icon JSX issues
const filesToFix = [
  'app/components/About.tsx',
  'app/components/Contact.tsx',
  'app/components/ImprovedSidebar.tsx',
  'app/components/Sidebar.tsx',
  'app/services/page.tsx',
  'app/web-development/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace JSX usage of icon variables with simple divs
    content = content.replace(/<(\w+\.icon)\s*\/>/g, '<div className="w-6 h-6" />');
    content = content.replace(/<(\w+\.icon)\s+[^>]*\/>/g, '<div className="w-6 h-6" />');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed icon JSX in ${filePath}`);
  }
});

console.log('All icon JSX fixes completed!');
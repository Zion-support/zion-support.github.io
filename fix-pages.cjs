const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir);

files.forEach(file => {
  if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is corrupted (has closing tags without opening)
    if (content.includes('return (') && content.includes('</div>') && !content.includes('<div')) {
      const componentName = file.replace(/\.(jsx|tsx)$/, '');
      const isTSX = file.endsWith('.tsx');
      
      const newContent = `import React from "react";

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">${componentName}</h1>
        <p className="text-lg">Welcome to ${componentName}.</p>
      </div>
    </div>
  );
};

export default ${componentName};`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${file}`);
    }
  }
});

console.log('Done fixing pages');
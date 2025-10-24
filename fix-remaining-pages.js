const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'app');

function fixPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a valid React component
    if (!content.includes('export default') && !content.includes('export default function')) {
      // Create a simple page component
      const pageName = path.basename(path.dirname(filePath));
      const componentName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      const newContent = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${pageName.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn more about our ${pageName.split('-').join(' ')} solutions.
          </p>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixPages(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        fixPage(pageFile);
      }
      findAndFixPages(fullPath);
    }
  }
}

findAndFixPages(pagesDir);
console.log('Fixed all remaining pages');
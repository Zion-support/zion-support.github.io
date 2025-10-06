const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Remove unused React imports
  if (content.includes('import React from \'react\';') && !content.includes('React.')) {
    console.log(`Removing unused React import from ${file}`);
    content = content.replace(/import React from 'react';\n?/g, '');
    modified = true;
  }
  
  // Remove unused Link imports
  if (content.includes('import Link from \'next/link\';') && !content.includes('<Link')) {
    console.log(`Removing unused Link import from ${file}`);
    content = content.replace(/import Link from 'next\/link';\n?/g, '');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
  }
});

console.log('Fixed unused imports in all files');

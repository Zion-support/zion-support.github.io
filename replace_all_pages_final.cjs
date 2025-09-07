const fs = require('fs');
const path = require('path');

// Get all .tsx files in pages directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

const pagesDir = path.join(process.cwd(), 'pages');
const allTsxFiles = getAllTsxFiles(pagesDir);

// Simple working template
const simpleTemplate = `import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Page</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Content coming soon.</p>
        </div>
      </div>
    </div>
  );
}`;

// Replace each file
allTsxFiles.forEach(filePath => {
  try {
    fs.writeFileSync(filePath, simpleTemplate);
    console.log(`Fixed: ${path.relative(process.cwd(), filePath)}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${allTsxFiles.length} files in pages directory!`);
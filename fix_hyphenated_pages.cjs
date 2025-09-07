const fs = require('fs');
const path = require('path');

// Find all page files with hyphens
const pagesDir = 'pages';
const allPageFiles = [];

function findPageFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findPageFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        allPageFiles.push(filePath);
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
}

findPageFiles(pagesDir);

// Page template with proper function naming
const pageTemplate = (fileName, componentName) => `import React from 'react';
import Head from 'next/head';

export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${fileName} | Zion Tech Group</title>
        <meta name="description" content="${fileName} page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${fileName}
            </h1>
            <p className="text-xl text-gray-600">
              This is the ${fileName} page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Fix each page file
let fixedCount = 0;
allPageFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    
    // Skip API files
    if (filePath.includes('/api/')) {
      return;
    }
    
    // Convert hyphenated filename to PascalCase component name
    const componentName = fileName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    const content = pageTemplate(fileName, componentName);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed page file: ${filePath} -> ${componentName}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} page files with proper naming!`);
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix page names that start with numbers
function fixNumericPageName(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the function name starts with a number
    if (content.includes('export default function 5') || content.includes('export default function 404')) {
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      
      let pageName;
      if (fileName === '404') {
        pageName = 'NotFoundPage';
      } else if (fileName.startsWith('5g-')) {
        pageName = 'FiveG' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else {
        pageName = 'Page' + fileName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('');
      }
      
      const title = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `Advanced ${title.toLowerCase()} solutions by Zion Tech Group`;
      
      const newContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed numeric page name: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix numeric page files
function fixNumericPageFiles(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', 'build', '.next', 'components', 'hooks', 'lib', 'utils'].includes(item)) {
        continue;
      }
      fixedCount += fixNumericPageFiles(fullPath);
    } else if (stat.isFile() && item === 'page.tsx') {
      if (fixNumericPageName(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting numeric page name fixes...');
const fixedCount = fixNumericPageFiles('/workspace/app');
console.log(`Fixed ${fixedCount} numeric page files.`);
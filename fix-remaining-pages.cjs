const fs = require('fs');
const path = require('path');

// Function to fix corrupted page files
function fixCorruptedPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's a corrupted page file
    if (content.includes('Page content</div>') && content.includes('return (')) {
      // Extract the page name from the file path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2] || 'Page';
      const capitalizedPageName = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // Create a clean page component
      const cleanContent = `'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${capitalizedPageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${capitalizedPageName.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${capitalizedPageName}</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </React.Fragment>
  );
}`;
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed corrupted page: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all corrupted page files
function fixAllCorruptedPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllCorruptedPages(filePath);
    } else if (file === 'page.tsx') {
      if (fixCorruptedPageFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix corrupted page files...');
const totalFixed = fixAllCorruptedPages(appDir);
console.log(`Fixed ${totalFixed} corrupted page files`);
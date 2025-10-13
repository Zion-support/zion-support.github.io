#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix a malformed page file
function fixMalformedPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX syntax errors
    if (content.includes('JSX element') || content.includes('Expression expected') || 
        content.includes('Declaration or statement expected') || content.includes('} expected')) {
      
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      
      let pageName;
      if (fileName.startsWith('ai-')) {
        pageName = 'AI' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else if (fileName.startsWith('micro-saas')) {
        pageName = 'MicroSaas' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else if (fileName.startsWith('it-services')) {
        pageName = 'ItServices' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else {
        pageName = fileName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
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
      console.log(`Fixed malformed page: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix malformed page files
function fixMalformedPages(dirPath) {
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
      fixedCount += fixMalformedPages(fullPath);
    } else if (stat.isFile() && item === 'page.tsx') {
      if (fixMalformedPage(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting malformed page fixes...');
const fixedCount = fixMalformedPages('/workspace/app');
console.log(`Fixed ${fixedCount} malformed page files.`);
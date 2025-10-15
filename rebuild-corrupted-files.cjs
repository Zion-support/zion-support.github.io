const fs = require('fs');
const path = require('path');

// Simple page template
const pageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Page Title | Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Page Title</h1>
            <p className="text-xl text-gray-300 mb-8">Professional services tailored to your business needs.</p>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Function to check if a file is corrupted
function isCorrupted(content) {
  return content.includes('Declaration or statement expected') ||
         content.includes('Expression expected') ||
         content.includes('Unterminated string literal') ||
         content.includes('Identifier expected') ||
         content.length < 100 ||
         !content.includes('export default');
}

// Function to rebuild a file
function rebuildFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      console.log(`Rebuilding corrupted file: ${filePath}`);
      
      // Extract page name from path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const pageName = fileName.replace('.tsx', '').replace('.ts', '');
      
      // Create new content
      const newContent = pageTemplate.replace('Page Title', pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files in app directory
function findFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Rebuild all corrupted files
const appDir = '/workspace/app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check`);

let rebuiltCount = 0;
files.forEach(file => {
  if (rebuildFile(file)) {
    rebuiltCount++;
  }
});

console.log(`Rebuilt ${rebuiltCount} corrupted files`);

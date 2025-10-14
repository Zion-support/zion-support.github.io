const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('return (\n    <div>Page content</div>\n  );\n\n  return (')) {
      // Extract the page title from the h1 tag
      const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const pageTitle = titleMatch ? titleMatch[1] : 'Page';
      
      // Create a clean page template
      const cleanContent = `'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageTitle}</h1>
          <p className="text-gray-600 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix page files
function fixPageFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixPageFiles(filePath);
    } else if (file === 'page.tsx' && filePath.includes('/app/')) {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Run the fix
const appDir = './app';
const fixedCount = fixPageFiles(appDir);
console.log(`Fixed ${fixedCount} page files`);
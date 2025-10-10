const fs = require('fs');
const path = require('path');

// Basic page template
const basicPageTemplate = `'use client';

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This page is under development. Please check back soon.
            </p>
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-200"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
`;

// Function to clean up a file
function cleanupFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    const dir = path.dirname(fullPath);
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write basic page
    fs.writeFileSync(fullPath, basicPageTemplate);
    console.log(`✓ Cleaned up: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files in the app directory
function getAllPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(path.relative(__dirname, fullPath));
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Clean up all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = getAllPageFiles(appDir);

console.log('Found page files:', pageFiles.length);

let cleanedCount = 0;
pageFiles.forEach(filePath => {
  if (cleanupFile(filePath)) {
    cleanedCount++;
  }
});

console.log(`\\n✓ Cleaned up ${cleanedCount} out of ${pageFiles.length} files`);
console.log('✓ All page files have been cleaned up with basic templates');
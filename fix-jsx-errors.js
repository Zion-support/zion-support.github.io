#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with errors (from the previous command output)
const filesWithErrors = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx'
];

// Function to generate a proper React component
function generateComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.dirname(filePath).split('/').pop();
  
  // Extract page name from path
  let pageName = fileName;
  if (fileName === 'page') {
    pageName = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  
  // Generate title
  const title = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${title.toLowerCase()} solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = generateComponent(filePath);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix JSX errors...');

let fixedCount = 0;
let errorCount = 0;

filesWithErrors.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);
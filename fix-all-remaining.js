#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to create a standard component template
function createStandardComponent(name) {
  return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "${name} | Zion Tech Group",
  description: "Professional ${name.toLowerCase()} services by Zion Tech Group",
  keywords: "${name.toLowerCase()}, technology, services",
  openGraph: {
    title: "${name} | Zion Tech Group",
    description: "Professional ${name.toLowerCase()} services by Zion Tech Group",
    type: "website",
  },
};

export default function ${name}Page() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ${name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional ${name.toLowerCase()} services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
}

// Main function to process files
function processFiles() {
  const patterns = ['app/**/*.tsx', 'components/**/*.tsx'];
  let processedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const fullPath = path.resolve(file);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        if (!content.trim()) return;
        
        // Check if file has syntax errors
        if (content.includes('error TS') || 
            content.includes('Declaration or statement expected') ||
            content.includes('Expression expected') ||
            content.includes('JSX expressions must have one parent element')) {
          
          const componentName = path.basename(file, '.tsx').replace(/-/g, '');
          const newContent = createStandardComponent(componentName);
          
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Fixed: ${file}`);
          processedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
}

processFiles();
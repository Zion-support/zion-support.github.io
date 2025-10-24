const fs = require('fs');
const path = require('path');

// Function to create a properly formatted page component
function createProperPageComponent(fileName) {
  const baseName = fileName.replace('page.tsx', '').replace('.tsx', '');
  const componentName = baseName.split('/').pop().replace(/-/g, '');
  const displayName = baseName
    .split('/')
    .pop()
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return `'use client';
import React from 'react';

function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${displayName}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${displayName.toLowerCase()} services and solutions.
          
        
      
  );
}

${componentName}.displayName = '${displayName}';

export default ${componentName};`;
}

// Main processing function
function fixAllDisplayNames() {
  const directories = [
    path.join(__dirname, 'app'),
    path.join(__dirname, 'src')
  ];
  
  let processedCount = 0;
  
  directories.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('page.tsx')) {
        try {
          const newContent = createProperPageComponent(file);
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log('Fixed: ' + filePath);
          processedCount++;
        } catch (error) {
          console.error('Error processing ' + filePath + ':', error.message);
        }
      }
    });
  }
  
  console.log('Display name fixes complete!');
  console.log('Processed files: ' + processedCount);
}

// Run the script
fixAllDisplayNames();</p>
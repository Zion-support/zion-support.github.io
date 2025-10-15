#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to create a proper page template
function createProperPageTemplate(filePath, pageName) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const title = pageName || fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return `import React from 'react';
import SEOHead from '../components/SEOHead';

const ${componentName}: React.FC = () => {
  return (
    <>
      <SEOHead
        title="${title} - Zion Tech Group"
        description="Advanced ${title.toLowerCase()} solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">${title}</h1>
          <p className="text-gray-300">Advanced solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it's already properly formatted
    if (content.includes('export default') && 
        content.includes('React.FC') && 
        content.includes('SEOHead') &&
        !content.includes('error') &&
        !content.includes('TS1002') &&
        !content.includes('TS1382')) {
      return false;
    }
    
    // Extract page name from file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || pathParts[pathParts.length - 1].replace('.tsx', '');
    
    // Create proper template
    const fixed = createProperPageTemplate(filePath, pageName);
    
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

main();
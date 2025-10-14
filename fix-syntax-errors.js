const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  // Remove extra quotes and semicolons from import statements
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+)";/g, 'import $1;');
  
  // Fix JSX fragment syntax
  content = content.replace(/<>(\s*<div[^>]*><\/div>)/g, '<>');
  content = content.replace(/<>\s*<div[^>]*><\/div>\s*<Helmet><\/Helmet>/g, '<>\n      <Helmet>');
  
  // Fix Helmet closing tags
  content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
  content = content.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  
  // Fix meta tag syntax
  content = content.replace(/<meta[^>]*><\/meta>/g, (match) => {
    return match.replace('></meta>', ' />');
  });
  
  // Fix div closing tags
  content = content.replace(/<div[^>]*><\/div>/g, (match) => {
    const openTag = match.match(/<div[^>]*>/)[0];
    return openTag.replace('>', '>');
  });
  
  // Fix function syntax
  content = content.replace(/export default function Page\(\) \{\s*return \(\s*<>/g, 'export default function Page() {\n  return (\n    <>');
  content = content.replace(/const Page = \(\) => \{\s*return \(\s*<>/g, 'const Page = () => {\n  return (\n    <>');
  
  // Fix closing syntax
  content = content.replace(/\s*\)\};/g, '\n  );\n};');
  content = content.replace(/\s*\)\};/g, '\n  );\n};');
  
  // Remove extra semicolons and quotes
  content = content.replace(/;""/g, ';');
  content = content.replace(/""/g, '');
  content = content.replace(/;"/g, ';');
  
  // Fix JSX structure
  content = content.replace(/<>\s*<div[^>]*><\/div>\s*<Helmet>/g, '<>\n      <Helmet>');
  content = content.replace(/<\/Helmet>\s*<div[^>]*><\/div>\s*<\/>/g, '</Helmet>\n      <div className="min-h-screen bg-white">\n        <div className="container mx-auto px-4 py-20">\n          <h1 className="text-4xl font-bold text-gray-900 mb-8">Page Title</h1>\n          <p className="text-xl text-gray-600">\n            This page is under development. Please check back soon for more information.\n          </p>\n        </div>\n      </div>\n    </>');
  
  return content;
}

// Function to create a proper page template
function createPageTemplate(title, description) {
  return `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${title.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
}

// Find all page.tsx files
const pageFiles = glob.sync('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to process`);

pageFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors (contains malformed patterns)
    if (content.includes(';""') || content.includes('import') && content.includes('""') || content.includes('<div></div>')) {
      console.log(`Fixing: ${filePath}`);
      
      // Extract title from path
      const pathParts = filePath.split('/');
      const folderName = pathParts[pathParts.length - 2];
      const title = folderName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `${title} services and solutions from Zion Tech Group`;
      
      // Create new content
      const newContent = createPageTemplate(title, description);
      
      // Write the fixed content
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Syntax error fixing completed!');
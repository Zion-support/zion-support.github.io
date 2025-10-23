const fs = require('fs');
const path = require('path');

// Simple page template
const simplePageTemplate = `"use client";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Page Title
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
          Page description content.
        </p>
      </div>
    </div>
  );
};

export default Page;`;

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    // Get the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const capitalizedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    
    // Create the content
    const content = simplePageTemplate
      .replace('Page', capitalizedName)
      .replace('Page Title', capitalizedName)
      .replace('Page description content.', `This is the ${pageName} page.`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all page files
function fixAllPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'components') {
      fixAllPageFiles(filePath);
    } else if (file === 'page.tsx' && dir.includes('/app/')) {
      fixPageFile(filePath);
    }
  });
}

// Start fixing from the app directory
console.log('Starting to fix all page files...');
fixAllPageFiles('/workspace/app');
console.log('Finished fixing all page files.');
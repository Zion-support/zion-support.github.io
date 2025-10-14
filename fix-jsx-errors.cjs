const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix duplicate closing tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>');
  fixed = fixed.replace(/<\/>\s*<\/>/g, '</>');
  
  // Fix malformed JSX structure
  if (filePath.includes('ai-3d-generation')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI 3D Generation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI 3D generation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix App.tsx
  if (filePath.includes('App.tsx')) {
    fixed = `import React from "react";
import { Helmet } from "react-helmet-async";

const AppPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Helmet>
          <title>App - Zion Tech Group</title>
          <meta name="description" content="App - Zion Tech Group" />
        </Helmet>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">App</h1>
            <p className="text-xl text-gray-300">
              This page is under development. Please check back soon for more information about our app services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppPage;`;
  }
  
  // Fix 5g-implementation
  if (filePath.includes('5g-implementation')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="5G Implementation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">5G Implementation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our 5G implementation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix 5g-solutions
  if (filePath.includes('5g-solutions')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="5G Solutions services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">5G Solutions</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our 5G solutions services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  return fixed;
}

// Main function to process all files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let processedFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.resolve(file);
        const originalContent = fs.readFileSync(filePath, 'utf8');
        const fixedContent = fixSpecificFile(filePath, originalContent);
        
        if (originalContent !== fixedContent) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          console.log(`Fixed: ${file}`);
          fixedFiles++;
        }
        
        processedFiles++;
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files, fixed ${fixedFiles} files`);
}

// Run the fix
processFiles();
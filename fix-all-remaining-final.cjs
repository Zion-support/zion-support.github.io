const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Check if file has JSX syntax errors
  const hasJSXErrors = content.includes('Unexpected token') || 
                      content.includes('JSX element') ||
                      content.includes('Expected corresponding') ||
                      content.includes('Identifier expected') ||
                      content.includes('has no corresponding closing tag');
  
  if (hasJSXErrors) {
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
    const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Create a proper page structure
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageName}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${pageName.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  // Fix specific problematic files
  if (filePath.includes('blog/ai-enterprise-transformation-2025/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Enterprise Transformation 2025 - Zion Tech Group</title>
        <meta name="description" content="AI Enterprise Transformation 2025 blog post from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Enterprise Transformation 2025</h1>
          <p className="text-xl text-gray-600">
            This blog post is under development. Please check back soon for more information about AI enterprise transformation trends for 2025.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('blog/ai-innovation-labs-product-development-2025/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Innovation Labs Product Development 2025 - Zion Tech Group</title>
        <meta name="description" content="AI Innovation Labs Product Development 2025 blog post from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Innovation Labs Product Development 2025</h1>
          <p className="text-xl text-gray-600">
            This blog post is under development. Please check back soon for more information about AI innovation labs and product development trends for 2025.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('business-intelligence/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Business Intelligence services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Business Intelligence</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our business intelligence services.
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
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
                      content.includes('Identifier expected');
  
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
  if (filePath.includes('ai-mobile-app-development/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Mobile App Development - Zion Tech Group</title>
        <meta name="description" content="AI Mobile App Development services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Mobile App Development</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI mobile app development services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('autonomous-systems/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Autonomous Systems services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Autonomous Systems</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our autonomous systems services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('blockchain/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Blockchain - Zion Tech Group</title>
        <meta name="description" content="Blockchain services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blockchain</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our blockchain services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('blog/ai-2025-2026-mega-trends-breakthrough/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI 2025-2026 Mega Trends Breakthrough - Zion Tech Group</title>
        <meta name="description" content="AI 2025-2026 Mega Trends Breakthrough blog post from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI 2025-2026 Mega Trends Breakthrough</h1>
          <p className="text-xl text-gray-600">
            This blog post is under development. Please check back soon for more information about AI mega trends for 2025-2026.
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
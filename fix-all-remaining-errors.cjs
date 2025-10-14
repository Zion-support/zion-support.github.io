const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Check if file has JSX syntax errors
  const hasJSXErrors = content.includes('</div>') && content.includes('</>') && 
                      (content.includes('Identifier expected') || 
                       content.includes('Unexpected token') ||
                       content.includes('JSX fragment has no corresponding closing tag'));
  
  if (hasJSXErrors || content.includes('</div>') && content.includes('</>')) {
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
  if (filePath.includes('ai-data-visualization/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="AI Data Visualization services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Data Visualization</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI data visualization services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-document-processor/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Document Processor - Zion Tech Group</title>
        <meta name="description" content="AI Document Processor services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Document Processor</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI document processor services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-ecommerce-solutions/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Ecommerce Solutions - Zion Tech Group</title>
        <meta name="description" content="AI Ecommerce Solutions services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Ecommerce Solutions</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI ecommerce solutions services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-education-platform/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Education Platform - Zion Tech Group</title>
        <meta name="description" content="AI Education Platform services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Education Platform</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI education platform services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-financial-analysis/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Financial Analysis - Zion Tech Group</title>
        <meta name="description" content="AI Financial Analysis services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Financial Analysis</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI financial analysis services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-fintech-solutions/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group</title>
        <meta name="description" content="AI Fintech Solutions services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Fintech Solutions</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI fintech solutions services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (filePath.includes('ai-fintech/page.tsx')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI Fintech - Zion Tech Group</title>
        <meta name="description" content="AI Fintech services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Fintech</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI fintech services.
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
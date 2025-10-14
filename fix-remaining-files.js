#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX structure in a file
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Skip if file doesn't contain JSX
    if (!content.includes('return (') || !content.includes('div')) {
      return false;
    }

    // Extract the title and description from Helmet if present
    const titleMatch = content.match(/<title>([^<]*)<\/title>/);
    const descriptionMatch = content.match(/<meta name="description" content="([^"]*)" \/>/);
    
    const title = titleMatch ? titleMatch[1] : 'Page - Zion Tech Group';
    const description = descriptionMatch ? descriptionMatch[1] : 'Page - Zion Tech Group';

    // Extract the h1 text
    const h1Match = content.match(/<h1[^>]*>([^<]*)<\/h1>/);
    const h1Text = h1Match ? h1Match[1] : 'Page';

    // Check if it's a client component
    const isClientComponent = content.includes("'use client'");

    // Create the correct structure
    let newContent = '';
    
    if (isClientComponent) {
      newContent = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${h1Text}</h1>
            <p className="text-gray-300 text-lg">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;
    } else {
      newContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${h1Text}</h1>
            <p className="text-gray-300 text-lg">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;
    }

    // Only write if the content is different
    if (content.trim() !== newContent.trim()) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX structure in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting remaining JSX structure fixes...');
  
  // Find all page.tsx files that still have errors
  const problemFiles = [
    'app/ai-data-analytics/page.tsx',
    'app/ai-ecommerce-solutions/page.tsx',
    'app/ai-mobile-app-development/page.tsx',
    'app/autonomous-systems/page.tsx',
    'app/blockchain/page.tsx',
    'app/business-intelligence/page.tsx',
    'app/case-studies/page.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of problemFiles) {
    if (fixJSXStructure(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed JSX structure in ${fixedCount} files`);
}

main().catch(console.error);
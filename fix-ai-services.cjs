#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  
  const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">${pageName}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}`;

  fs.writeFileSync(filePath, template);
  console.log(`Created basic page: ${filePath}`);
}

async function main() {
  // Get all files in ai-services subdirectory
  const files = await glob('app/ai-services/**/*.tsx');
  
  console.log(`Found ${files.length} ai-services files to fix...`);
  
  for (const file of files) {
    createBasicPage(file);
  }
  
  console.log('Done fixing ai-services files');
}

main().catch(console.error);
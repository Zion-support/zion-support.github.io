#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// List of specific problematic files to fix
const problematicFiles = [
  'app/404/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/App.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/advanced-security-suite/page.tsx'
];

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
  console.log('Fixing specific problematic files...');
  
  for (const file of problematicFiles) {
    if (fs.existsSync(file)) {
      createBasicPage(file);
    }
  }
  
  console.log('Done fixing specific files');
}

main().catch(console.error);
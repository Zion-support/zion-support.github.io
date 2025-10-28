#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix final remaining files
function fixFinalFiles(content, filePath) {
  // Fix AdvancedSEOOptimizer_new.tsx
  if (filePath.includes('AdvancedSEOOptimizer_new.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedSEOOptimizer_new | Zion Tech Group",
  description: "Professional advancedseooptimizer_new services by Zion Tech Group",
  keywords: "advancedseooptimizer_new, technology, services",
  openGraph: {
    title: "AdvancedSEOOptimizer_new | Zion Tech Group",
    description: "Professional advancedseooptimizer_new services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedSEOOptimizer_newPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedSEOOptimizer_new
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedseooptimizer_new services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix Analytics.tsx
  if (filePath.includes('Analytics.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "Analytics | Zion Tech Group",
  description: "Professional analytics services by Zion Tech Group",
  keywords: "analytics, technology, services",
  openGraph: {
    title: "Analytics | Zion Tech Group",
    description: "Professional analytics services by Zion Tech Group",
    type: "website",
  },
};

export default function AnalyticsPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional analytics services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Analytics Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive analytics solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  return content;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const fullPath = path.resolve(file);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Skip if file is empty
        if (!content.trim()) {
          return;
        }
        
        const originalContent = content;
        
        // Apply fixes
        content = fixFinalFiles(content, file);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Fixed: ${file}`);
          processedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  console.log(`Errors in ${errorFiles} files`);
}

// Run the script
processFiles();
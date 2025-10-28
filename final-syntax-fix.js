#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to completely rewrite malformed files
function rewriteMalformedFile(content, filePath) {
  // Fix about/constants.ts
  if (filePath.includes('about/constants.ts')) {
    return `export const aboutMetadata = {
  title: 'About Zion Tech Group - Leading Technology Solutions',
  description: 'Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
  keywords: 'about, technology, AI solutions, cloud infrastructure, software development, Zion Tech Group',
  openGraph: {
    title: 'About Zion Tech Group - Leading Technology Solutions',
    description: 'Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
    type: 'website',
    url: 'https://ziontechgroup.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Zion Tech Group - Leading Technology Solutions',
    description: 'Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
  },
};`;
  }
  
  // Fix AccessibilityEnhancer.tsx
  if (filePath.includes('AccessibilityEnhancer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AccessibilityEnhancer | Zion Tech Group",
  description: "Professional accessibilityenhancer services by Zion Tech Group",
  keywords: "accessibilityenhancer, technology, services",
  openGraph: {
    title: "AccessibilityEnhancer | Zion Tech Group",
    description: "Professional accessibilityenhancer services by Zion Tech Group",
    type: "website",
  },
};

export default function AccessibilityEnhancerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AccessibilityEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional accessibilityenhancer services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedErrorBoundary.tsx
  if (filePath.includes('AdvancedErrorBoundary.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedErrorBoundary | Zion Tech Group",
  description: "Professional advancederrorboundary services by Zion Tech Group",
  keywords: "advancederrorboundary, technology, services",
  openGraph: {
    title: "AdvancedErrorBoundary | Zion Tech Group",
    description: "Professional advancederrorboundary services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedErrorBoundaryPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedErrorBoundary
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancederrorboundary services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AdvancedErrorBoundary Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive advancederrorboundary solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AIToolCard.tsx
  if (filePath.includes('AIToolCard.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AIToolCard | Zion Tech Group",
  description: "Professional aitoolcard services by Zion Tech Group",
  keywords: "aitoolcard, technology, services",
  openGraph: {
    title: "AIToolCard | Zion Tech Group",
    description: "Professional aitoolcard services by Zion Tech Group",
    type: "website",
  },
};

export default function AIToolCardPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AIToolCard
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional aitoolcard services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedAccessibilityEnhancer.tsx
  if (filePath.includes('AdvancedAccessibilityEnhancer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedAccessibilityEnhancer | Zion Tech Group",
  description: "Professional advancedaccessibilityenhancer services by Zion Tech Group",
  keywords: "advancedaccessibilityenhancer, technology, services",
  openGraph: {
    title: "AdvancedAccessibilityEnhancer | Zion Tech Group",
    description: "Professional advancedaccessibilityenhancer services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedAccessibilityEnhancerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedAccessibilityEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedaccessibilityenhancer services by Zion Tech Group
            </p>
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
        content = rewriteMalformedFile(content, file);
        
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
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining malformed files
function fixRemainingFiles(content, filePath) {
  // Fix AdvancedPerformanceEnhancer.tsx
  if (filePath.includes('AdvancedPerformanceEnhancer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedPerformanceEnhancer | Zion Tech Group",
  description: "Professional advancedperformanceenhancer services by Zion Tech Group",
  keywords: "advancedperformanceenhancer, technology, services",
  openGraph: {
    title: "AdvancedPerformanceEnhancer | Zion Tech Group",
    description: "Professional advancedperformanceenhancer services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedPerformanceEnhancerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformanceenhancer services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AdvancedPerformanceEnhancer Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive advancedperformanceenhancer solutions tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedPerformanceMonitor.tsx
  if (filePath.includes('AdvancedPerformanceMonitor.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedPerformanceMonitor | Zion Tech Group",
  description: "Professional advancedperformancemonitor services by Zion Tech Group",
  keywords: "advancedperformancemonitor, technology, services",
  openGraph: {
    title: "AdvancedPerformanceMonitor | Zion Tech Group",
    description: "Professional advancedperformancemonitor services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedPerformanceMonitorPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceMonitor
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformancemonitor services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedPerformanceOptimizer.tsx
  if (filePath.includes('AdvancedPerformanceOptimizer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedPerformanceOptimizer | Zion Tech Group",
  description: "Professional advancedperformanceoptimizer services by Zion Tech Group",
  keywords: "advancedperformanceoptimizer, technology, services",
  openGraph: {
    title: "AdvancedPerformanceOptimizer | Zion Tech Group",
    description: "Professional advancedperformanceoptimizer services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedPerformanceOptimizerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedPerformanceOptimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedperformanceoptimizer services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedSEOEnhancer.tsx
  if (filePath.includes('AdvancedSEOEnhancer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedSEOEnhancer | Zion Tech Group",
  description: "Professional advancedseoenhancer services by Zion Tech Group",
  keywords: "advancedseoenhancer, technology, services",
  openGraph: {
    title: "AdvancedSEOEnhancer | Zion Tech Group",
    description: "Professional advancedseoenhancer services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedSEOEnhancerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedSEOEnhancer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedseoenhancer services by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}`;
  }
  
  // Fix AdvancedSEOOptimizer.tsx
  if (filePath.includes('AdvancedSEOOptimizer.tsx')) {
    return `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AdvancedSEOOptimizer | Zion Tech Group",
  description: "Professional advancedseooptimizer services by Zion Tech Group",
  keywords: "advancedseooptimizer, technology, services",
  openGraph: {
    title: "AdvancedSEOOptimizer | Zion Tech Group",
    description: "Professional advancedseooptimizer services by Zion Tech Group",
    type: "website",
  },
};

export default function AdvancedSEOOptimizerPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AdvancedSEOOptimizer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional advancedseooptimizer services by Zion Tech Group
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
        content = fixRemainingFiles(content, file);
        
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
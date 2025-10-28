#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix malformed JSX and syntax
function fixMalformedSyntax(content) {
  // Fix malformed metadata objects
  content = content.replace(/export const metadata = \{([^}]+)\}/g, (match, body) => {
    // Fix missing commas and proper object structure
    let fixed = body.replace(/(\w+):\s*"([^"]*)"\s*$/gm, '$1: "$2",');
    fixed = fixed.replace(/,(\s*})/g, '$1');
    return `export const metadata = {${fixed}}`;
  });
  
  // Fix malformed function parameters
  content = content.replace(/function\s+(\w+)\s*\(\s*\{([^}]+)\}\s*:\s*\{([^}]+)\}\s*\)\s*\{/g, 
    'function $1({ $2 }: { $3 }) {');
  
  // Fix malformed JSX tags
  content = content.replace(/<(\w+)([^>]*)\s*>\s*<\/\1>/g, '<$1$2 />');
  
  // Fix malformed JSX with missing closing tags
  content = content.replace(/<(\w+)([^>]*)\s*>\s*([^<]+)\s*$/gm, '<$1$2>$3</$1>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*"([^"]*)"\s*>\s*$/gm, 'className="$1" />');
  
  // Fix missing closing parentheses
  content = content.replace(/return\s*\(([^)]*)\s*$/gm, 'return ($1)');
  
  // Fix malformed object literals
  content = content.replace(/\{\s*([^}]+)\s*\}\s*$/gm, '{$1}');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFiles(content, filePath) {
  // Fix about/layout.tsx
  if (filePath.includes('about/layout.tsx')) {
    content = `import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return <>{children}</>;
}`;
  }
  
  // Fix AccessibilityComponents.tsx
  if (filePath.includes('AccessibilityComponents.tsx')) {
    content = `import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: "AccessibilityComponents | Zion Tech Group",
  description: "Professional accessibilitycomponents services by Zion Tech Group",
  keywords: "accessibilitycomponents, technology, services",
  openGraph: {
    title: "AccessibilityComponents | Zion Tech Group",
    description: "Professional accessibilitycomponents services by Zion Tech Group",
    type: "website",
  },
};

export default function AccessibilityComponentsPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              AccessibilityComponents
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional accessibilitycomponents services by Zion Tech Group
            </p>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our AccessibilityComponents Services
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive accessibilitycomponents solutions tailored to your business needs.
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
        content = fixMalformedSyntax(content);
        content = fixSpecificFiles(content, file);
        
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
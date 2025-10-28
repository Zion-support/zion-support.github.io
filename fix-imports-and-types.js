#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import statements and type issues
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statement
    content = content.replace(
      "",
      ""
    );
    
    // Fix props type
    content = content.replace(
      'export default function Wrapped(props) {',
      'export default function Wrapped(props: Record<string, unknown>) {'
    );
    
    fs.writeFileSync(filePath, content);
      } catch (error) {
    // Empty block
  }
}

// Function to fix all page files
function fixAllPageFiles() {
  
  pageFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      fixPageFile(fullPath);
    }
  });
}

// Function to fix micro-saas services files
function fixMicroSaasFiles() {
  const microSaasFiles = [
    'app/micro-saas-services/page.tsx',
    'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
    'app/micro-saas-services/ai-chatbot-builder/page.tsx',
    'app/micro-saas-services/ai-content-generator/page.tsx',
    'app/micro-saas-services/ai-email-assistant/page.tsx',
    'app/micro-saas-services/ai-lead-generation/page.tsx'
  ];

  microSaasFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      // Create clean micro-saas page
      const cleanContent = `import React from 'react';
import Link from 'next/link';

export 
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive micro SaaS solutions for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}`;

      fs.writeFileSync(fullPath, cleanContent);
          }
  });
}

// Main execution
fixAllPageFiles();
fixMicroSaasFiles();

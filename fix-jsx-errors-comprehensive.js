#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX fragment and syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix multiple React imports
    if (content.includes('import React from \'react\';') && content.includes('import React from \'react\'')) {
      content = content.replace(/import React from 'react';\s*import React from 'react'/g, 'import React from \'react\'');
      fixed = true;
    }
    
    // Fix JSX fragments without proper closing
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the last closing div and add the fragment closing
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        content = content.substring(0, lastDivIndex + 6) + '\n    </>\n  );\n}';
        fixed = true;
      }
    }
    
    // Fix unclosed JSX elements
    if (content.includes('<div>') && !content.includes('</div>')) {
      // Find the last opening div and add closing
      const divMatches = content.match(/<div[^>]*>/g);
      if (divMatches) {
        const lastDiv = divMatches[divMatches.length - 1];
        const lastDivIndex = content.lastIndexOf(lastDiv);
        const afterLastDiv = content.substring(lastDivIndex + lastDiv.length);
        
        // If there's no closing div after the last opening div, add one
        if (!afterLastDiv.includes('</div>')) {
          content = content + '\n    </div>\n  );\n}';
          fixed = true;
        }
      }
    }
    
    // Fix function declarations that are missing proper structure
    if (content.includes('export default function Home() {') && content.includes('return (')) {
      // This is a simple home page, fix it properly
      const homePageContent = `import React from 'react';
import Link from 'next/link';

export 
function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered DevOps
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your development workflow with intelligent automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}`;
      
      fs.writeFileSync(filePath, homePageContent);
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
          }
    
  } catch (error) {
    // Empty block
  }
}

// Function to fix specific problematic files
function fixProblematicFiles() {
  
  problematicFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      fixJSXErrors(fullPath);
    }
  });
}

// Main execution
fixProblematicFiles();

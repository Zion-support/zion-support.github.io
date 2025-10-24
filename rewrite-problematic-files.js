#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a clean page template
function createCleanPage(filePath, pageName) {
  const componentName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
  
  return `'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const ${componentName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName} services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${pageName} services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive ${pageName} solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                  <p className="text-gray-300">Description of service 1</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                  <p className="text-gray-300">Description of service 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ${componentName}Page;
`;
}

// List of problematic files to rewrite
const problematicFiles = [
  { path: 'app/analytics-tools/page.tsx', name: 'Analytics Tools' },
  { path: 'app/api-development/page.tsx', name: 'API Development' },
  { path: 'app/api/page.tsx', name: 'API' },
  { path: 'app/ar-vr-platform/page.tsx', name: 'AR VR Platform' },
  { path: 'app/ar-vr-solutions/page.tsx', name: 'AR VR Solutions' }
];

// Main function
function rewriteProblematicFiles() {
  console.log('Starting to rewrite problematic files...');
  
  problematicFiles.forEach(({ path: filePath, name }) => {
    const fullPath = path.join(__dirname, filePath);
    try {
      const content = createCleanPage(filePath, name);
      fs.writeFileSync(fullPath, content);
      console.log(`Rewrote: ${filePath}`);
    } catch (error) {
      console.error(`Error rewriting ${filePath}:`, error.message);
    }
  });
  
  console.log('Finished rewriting problematic files!');
}

// Run the rewrite
rewriteProblematicFiles();
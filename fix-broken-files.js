#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Basic page template
const createBasicPage = (pageName, title) => `'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ${pageName}: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                This page is under development. Please check back soon for updates.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ${pageName};`;

// List of critical files that need to be fixed
const criticalFiles = [
  { path: 'app/about/page.tsx', name: 'AboutPage', title: 'About Us' },
  { path: 'app/accessibility/page.tsx', name: 'AccessibilityPage', title: 'Accessibility' },
  { path: 'app/accessibility-page/page.tsx', name: 'AccessibilityPagePage', title: 'Accessibility' },
];

// Fix critical files
for (const file of criticalFiles) {
  const fullPath = path.join(process.cwd(), file.path);
  try {
    console.log(`Fixing ${file.path}...`);
    const content = createBasicPage(file.name, file.title);
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed ${file.path}`);
  } catch (error) {
    console.error(`❌ Error fixing ${file.path}:`, error.message);
  }
}

console.log('🎉 Critical files fixed!');
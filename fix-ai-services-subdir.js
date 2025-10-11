#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Basic page template
const createBasicPage = (pageName, title) => `'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

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
                Advanced AI-powered solutions to transform your business operations.
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

// Find all AI services subdirectory pages
const aiServicesDir = path.join(process.cwd(), 'app/ai-services');
const aiServicesPages = [];

function findAIServicesPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        aiServicesPages.push({
          path: pageFile,
          name: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page',
          title: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        });
      }
    }
  }
}

findAIServicesPages(aiServicesDir);

console.log(`Found ${aiServicesPages.length} AI services subdirectory pages to fix`);

// Fix all AI services subdirectory pages
let fixedCount = 0;
for (const page of aiServicesPages) {
  try {
    console.log(`Fixing ${page.path}...`);
    const content = createBasicPage(page.name, page.title);
    fs.writeFileSync(page.path, content);
    console.log(`✅ Fixed ${page.path}`);
    fixedCount++;
  } catch (error) {
    console.error(`❌ Error fixing ${page.path}:`, error.message);
  }
}

console.log(`🎉 Fixed ${fixedCount} AI services subdirectory pages!`);
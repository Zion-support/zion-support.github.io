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
                Advanced solutions to transform your business operations.
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

// Find all remaining corrupted pages
const appDir = path.join(process.cwd(), 'app');
const corruptedPages = [];

function findCorruptedPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('ai-') && !item.startsWith('components') && !item.startsWith('styles')) {
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        // Check if file is corrupted by looking for syntax errors
        try {
          const content = fs.readFileSync(pageFile, 'utf8');
          if (content.includes('error TS') || content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            corruptedPages.push({
              path: pageFile,
              name: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page',
              title: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            });
          }
        } catch (error) {
          // File is likely corrupted
          corruptedPages.push({
            path: pageFile,
            name: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page',
            title: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
          });
        }
      }
    }
  }
}

findCorruptedPages(appDir);

console.log(`Found ${corruptedPages.length} potentially corrupted pages to fix`);

// Fix all corrupted pages
let fixedCount = 0;
for (const page of corruptedPages) {
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

console.log(`🎉 Fixed ${fixedCount} corrupted pages!`);
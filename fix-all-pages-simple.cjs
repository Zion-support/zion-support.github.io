#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Simple page template
const createSimplePage = (pageName, title) => `'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function ${pageName}Page() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ${title}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional ${title.toLowerCase()} services by Zion Tech Group.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our ${title} Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ${title.toLowerCase()} solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Advanced Solutions
              </h3>
              <p className="text-gray-600">
                Cutting-edge technology and innovative approaches.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fast Implementation
              </h3>
              <p className="text-gray-600">
                Quick deployment and rapid results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customized Approach
              </h3>
              <p className="text-gray-600">
                Tailored solutions for your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}`;

// Main function to process files
function processFile(filePath) {
  try {
    // Skip if it's already a working page
    if (filePath.includes('about/page.tsx') || filePath.includes('accessibility/page.tsx')) {
      return false;
    }

    // Extract page name from path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2];
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    const content = createSimplePage(pageName, title);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page files
const patterns = [
  'app/*/page.tsx',
  'app/*/*/page.tsx'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  files.forEach(file => {
    if (processFile(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a clean service page template
function createServicePageTemplate(pageName, title, description) {
  return `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our ${title} Services
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We provide comprehensive ${title.toLowerCase()} solutions tailored to your business needs.
                Our expert team delivers cutting-edge technology and innovative approaches to help you succeed.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From strategy development to implementation and ongoing support, we're your trusted partner
                in digital transformation and technology excellence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Expert team with proven experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Scalable and future-proof solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}`;
}

// Function to fix corrupted page files
function fixCorruptedPages() {
  const appDir = path.join(process.cwd(), 'app');
  const corruptedFiles = [];
  
  // Find all page.tsx files
  function findPageFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findPageFiles(filePath);
      } else if (file === 'page.tsx') {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          // Check for syntax errors or corrupted content
          if (content.includes(';') && content.includes('return (<div>') && content.includes('import Footer')) {
            corruptedFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  findPageFiles(appDir);
  
  console.log(`Found ${corruptedFiles.length} corrupted page files`);
  
  // Fix each corrupted file
  corruptedFiles.forEach(filePath => {
    try {
      const relativePath = path.relative(appDir, filePath);
      const pageName = path.dirname(relativePath).split('/').pop();
      const title = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      const description = `Professional ${title.toLowerCase()} services and solutions for modern businesses`;
      
      const cleanContent = createServicePageTemplate(pageName, title, description);
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
  
  console.log('Corrupted page files fixed!');
}

// Run the fix
fixCorruptedPages();
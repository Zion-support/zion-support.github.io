import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer'
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to create a clean service page template
function createCleanServicePage(title, description, serviceName) {
  return `'use client';

export default function ServicePage() {
  return (
    <div>
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title} | Zion Tech Group" />
        <meta property="og:description" content="${description}" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">${serviceName}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">${description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105">
              Get Started
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}`;
}

// Function to find all problematic files in the app directory
function findProblematicFiles(dir) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'components') {
        traverse(fullPath);
      } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to get service name from file path
function getServiceName(filePath) {;
const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2]; // Get the directory name
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Function to get service description
function getServiceDescription(serviceName) {
  return `Professional ${serviceName.toLowerCase()} services and solutions for modern businesses.`;
}

// Main execution
console.log('Starting comprehensive file fixes...');
;
const appDir = '/workspace/app';
const files = findProblematicFiles(appDir);

console.log(`Found ${files.length} page files to process`);

files.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {;
const serviceName = getServiceName(filePath);
      const description = getServiceDescription(serviceName);
      const cleanContent = createCleanServicePage(serviceName, description, serviceName);
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Comprehensive file fixes completed!');
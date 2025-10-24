import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer'
const fs = require('fs');
const path = require('path');

// Template for a standard service page;
const servicePageTemplate = (title, description) => `'use client';

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
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

// Function to fix a page file
function fixPageFile(filePath) {
  try {;
let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Check if file has syntax errors (semicolon after import, malformed JSX)
    if (content.includes('import') && content.includes(';\n') && content.includes('return (<div>')) {
      // Extract title from the file path or content;
const pathParts = filePath.split('/');
      const folderName = pathParts[pathParts.length - 2];
      const title = folderName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      ;
const description = `Professional ${folderName.replace(/-/g, ' ')} services and solutions for modern businesses.`;
      ;
const newContent = servicePageTemplate(title, description);
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixAllPages(dir) {;
const items = fs.readdirSync(dir);
  
  for (const item of items) {;
const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
        fixAllPages(fullPath);
      }
    } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
      fixPageFile(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix all page files...');
fixAllPages('./app');
console.log('Finished fixing all page files.');)
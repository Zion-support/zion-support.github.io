const fs = require('fs');
const path = require('path');

// Template for a working page component
const pageTemplate = `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <div>
      <Head>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}`;

// Function to replace a file with the template
function replaceFile(filePath) {
  try {
    // Only replace page.tsx files in the app directory
    if (filePath.includes('/app/') && filePath.endsWith('/page.tsx')) {
      fs.writeFileSync(filePath, pageTemplate, 'utf8');
      console.log(`Replaced: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error replacing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and replace files
function replaceFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let replacedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        replacedCount += replaceFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (replaceFile(filePath)) {
        replacedCount++;
      }
    }
  }

  return replacedCount;
}

// Main execution
console.log('Starting page replacement...');
const replacedCount = replaceFilesInDirectory('/workspace');
console.log(`Replaced ${replacedCount} files`);
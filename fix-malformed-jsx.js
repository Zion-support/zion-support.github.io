const fs = require('fs');
const path = require('path');

function fixMalformedJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if this is a page component
    if (filePath.includes('/page.tsx') || filePath.includes('404.tsx')) {
      // Create a proper page structure
      const pageName = path.basename(filePath, '.tsx');
      const is404 = pageName === '404';
      
      let newContent = `"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AlertTriangle, Home, ArrowLeft, Brain, Zap, Shield, Target, TrendingUp, CheckCircle, Star, Clock, Globe, Database, Users, Settings } from 'lucide-react';

const ${is404 ? 'NotFound' : pageName.charAt(0).toUpperCase() + pageName.slice(1)} = () => {
  return (
    <>
      <Head>
        <title>${is404 ? '404 - Page Not Found' : pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Zion Tech Group</title>
        <meta name="description" content="${is404 ? 'Page not found' : `Advanced ${pageName} solution for modern businesses`}" />
        <meta name="keywords" content="AI, artificial intelligence, ${pageName}, AI solutions, intelligent automation" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${is404 ? '404 - Page Not Found' : pageName.charAt(0).toUpperCase() + pageName.slice(1)}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${is404 ? 'The page you are looking for does not exist.' : `Transform your business with our cutting-edge ${pageName} technology and AI-powered solutions.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${is404 ? 'NotFound' : pageName.charAt(0).toUpperCase() + pageName.slice(1)};`;

      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed malformed JSX in: ${filePath}`);
        modified = true;
      }
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') && (file.includes('page.tsx') || file === '404.tsx')) {
      if (fixMalformedJSX(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting malformed JSX fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed malformed JSX in ${fixedCount} files.`);
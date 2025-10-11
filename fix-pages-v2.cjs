const fs = require('fs');
const path = require('path');

// Template for a basic page component
const pageTemplate = (pageName, title, description, keywords) => `'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ${pageName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
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
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ${pageName}Page;`;

// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Function to create a readable title from kebab-case
function kebabToTitle(str) {
  return str.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  const corruptionPatterns = [
    'error TS',
    'Declaration or statement expected',
    'Expression expected',
    'JSX expressions must have one parent element',
    'Expected corresponding JSX closing tag',
    'Expected corresponding closing tag',
    'Unexpected token',
    'Identifier expected',
    'Parameter declaration expected',
    'Property assignment expected',
    'Type expected',
    'Unexpected end of input',
    'Unterminated regular expression literal',
    'Missing closing tag',
    'Expected corresponding JSX fragment',
    'JSX element has no corresponding closing tag'
  ];
  
  return corruptionPatterns.some(pattern => content.includes(pattern)) || 
         content.length < 500 ||
         !content.includes('export default') ||
         !content.includes('React.FC');
}

// Get all page files
const appDir = 'app';
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);

// Fix each page file
let fixedCount = 0;
for (const filePath of pageFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      // Extract page name from path
      const pathParts = filePath.split('/');
      const pageName = pathParts[pathParts.length - 2]; // Get the directory name
      const pascalName = kebabToPascal(pageName);
      const title = kebabToTitle(pageName);
      
      // Generate new content
      const newContent = pageTemplate(
        pascalName,
        title,
        `Advanced ${title} solutions for modern businesses`,
        `${pageName}, ${title.toLowerCase()}, business solutions, technology`
      );
      
      // Write the new content
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} page files`);
const fs = require('fs');
const path = require('path');

// List of problematic files that need to be completely rewritten
const problematicFiles = [
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx'
];

// Function to create a proper page template
function createProperPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const template = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ${fileName.replace(/-/g, '')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${pageName.toLowerCase()} solution for modern businesses." />
        <meta name="keywords" content="${pageName.toLowerCase()}, artificial intelligence, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${pageName}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced ${pageName.toLowerCase()} solution powered by cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ${fileName.replace(/-/g, '')}Page
`;

  return template;
}

// Main execution
console.log('Starting remaining syntax fixes...');
let fixedCount = 0;

problematicFiles.forEach(filePath => {
  try {
    const template = createProperPage(filePath);
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`Fixed: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);
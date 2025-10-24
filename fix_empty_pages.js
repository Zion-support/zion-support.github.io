const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files
const files = glob.sync('app/**/page.tsx');

const createBasicPage = (filePath) => {
  const pageName = path.basename(path.dirname(filePath));
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';

  return `"use client";

import React from 'react';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive solution for ${pageName.replace(/-/g, ' ')}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${componentName};`;
};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check if file is empty or has minimal content
  if (content.trim().length < 10) {
    const newContent = createBasicPage(file);
    fs.writeFileSync(file, newContent);
    console.log(`Created basic page for ${file}`);
  }
});

console.log('Empty pages fixed!');
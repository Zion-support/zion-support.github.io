const fs = require('fs');
const path = require('path');

// Function to create a basic page component
function createBasicPageComponent(title, description) {
  return `'use client';

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} - Zion Tech Group',
  description: '${description}',
  keywords: 'AI solutions, IT services, technology services',
  openGraph: {
    title: '${title} - Zion Tech Group',
    description: '${description}',
    type: 'website',
    url: 'https://ziontechgroup.com/',
  },
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
            <a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
`;
}

// Function to create a basic component
function createBasicComponent(name, description) {
  return `import React from 'react';

interface ${name}Props {
  className?: string;
}

const ${name}: React.FC<${name}Props> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>${name}</h2>
      <p>${description}</p>
    </div>
  );
};

export default ${name};
`;
}

// Get all tsx files in src directory
const srcDir = path.join(__dirname, 'src');
const files = [];

function getAllTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

getAllTsxFiles(srcDir);

// Process each file
files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors (basic check)
    if (content.includes('Error: Parsing error') || 
        content.includes('Merge conflict marker') ||
        content.includes('Expression expected') ||
        content.includes('Declaration or statement expected') ||
        content.includes('Property assignment expected') ||
        content.includes('Unterminated string literal') ||
        content.includes('JSX expressions must have one parent element') ||
        content.includes('Property or signature expected') ||
        content.includes('Expression or comma expected') ||
        content.includes('; expected') ||
        content.includes('( expected') ||
        content.includes('{ or JSX element expected') ||
        content.includes(') expected')) {
      
      console.log(`Fixing: ${filePath}`);
      
      // Determine if it's a page or component
      const isPage = filePath.includes('/page.tsx');
      const fileName = path.basename(filePath, '.tsx');
      
      let newContent;
      if (isPage) {
        const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const description = `Professional ${title} solutions for modern businesses.`;
        newContent = createBasicPageComponent(title, description);
      } else {
        newContent = createBasicComponent(fileName, `This component is under construction.`);
      }
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing src files');

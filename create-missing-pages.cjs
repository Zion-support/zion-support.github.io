const fs = require('fs');
const path = require('path');

// Read App.tsx to get all the page imports
const appContent = fs.readFileSync('App.tsx', 'utf8');

// Extract all page imports
const pageImports = appContent.match(/React\.lazy\(\(\) => import\("\.\/app\/([^"]+)"\)\)/g);

if (!pageImports) {
  console.log('No page imports found');
  process.exit(0);
}

const missingPages = [];

pageImports.forEach(importLine => {
  const match = importLine.match(/React\.lazy\(\(\) => import\("\.\/app\/([^"]+)"\)\)/);
  if (match) {
    const pagePath = match[1];
    const fullPath = path.join('app', pagePath + '.tsx');
    
    if (!fs.existsSync(fullPath)) {
      missingPages.push(fullPath);
    }
  }
});

console.log(`Found ${missingPages.length} missing pages`);

// Create a basic page template
const createPageTemplate = (pagePath) => {
  const pathParts = pagePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name
  const title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '')}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="${title} - Zion Tech Group"
        description="Professional ${title.toLowerCase()} services by Zion Tech Group. Expert solutions for your business needs."
        keywords="${title.toLowerCase()}, technology solutions, business services"
        canonical="https://ziontechgroup.com/${pagePath.replace('/page', '')}"
      />
      
      <main className="relative z-10">
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                ${title}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Professional ${title.toLowerCase()} services designed to help your business grow and succeed.
            </p>
          </ResponsiveContainer>
        </section>
        
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                This page is currently under development. Please check back soon for more information about our ${title.toLowerCase()} services.
              </p>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '')}Page;
`;
};

// Create missing pages
missingPages.forEach(pagePath => {
  const dir = path.dirname(pagePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create the page file
  const content = createPageTemplate(pagePath);
  fs.writeFileSync(pagePath, content, 'utf8');
  console.log(`Created: ${pagePath}`);
});

console.log(`Created ${missingPages.length} missing pages`);
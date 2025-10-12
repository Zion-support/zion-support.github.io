import fs from 'fs';
import path from 'path';

// List of pages that need to be fixed
pagesToFix = [
  'cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog', 
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'
];

pageTemplate = (pageName, title, componentName) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>
      
      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="containe r mx-auto px-4 py-16">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6">
              <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ${title}
              </span>
            </h1>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services by Zion Tech Group.
            </p>
          </div>

          <div className="b g-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="tex t-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="tex t-gray-300 mb-6">
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;

// Fix pages
pagesToFix.forEach(pageName => {
  title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  pageDir = path.join('/workspace/app', pageName);
  pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Overwrite page file with correct template
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName));
  console.log(`Fixed: ${pageFile}`);
});

console.log('Page fixes completed!');
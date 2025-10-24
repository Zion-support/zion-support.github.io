import fs from 'fs';
import path from 'path';
import React from 'react';
export default ${componentName};`;

// List of pages that need to be fixed;
const pagesToFix = ['cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog',
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'];`'use client';
  return (
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ${title}
              Professional ${title.toLowerCase()} services by Zion Tech Group.

            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions.
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

  );
};

// Fix pages;
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';

  const pageDir = path.join('/workspace/app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');

  // Create directory if it doesn't exist;
  if (!fs.existsSync(pageDir)) {fs.mkdirSync(pageDir, { recursive: true});

  // Overwrite page file with correct template;
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName));
  console.log(`Fixed: ${pageFile}`);
});

console.log('Page fixes completed!');
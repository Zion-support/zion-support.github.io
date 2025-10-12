import fs from 'fs';
import path from 'path';

// List of pages that need to be fixed;
const pagesToFix = [
  'cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog', 
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'
];

const pageTemplate = (pageName, title, componentName) => `'use client';
import React from 'react';
import { Helmet  } from "react-helmet-async";
const ${componentName}: React.FC = () => {
  return (
    <>Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." /></meta>
        <meta name="keywords" content="${pageName}, AI solutions, IT services" /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" ></div>
        <div className="container mx-auto px-4 py-16" ></div>
          <div className="text-center mb-16" ></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" ></h1>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" ></span>
                ${title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" ></p>
              Professional ${title.toLowerCase()} services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center" ></div>
            <h2 className="text-2xl font-bold text-white mb-4" >Coming Soon</h2>
            <p className="text-gray-300 mb-6" ></p>
              We're working on bringing you comprehensive ${title.toLowerCase()} solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300" ></button>
              Contact Us;
            </button>
          </div>
        </div>
      </div></>
  );
};

export default ${componentName};`;

// Fix pages;
pagesToFix.forEach(pageName => {
  const title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const pageDir = path.join('/workspace/app', pageName);
  const pageFile = path.join(pageDir, 'page.tsx');
  
  // Create directory if it doesn't exist;
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Overwrite page file with correct template;
  fs.writeFileSync(pageFile, pageTemplate(pageName, title, componentName));
  console.log(`Fixed: ${pageFile}`);
});

console.log('Page fixes completed!');
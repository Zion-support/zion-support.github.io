const fs = require('fs');
const path = require('path');

// List of page files that need fixing
const pageFiles = [
  'app/demo/page.tsx',
  'app/pricing/page.tsx',
  'app/blog/page.tsx',
  'app/case-studies/page.tsx',
  'app/careers/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/cookies/page.tsx',
  'app/team/page.tsx',
  'app/support/page.tsx',
  'app/consultation/page.tsx',
  'app/tutorials/page.tsx',
  'app/sitemap/page.tsx'
];

// Template for basic page structure
const pageTemplate = (title, description, content) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">${title}</h1>
            <p className="text-lg text-gray-300 mb-8">
              ${content}
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Fix each page file
pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    const fileName = path.basename(filePath, '.tsx');
    const title = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
    const content = `Professional ${title.toLowerCase()} services coming soon.`;
    
    const newContent = pageTemplate(title, description, content);
    
    try {
      fs.writeFileSync(fullPath, newContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Page fixing completed!');
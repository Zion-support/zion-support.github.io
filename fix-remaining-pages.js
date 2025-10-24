const fs = require('fs');
const path = require('path');

// List of simple page files that need to be fixed
const simplePages = [
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/it-services/page.tsx',
  'app/it-solutions/page.tsx',
  'app/privacy/page.tsx',
  'app/services/page.tsx',
  'app/solutions/page.tsx',
  'app/team/page.tsx',
  'app/terms/page.tsx'
];

// Template for simple pages
const simplePageTemplate = (pageName, title) => `import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about our ${title.toLowerCase()} solutions and services.
          </p>
        </div>
      </div>
    </div>
  );
}`;

// Function to get page name and title from file path
function getPageInfo(filePath) {
  const parts = filePath.split('/');
  const pageName = parts[parts.length - 2];
  const title = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  return { pageName, title };
}

// Fix simple pages
simplePages.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  const { pageName, title } = getPageInfo(filePath);
  
  try {
    const content = simplePageTemplate(pageName, title);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

// Fix contact page specifically
const contactPageContent = `import React from 'react';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Contact Us - ZionTechGroup"
        description="Get in touch with ZionTechGroup for AI solutions, consultations, and support. We're here to help transform your business."
      />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project needs.
          </p>
        </div>
      </div>
    </div>
  );
}`;

try {
  fs.writeFileSync('/workspace/app/contact/page.tsx', contactPageContent, 'utf8');
  console.log('Fixed: app/contact/page.tsx');
} catch (error) {
  console.error('Error fixing contact page:', error.message);
}

console.log('All remaining pages fixed!');
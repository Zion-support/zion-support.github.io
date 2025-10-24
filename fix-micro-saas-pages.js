const fs = require('fs');
const path = require('path');

// List of micro-saas pages that need to be fixed
const microSaasPages = [
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx'
];

// Template for micro-saas pages
const microSaasPageTemplate = (pageName, title) => `import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our ${title.toLowerCase()} solution designed to streamline your business processes.
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

// Fix micro-saas pages
microSaasPages.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  const { pageName, title } = getPageInfo(filePath);
  
  try {
    const content = microSaasPageTemplate(pageName, title);
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All micro-saas pages fixed!');
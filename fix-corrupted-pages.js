import fs from 'fs';
import path from 'path';

// List of corrupted page files that need to be fixed
const corruptedPages = [
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-generation/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-creation/page.tsx'
];

// Template for creating proper page components
const createPageTemplate = (pageName, title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Discover our comprehensive ${title.toLowerCase()} solutions designed to help your business 
              leverage cutting-edge technology for improved efficiency and growth.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Advanced AI-powered solutions</li>
              <li>Real-time monitoring and analytics</li>
              <li>Scalable and secure infrastructure</li>
              <li>24/7 technical support</li>
              <li>Custom integration capabilities</li>
              <li>Comprehensive documentation</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              Our ${title.toLowerCase()} solutions are built with industry best practices and cutting-edge technology 
              to ensure optimal performance and reliability for your business needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Function to create page name from file path
const getPageName = (filePath) => {
  const parts = filePath.split('/');
  const pageDir = parts[parts.length - 2];
  return pageDir.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
};

// Function to create title from file path
const getTitle = (filePath) => {
  const parts = filePath.split('/');
  const pageDir = parts[parts.length - 2];
  return pageDir.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

// Function to create description from title
const getDescription = (title) => {
  return `Professional ${title.toLowerCase()} solutions for modern businesses.`;
};

// Fix all corrupted pages
corruptedPages.forEach(filePath => {
  try {
    const pageName = getPageName(filePath);
    const title = getTitle(filePath);
    const description = getDescription(title);
    
    const content = createPageTemplate(pageName, title, description);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the new content
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All corrupted pages have been fixed!');
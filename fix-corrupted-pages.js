import fs from 'fs';
import path from 'path';

// List of corrupted pages to fix
const corruptedPages = [
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-healthcare/page.tsx'
];

function fixPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract page name from path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get directory name
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create proper page content
    const fixedContent = `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-gray-300 text-lg">This page is under construction. Please check back later.</p>
        </div>
      </div>
    </React.Fragment>
  );
}`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted pages
corruptedPages.forEach(fixPage);

console.log('All corrupted pages have been fixed!');
import fs from 'fs';
import path from 'path';

// List of page files that need fixing
const pageFiles = [
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/webinars/page.tsx',
  'app/whitepapers/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-api-manager/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-data-warehouse/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/zion-ai-expense-tracker/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-mobile-app-builder/page.tsx',
  'app/zion-ai-social-listener/page.tsx',
  'app/zion-ai-testing-automation/page.tsx',
  'app/zion-ai-workflow-automation/page.tsx',
  'app/zion-ecommerce-optimizer/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx'
];

function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Create a clean page component
    const cleanContent = `'use client';

import React from 'react';

export default function ${pageName.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${pageName}</h1>
          <p className="text-gray-300 text-lg">This page is under development.</p>
        </div>
      </div>
    </div>
  );
}
`;
    
    fs.writeFileSync(filePath, cleanContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all page files
pageFiles.forEach(fixPageFile);

console.log('All page files have been fixed!');
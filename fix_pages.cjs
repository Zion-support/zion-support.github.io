const fs = require('fs');
const path = require('path');

const pageFiles = [
  'app/zion-ai-workflow-automation/page.tsx',
  'app/zion-ai-social-listener/page.tsx',
  'app/whitepapers/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/zion-ai-testing-automation/page.tsx',
  'app/zion-ai-mobile-app-builder/page.tsx',
  'app/create-ad/page.tsx',
  'app/zion-ai-data-warehouse/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/zion-ecommerce-optimizer/page.tsx',
  'app/zion-ai-api-manager/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/zion-ai-expense-tracker/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/offline/page.tsx',
  'app/webinars/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-document-processor/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/zion-ai-lead-scoring/page.tsx',
  'app/zion-ai-email-optimizer/page.tsx',
  'app/medical-records-manager/page.tsx'
];

function getPageTitle(filePath) {
  const fileName = path.basename(path.dirname(filePath));
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the broken pattern
    if (content.includes('Page content') && content.includes('This page is under development.')) {
      const title = getPageTitle(filePath);
      const newContent = `'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          <p className="text-gray-600 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all page files
pageFiles.forEach(fixPageFile);
console.log('Page files fixed!');

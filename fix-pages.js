import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of page files that need fixing
const pageFiles = [
  'app/it-infrastructure/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/web-development/page.tsx',
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

// Function to get page name from file path
function getPageName(filePath) {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 2]; // Get the directory name before page.tsx
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Template for page components
function createPageTemplate(pageName) {
  return `"use client";
import React from "react";

export default function ${pageName.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${pageName}</h1>
          <p className="text-gray-300 text-xl mb-8">This page is under development.</p>
        </div>
      </div>
    </div>
  );
}`;
}

// Fix each page file
pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const pageName = getPageName(filePath);
  const content = createPageTemplate(pageName);
  
  try {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Page fixing completed!');
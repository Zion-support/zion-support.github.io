#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create a simplified page template
function createSimplifiedPage(filePath, pageName) {
  const componentName = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
  
  return `'use client';

import React from 'react';

const ${componentName}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${pageName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${pageName} services by Zion Tech Group. Advanced AI and IT solutions for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 mb-6">
              We provide comprehensive ${pageName} solutions tailored to your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Service 1</h3>
                <p className="text-gray-300">Description of service 1</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Service 2</h3>
                <p className="text-gray-300">Description of service 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName}Page;
`;
}

// List of micro-saas pages to simplify
const microSaasPages = [
  'app/micro-saas/ai-content-writer/page.tsx',
  'app/micro-saas/analytics-dashboard/page.tsx',
  'app/micro-saas/appointment-scheduler/page.tsx',
  'app/micro-saas/chat-analytics/page.tsx',
  'app/micro-saas/content-generator/page.tsx',
  'app/micro-saas/document-processor/page.tsx',
  'app/micro-saas/email-marketing/page.tsx',
  'app/micro-saas/expense-tracker/page.tsx',
  'app/micro-saas/inventory-management/page.tsx',
  'app/micro-saas/lead-scoring/page.tsx',
  'app/micro-saas/seo-optimizer/page.tsx',
  'app/micro-saas/social-manager/page.tsx',
  'app/micro-saas/support-bot/page.tsx'
];

// Main function
function simplifyPages() {
  console.log('Starting to simplify pages...');
  
  microSaasPages.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    try {
      // Extract page name from file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get the folder name
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      const content = createSimplifiedPage(filePath, pageName);
      fs.writeFileSync(fullPath, content);
      console.log(`Simplified: ${filePath}`);
    } catch (error) {
      console.error(`Error simplifying ${filePath}:`, error.message);
    }
  });
  
  console.log('Finished simplifying pages!');
}

// Run the simplification
simplifyPages();
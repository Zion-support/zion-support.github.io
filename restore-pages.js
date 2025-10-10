#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// List of all page files that need to be restored
const pageFiles = [
  'ai-services/page.tsx',
  'ai-marketing/page.tsx',
  'ai-automation/page.tsx',
  'ai-healthcare/page.tsx',
  'ai-fintech/page.tsx',
  'ai-content-generation/page.tsx',
  'ai-data-analytics/page.tsx',
  'ai-cybersecurity/page.tsx',
  'ai-workflow-automation/page.tsx',
  'ai-mobile-app-development/page.tsx',
  'ai-ecommerce-solutions/page.tsx',
  'ai-customer-support/page.tsx',
  'ai-sales-automation/page.tsx',
  'ai-data-visualization/page.tsx',
  'ai-lead-generation/page.tsx',
  'ai-document-processing/page.tsx',
  'it-services/page.tsx',
  'it-infrastructure/page.tsx',
  'cybersecurity/page.tsx',
  'devops/page.tsx',
  'database/page.tsx',
  'networking/page.tsx',
  'ai-crm/page.tsx',
  'ai-analytics-dashboard/page.tsx',
  'ai-chatbot-builder/page.tsx',
  'ai-email-marketing/page.tsx',
  'ai-writing-assistant/page.tsx',
  'quantum-computing/page.tsx',
  'autonomous-systems/page.tsx',
  'blockchain-web3/page.tsx',
  'iot-edge-computing/page.tsx',
  'business-intelligence/page.tsx',
  'robotics/page.tsx',
  'team/page.tsx',
  'careers/page.tsx',
  'news/page.tsx',
  'about/page.tsx',
  'contact/page.tsx',
  'services/page.tsx',
  'blog/page.tsx',
  'case-studies/page.tsx',
  'pricing/page.tsx',
  'demo/page.tsx',
  'consultation/page.tsx',
  'ai-project-manager/page.tsx',
  'ai-customer-support-bot/page.tsx',
  'ai-ml-platform/page.tsx'
];

// Function to create a basic page component
function createPageComponent(pageName) {
  const componentName = pageName.split('/')[0]
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
  
  const displayName = pageName.split('/')[0]
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${displayName}</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ${displayName.toLowerCase()} solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ${componentName};`;
}

// Function to restore a page file
function restorePageFile(pagePath) {
  const fullPath = path.join(__dirname, 'src', pagePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  const pageName = pagePath.replace('.tsx', '');
  const content = createPageComponent(pageName);
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Restored: ${pagePath}`);
}

// Main execution
console.log('Starting page restoration...');

let restoredCount = 0;
for (const pageFile of pageFiles) {
  try {
    restorePageFile(pageFile);
    restoredCount++;
  } catch (error) {
    console.error(`Error restoring ${pageFile}:`, error.message);
  }
}

console.log(`Restored ${restoredCount} page files`);
console.log('Page restoration complete!');
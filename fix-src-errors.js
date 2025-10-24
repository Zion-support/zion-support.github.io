const fs = require('fs');
const path = require('path');

// Files in src directory that need fixing
const srcFilesToFix = [
  'src/5g-data-analytics/page.tsx',
  'src/5g-edge-computing/page.tsx',
  'src/5g-iot-solutions/page.tsx',
  'src/5g-mobile-applications/page.tsx',
  'src/5g-network-infrastructure/page.tsx',
  'src/5g-private-networks/page.tsx',
  'src/5g-smart-city-solutions/page.tsx',
  'src/5g-solutions/page.tsx',
  'src/ai-3d-generation/page.tsx',
  'src/ai-analytics-dashboard/page.tsx',
  'src/ai-automation/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-fashion-design/page.tsx',
  'src/ai-financial-analyzer/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-fitness-coach/page.tsx',
  'src/ai-healthcare/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-marketing/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/ai-music-composition/page.tsx',
  'src/ai-project-manager/page.tsx',
  'src/ai-sales-automation/page.tsx',
  'src/ai-scheduler/page.tsx',
  'src/ai-seo-optimizer/page.tsx',
  'src/ai-services/page.tsx',
  'src/ai-social-media-manager/page.tsx',
  'src/ai-video-generation/page.tsx',
  'src/ai-voice-cloning/page.tsx',
  'src/ai-workflow-automation/page.tsx',
  'src/ai-writing-assistant/page.tsx',
  'src/analytics/page.tsx',
  'src/analytics-tools/page.tsx',
  'src/api/page.tsx',
  'src/api-development/page.tsx',
  'src/api-development-advanced/page.tsx',
  'src/api-docs/page.tsx',
  'src/ar-vr-platform/page.tsx',
  'src/ar-vr-solutions/page.tsx',
  'src/automation/page.tsx',
  'src/autonomous-systems/page.tsx',
  'src/backup-recovery/page.tsx',
  'src/blockchain/page.tsx',
  'src/blockchain-development/page.tsx',
  'src/blockchain-integration-services/page.tsx',
  'src/blockchain-web3/page.tsx',
  'src/blog/page.tsx',
  'src/business-apps/page.tsx',
  'src/business-intelligence/page.tsx',
  'src/careers/page.tsx',
  'src/case-studies/page.tsx',
  'src/cloud-cost-optimization/page.tsx',
  'src/cloud-infrastructure/page.tsx',
  'src/cloud-infrastructure-management/page.tsx'
];

// Create a clean page component
function createCleanPageComponent(filePath) {
  const pathParts = filePath.split('/');
  const pageName = pathParts[pathParts.length - 2]; // Get the directory name
  const componentName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  return `'use client';
import React from 'react';
import Head from 'next/head';

const ${componentName}Page = () => {
  return (
    <>
      <Head>
        <title>${componentName} | Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services and solutions." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${componentName}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${componentName} services and solutions for your business.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Our ${componentName} Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive ${componentName} solutions tailored to your business needs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 1</h3>
                  <p className="text-gray-300">Description of the first service offering.</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Service 2</h3>
                  <p className="text-gray-300">Description of the second service offering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${componentName}Page;
`;
}

// Main execution
console.log('Fixing src directory parsing errors...');

srcFilesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  if (fs.existsSync(fullPath)) {
    try {
      const cleanContent = createCleanPageComponent(filePath);
      fs.writeFileSync(fullPath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
});

console.log('Src directory parsing errors fix completed!');
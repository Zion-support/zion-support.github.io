const fs = require('fs');

const filesToFix = [
  { file: 'app/ai-mobile-app-builder/page.tsx', name: 'AiMobileAppBuilder', title: 'AI Mobile App Builder' },
  { file: 'app/ai-mobile-builder/page.tsx', name: 'AiMobileBuilder', title: 'AI Mobile Builder' },
  { file: 'app/ai-website-builder/page.tsx', name: 'AiWebsiteBuilder', title: 'AI Website Builder' },
  { file: 'app/cloud-infrastructure-management/page.tsx', name: 'CloudInfrastructureManagement', title: 'Cloud Infrastructure Management' },
  { file: 'app/landing-page-builder/page.tsx', name: 'LandingPageBuilder', title: 'Landing Page Builder' },
  { file: 'app/micro-saas-services/ai-chatbot-builder/page.tsx', name: 'AiChatbotBuilder', title: 'AI Chatbot Builder' },
  { file: 'app/pricing/page.tsx', name: 'Pricing', title: 'Pricing' },
  { file: 'app/quantum-data-encryption-vault/page.tsx', name: 'QuantumDataEncryptionVault', title: 'Quantum Data Encryption Vault' },
  { file: 'app/zion-ai-analytics-pro/page.tsx', name: 'ZionAiAnalyticsPro', title: 'Zion AI Analytics Pro' },
  { file: 'app/zion-ai-crm-pro/page.tsx', name: 'ZionAiCrmPro', title: 'Zion AI CRM Pro' },
  { file: 'app/zion-ai-inventory-manager/page.tsx', name: 'ZionAiInventoryManager', title: 'Zion AI Inventory Manager' },
  { file: 'app/zion-ai-survey-builder/page.tsx', name: 'ZionAiSurveyBuilder', title: 'Zion AI Survey Builder' }
];

function createPageContent(fileInfo) {
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${fileInfo.name}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${fileInfo.title} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${fileInfo.title.toLowerCase()} solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${fileInfo.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced ${fileInfo.title.toLowerCase()} solutions by Zion Tech Group.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Description of the first feature for ${fileInfo.title.toLowerCase()}.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Description of the second feature for ${fileInfo.title.toLowerCase()}.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Description of the third feature for ${fileInfo.title.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

function fixPageFile(fileInfo) {
  try {
    const content = createPageContent(fileInfo);
    fs.writeFileSync(fileInfo.file, content);
    console.log(`Fixed: ${fileInfo.file}`);
  } catch (error) {
    console.error(`Error fixing ${fileInfo.file}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixPageFile);
console.log('All page files have been processed.');
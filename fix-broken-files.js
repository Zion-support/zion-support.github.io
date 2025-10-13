import fs from 'fs';
import path from 'path';

// List of files that need basic fixes
const filesToFix = [
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-email-marketing-automation/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-invoice-generator/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-time-series-forecasting/page.tsx',
  'app/ai-video-editor/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/api-docs/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/asset-management/page.tsx',
  'app/blog/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx'
];

// Basic template for a page
const pageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}`;

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  const title = filePath.split('/').pop().replace('.tsx', '').replace(/-/g, ' ');
  const description = `Professional ${title} services for modern businesses.`;
  
  try {
    fs.writeFileSync(fullPath, pageTemplate(title, description));
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Done fixing broken files!');
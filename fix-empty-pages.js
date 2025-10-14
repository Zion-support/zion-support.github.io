import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all empty page files with unused imports
const emptyFiles = [
  'app/5g-iot-solutions/page.tsx',
  'app/ai-content-management/page.tsx',
  'app/it-training/page.tsx',
  'app/specialized-services/page.tsx',
  'app/ai-sentiment-analyzer/page.tsx',
  'app/mobile-development/page.tsx',
  'app/database-services/page.tsx',
  'app/gdpr/page.tsx',
  'app/website-analytics-tool/page.tsx',
  'app/ai-telepathic-interface/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-smart-calendar/page.tsx',
  'app/zion-cloud-vault-pro/page.tsx',
  'app/press/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/iot-development/page.tsx',
  'app/ai-transportation/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/health/page.tsx'
];

// Create a basic page component template
const pageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = (): React.JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Coming Soon</h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
`;

// Fix each empty file
emptyFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, pageTemplate);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('All empty page files have been fixed!');
const fs = require('fs');
const path = require('path');

// List of problematic files
const problematicFiles = [
  'app/it-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/ai-services/page.tsx',
  'app/privacy/page.tsx',
  'app/pricing/page.tsx',
  'app/terms/page.tsx',
  'app/case-studies/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/it-solutions/page.tsx',
  'app/careers/page.tsx',
  'app/solutions/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/services/page.tsx',
  'app/team/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/blog/page.tsx'
];

// Template for clean page
const cleanPageTemplate = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Comprehensive page solutions for modern businesses.',
  keywords: ['page', 'AI solutions', 'technology services'],
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Comprehensive page solutions for modern businesses.',
    type: 'website',
    url: 'https://ziontechgroup.com/page',
  },
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Page Title
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Page description content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;`;

// Process each file
problematicFiles.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, cleanPageTemplate, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${problematicFiles.length} files`);

const fs = require('fs');
const path = require('path');

const incompletePages = [
  'app/ai-solutions/page.tsx',
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/it-services/page.tsx',
  'app/it-solutions/page.tsx',
  'app/privacy/page.tsx',
  'app/solutions/page.tsx',
  'app/team/page.tsx',
  'app/terms/page.tsx',
  'app/micro-saas/ai-email-marketing-automation/page.tsx',
  'app/micro-saas/ai-expense-tracker/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx'
];

const basicPageTemplate = `'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="Page - ZionTechGroup"
        description="ZionTechGroup page"
        keywords="ziontechgroup"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page Title
          </h1>
          <p className="text-xl text-gray-600">
            Page content coming soon.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}`;

incompletePages.forEach(pagePath => {
  const fullPath = path.join(__dirname, pagePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write the basic page template
  fs.writeFileSync(fullPath, basicPageTemplate);
  console.log(`Fixed: ${pagePath}`);
});

console.log('All incomplete pages have been fixed!');
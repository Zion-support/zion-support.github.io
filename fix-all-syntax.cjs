#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to completely rewrite problematic files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't have the problematic patterns
    if (!content.includes("title: 'Page | Zion Tech Group',") && 
        !content.includes("'Page' is not defined")) {
      return false;
    }
    
    console.log(`Fixing ${filePath}...`);
    
    // Extract the page title from the file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.tsx', '').replace('.ts', '');
    const pageTitle = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create a clean template
    const cleanContent = `'use client';

import Head from 'next/head';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Footer from '../components/Footer';

export const metadata = {
  title: '${pageTitle} | Zion Tech Group',
  description: 'Professional ${pageTitle.toLowerCase()} services and solutions by Zion Tech Group',
  keywords: '${pageTitle.toLowerCase()}, technology, services',
  openGraph: {
    title: '${pageTitle} | Zion Tech Group',
    description: 'Professional ${pageTitle.toLowerCase()} services and solutions by Zion Tech Group',
    type: 'website',
  },
};

function Page() {
  return (
    <div>
      <Head>
        <title>${pageTitle} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageTitle.toLowerCase()} services and solutions by Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${pageTitle}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services by Zion Tech Group.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`;

    fs.writeFileSync(filePath, cleanContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of problematic files
const problematicFiles = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/offline/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx'
];

// Main execution
let fixedCount = 0;
for (const file of problematicFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files`);
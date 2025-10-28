#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of micro-saas files to fix
const filesToFix = [
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx'
];

// Template for a basic page component
const createMicroSaasPage = (title, description, pathName) => `import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${title.toLowerCase()}, micro saas, technology, services, AI, IT solutions',
  openGraph: {
    title: '${title} | Zion Tech Group',
    description: '${description}',
    type: 'website',
  },
};

function ${pathName}Page() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="mt-12">
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Professional ${title.toLowerCase()} micro SaaS services by Zion Tech Group. 
                We provide cutting-edge solutions to help your business grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Wrapped(props: Record<string, unknown>) {
  return (
    <ErrorBoundary>
      <${pathName}Page {...props} />
    </ErrorBoundary>
  );
}`;

// Function to convert path to component name
const pathToComponentName = (path) => {
  const name = path
    .replace('app/micro-saas-services/', '')
    .replace('/page.tsx', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
  
  // Handle special cases
  if (name === '') return 'MicroSaasServices';
  if (name === 'Page') return 'MicroSaasServices';
  
  return name;
};

// Function to create title from path
const pathToTitle = (path) => {
  if (path === 'app/micro-saas-services/page.tsx') {
    return 'Micro SaaS Services';
  }
  return path
    .replace('app/micro-saas-services/', '')
    .replace('/page.tsx', '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Function to create description from path
const pathToDescription = (path) => {
  const title = pathToTitle(path);
  return `Professional ${title} micro SaaS services and solutions`;
};

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Fixing ${filePath}...`);
    
    const componentName = pathToComponentName(filePath);
    const title = pathToTitle(filePath);
    const description = pathToDescription(filePath);
    
    const newContent = createMicroSaasPage(title, description, componentName);
    
    fs.writeFileSync(fullPath, newContent);
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All micro-saas files have been fixed!');
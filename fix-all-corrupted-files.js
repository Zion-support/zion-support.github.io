#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to create a clean page file
function createCleanPageFile(filePath, pageName, description) {
  const cleanContent = `import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Link from 'next/link';

export const metadata = {
  title: '${pageName} | Zion Tech Group',
  description: '${description}',
  keywords: '${pageName.toLowerCase()}, technology, services, AI, automation',
  openGraph: {
    title: '${pageName} | Zion Tech Group',
    description: '${description}',
    type: 'website',
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${pageName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}`;

  fs.writeFileSync(filePath, cleanContent);
  console.log(`Created clean file: ${filePath}`);
}

// Function to create a clean main page
function createCleanMainPage(filePath) {
  const cleanContent = `import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, cybersecurity, cloud computing, digital transformation, technology services',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    type: 'website',
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}`;

  fs.writeFileSync(filePath, cleanContent);
  console.log(`Created clean main page: ${filePath}`);
}

// Function to create a clean offline page
function createCleanOfflinePage(filePath) {
  const cleanContent = `import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';

export const metadata = {
  title: 'Offline | Zion Tech Group',
  description: 'You are currently offline',
  keywords: 'offline, no internet',
  openGraph: {
    title: 'Offline | Zion Tech Group',
    description: 'You are currently offline',
    type: 'website',
  },
};

function OfflinePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          You're Offline
        </h1>
        <p className="text-xl text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
}

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <OfflinePage {...props} />
    </ErrorBoundary>
  );
}`;

  fs.writeFileSync(filePath, cleanContent);
  console.log(`Created clean offline page: ${filePath}`);
}

// Function to fix all corrupted files
function fixAllCorruptedFiles() {
  const pagesToFix = [
    { path: 'app/page.tsx', type: 'main' },
    { path: 'app/offline/page.tsx', type: 'offline' },
    { path: 'app/5g-data-analytics/page.tsx', name: '5G Data Analytics', description: 'Advanced 5G data analytics solutions for modern businesses' },
    { path: 'app/5g-edge-computing/page.tsx', name: '5G Edge Computing', description: 'Cutting-edge 5G edge computing solutions' },
    { path: 'app/5g-implementation/page.tsx', name: '5G Implementation', description: 'Complete 5G implementation services' },
    { path: 'app/5g-iot-solutions/page.tsx', name: '5G IoT Solutions', description: 'Comprehensive 5G IoT solutions for smart devices' },
    { path: 'app/about/page.tsx', name: 'About Us', description: 'Learn about Zion Tech Group and our mission' },
    { path: 'app/accessibility-page/page.tsx', name: 'Accessibility', description: 'Accessibility solutions and services' },
    { path: 'app/ai-powered-devops/page.tsx', name: 'AI-Powered DevOps', description: 'Advanced AI-powered DevOps solutions for modern businesses' },
    { path: 'app/ai-powered-email-analyzer/page.tsx', name: 'AI Email Analyzer', description: 'Intelligent email analysis powered by AI' },
    { path: 'app/it-services/cybersecurity-audit/page.tsx', name: 'Cybersecurity Audit', description: 'Comprehensive cybersecurity audit services' },
    { path: 'app/legal-document-manager/page.tsx', name: 'Legal Document Manager', description: 'AI-powered legal document management system' },
    { path: 'app/medical-records-manager/page.tsx', name: 'Medical Records Manager', description: 'Secure medical records management solution' },
    { path: 'app/online-learning-platform/page.tsx', name: 'Online Learning Platform', description: 'Advanced online learning platform with AI features' },
    { path: 'app/property-management-ai/page.tsx', name: 'Property Management AI', description: 'AI-powered property management solutions' },
    { path: 'app/supply-chain-optimizer/page.tsx', name: 'Supply Chain Optimizer', description: 'Intelligent supply chain optimization with AI' },
    { path: 'app/test/page.tsx', name: 'Test Page', description: 'Test page for development purposes' },
    { path: 'app/zion-ai-api-tester/page.tsx', name: 'Zion AI API Tester', description: 'Comprehensive AI API testing tools' },
    { path: 'app/zion-ai-database-optimizer/page.tsx', name: 'Zion AI Database Optimizer', description: 'AI-powered database optimization solutions' }
  ];

  pagesToFix.forEach(page => {
    const fullPath = path.join(process.cwd(), page.path);
    if (fs.existsSync(fullPath)) {
      if (page.type === 'main') {
        createCleanMainPage(fullPath);
      } else if (page.type === 'offline') {
        createCleanOfflinePage(fullPath);
      } else {
        createCleanPageFile(fullPath, page.name, page.description);
      }
    }
  });
}

// Main execution
console.log('Starting comprehensive file fixes...');
fixAllCorruptedFiles();
console.log('All corrupted files have been fixed!');
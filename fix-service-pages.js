#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const servicePages = [
  'ai-customer-support',
  'ai-data-analytics', 
  'ai-financial-analytics',
  'ai-financial-analyzer',
  'ai-hr-management',
  'ai-inventory-management',
  'ai-marketing-automation',
  'ai-meeting-assistant',
  'ai-powered-crm',
  'ai-project-management-suite',
  'ai-services',
  'analytics-dashboard',
  'automation-solutions',
  'blockchain-solutions',
  'blockchain',
  'cloud-services',
  'crm-platform',
  'crm-solution',
  'cybersecurity',
  'data-analytics',
  'devops-automation',
  'digital-transformation',
  'ecommerce-platform',
  'email-automation',
  'helpdesk-platform',
  'industry-solutions/finance',
  'it-services',
  'micro-saas',
  'mobile-app-development',
  'mobile-development',
  'project-management-suite',
  'project-management',
  'smart-invoice-generator'
];

function createServicePage(serviceName) {
  const title = serviceName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const content = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Professional ${title.toLowerCase()} services to help your business grow and succeed.',
  keywords: '${serviceName.replace(/-/g, ', ')}, business solutions, professional services',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: '${title} | Zion Tech Group',
    description: 'Professional ${title.toLowerCase()} services to help your business grow and succeed.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function ${serviceName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('')}Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services to help your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service is currently under development. Please contact us for more information.
          </p>
          <a
            href="mailto:kleber@ziontechgroup.com?subject=${title} Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}`;

  return content;
}

// Fix all service pages
for (const service of servicePages) {
  const filePath = `/workspace/app/services/${service}/page.tsx`;
  try {
    const content = createServicePage(service);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Service pages fixed!');
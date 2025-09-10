const fs = require('fs');
const path = require('path');

// List of service pages that need fixing
const servicePages = [
  'app/services/ai-powered-crm/page.tsx',
  'app/services/blockchain-solutions/page.tsx',
  'app/services/cybersecurity/page.tsx',
  'app/services/data-analytics/page.tsx',
  'app/services/devops-automation/page.tsx'
];

// Template for a clean service page
const servicePageTemplate = (serviceName, title) => `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Professional ${serviceName.toLowerCase()} services for your business needs.',
  keywords: '${serviceName.toLowerCase()}, services, business, technology'
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${serviceName.toLowerCase()} services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
            <p className="text-gray-300">
              High-performance solutions that deliver results quickly and consistently.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing systems and workflows.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Grow with your business with our flexible and scalable platform.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our ${serviceName.toLowerCase()} services can transform your business.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}`;

// Fix each service page
servicePages.forEach(filePath => {
  try {
    const serviceName = path.basename(path.dirname(filePath));
    const title = serviceName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const content = servicePageTemplate(serviceName, title);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Service pages fixed successfully!');
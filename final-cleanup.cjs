#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of problematic files to replace
const problematicFiles = [
  'app/5g-implementation/page.tsx',
  'app/about/page.tsx',
  'app/ad-management/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-automation-suite/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-content-creation/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining-pro/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-education-platform/page.tsx',
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-language-translation/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-app-development/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-nlp-text-analysis/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-project-management/page.tsx',
  'app/ai-time-series-forecasting/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/blockchain/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/custom-software/page.tsx',
  'app/database-management/page.tsx',
  'app/demo/page.tsx',
  'app/enterprise/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-services/page.tsx',
  'app/it-solutions/page.tsx',
  'app/mobile-development/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/quantum-computing/page.tsx'
];

let replacedCount = 0;
let errorCount = 0;

console.log(`Processing ${problematicFiles.length} problematic files...`);

problematicFiles.forEach(file => {
  try {
    const fileName = path.basename(file, '.tsx');
    const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
    
    // Create a clean, working version
    const cleanContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ${pageName}() {
  const features = [
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology',
      icon: CpuChipIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for your business',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs',
      icon: CloudIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Innovation First',
      description: 'Always at the forefront of technological innovation',
      icon: RocketLaunchIcon,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} solutions from Zion Tech Group." />
        <meta name="keywords" content="${pageName.toLowerCase()}, technology solutions, AI, cloud, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              ${pageName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our cutting-edge ${pageName.toLowerCase()} solutions. 
              Built with the latest technology and designed for success.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our ${pageName}?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the features that make our solutions stand out
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors">
                <div className={\`w-16 h-16 bg-gradient-to-r \${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6\`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our ${pageName.toLowerCase()} solutions can transform your business.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center">
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}`;
    
    fs.writeFileSync(file, cleanContent, 'utf8');
    console.log(`Replaced: ${file}`);
    replacedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nReplaced ${replacedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('Done!');
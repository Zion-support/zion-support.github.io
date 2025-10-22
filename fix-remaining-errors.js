const fs = require('fs');
const path = require('path');

// List of files that need to be fixed
const filesToFix = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-chatbot-enterprise/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-moderation/page.tsx',
  'app/ai-conversation-analytics/page.tsx',
  'app/ai-conversational-ai/page.tsx',
  'app/ai-customer-churn/page.tsx',
  'app/ai-document-intelligence/page.tsx',
  'app/ai-financial-forecasting/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-integration-services/page.tsx',
  'app/ai-iot-analytics/page.tsx',
  'app/ai-knowledge-management/page.tsx',
  'app/ai-predictive-modeling/page.tsx',
  'app/ai-sentiment-analysis/page.tsx',
  'app/ai-speech-synthesis/page.tsx',
  'app/ai-supply-chain-ai/page.tsx',
  'app/ai-video-analysis/page.tsx',
  'app/api-development-advanced/page.tsx',
  'app/cloud-cost-optimization/page.tsx',
  'app/cloud-migration-advanced/page.tsx',
  'app/cloud-native-development/page.tsx',
  'app/cloud-native-security/page.tsx',
  'app/compliance-automation/page.tsx',
  'app/cybersecurity-advanced/page.tsx',
  'app/data-visualization/page.tsx',
  'app/disaster-recovery-advanced/page.tsx',
  'app/e-commerce-development/page.tsx',
  'app/enterprise-integration/page.tsx',
  'app/iot-development/page.tsx',
  'app/iot-integration/page.tsx',
  'app/it-project-management/page.tsx',
  'app/it-security-services/page.tsx',
  'app/machine-learning-ops/page.tsx',
  'app/robotic-process-automation/page.tsx',
  'app/security-automation/page.tsx',
  'app/workflow-automation/page.tsx',
  'app/zion-ai-accounting-assistant/page.tsx',
  'app/zion-ai-chatbot-builder/page.tsx',
  'app/zion-ai-code-reviewer/page.tsx',
  'app/zion-ai-contract-analyzer/page.tsx',
  'app/zion-ai-customer-service-pro/page.tsx',
  'app/zion-ai-data-cleaner/page.tsx',
  'app/zion-ai-document-ai/page.tsx',
  'app/zion-ai-email-assistant/page.tsx',
  'app/zion-ai-energy-manager/page.tsx',
  'app/zion-ai-fraud-detector/page.tsx',
  'app/zion-ai-marketing-automation/page.tsx',
  'app/zion-ai-meeting-assistant/page.tsx',
  'app/zion-ai-recruitment-pro/page.tsx',
  'app/zion-ai-seo-optimizer/page.tsx',
  'app/zion-ai-supply-chain-optimizer/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/zion-ai-translator-pro/page.tsx',
  'app/zion-ai-video-editor/page.tsx',
  'app/zion-analytics-pro/page.tsx',
  'app/zion-chat-ai/page.tsx',
  'app/zion-cloud-vault/page.tsx',
  'app/zion-compliance-manager/page.tsx',
  'app/zion-content-studio/page.tsx',
  'app/zion-crm-intelligence/page.tsx',
  'app/zion-customer-insights/page.tsx',
  'app/zion-data-sync/page.tsx',
  'app/zion-email-automation/page.tsx',
  'app/zion-inventory-smart/page.tsx',
  'app/zion-invoice-genius/page.tsx',
  'app/zion-lead-magnet/page.tsx',
  'app/zion-performance-monitor/page.tsx',
  'app/zion-project-master/page.tsx',
  'app/zion-security-shield/page.tsx',
  'app/zion-social-scheduler/page.tsx',
  'app/zion-workflow-automation/page.tsx'
];

// Template for a clean page component
const createCleanPage = (title, description, keywords) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Shield, Brain, Globe } from 'lucide-react';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];

  const benefits = [
    'AI-powered automation',
    'Real-time processing',
    'Scalable solutions',
    'Enterprise-grade security',
    '24/7 support',
    'Custom integrations'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-300">
                Why choose our solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;`;

// Function to get page info from filename
function getPageInfo(filename) {
  const name = path.basename(filename, '.tsx');
  const title = name.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} solutions powered by advanced AI and cutting-edge technology.`;
  const keywords = `${title.toLowerCase()}, AI solutions, IT services, automation, technology, business solutions`;
  
  return { title, description, keywords };
}

// Fix all files
filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const { title, description, keywords } = getPageInfo(filePath);
    const cleanContent = createCleanPage(title, description, keywords);
    
    fs.writeFileSync(fullPath, cleanContent, 'utf8');
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All files have been fixed!');
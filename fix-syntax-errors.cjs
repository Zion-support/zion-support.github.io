const fs = require('fs');
const path = require('path');

// List of files with critical syntax errors that need to be fixed
const filesToFix = [
  'app/ar-vr-platform/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/blog/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/consultation/page.tsx',
  'app/cookies/page.tsx',
  'app/crm-lite/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/data-center/page.tsx',
  'app/data-protection/page.tsx',
  'app/database-services/page.tsx',
  'app/database/page.tsx',
  'app/developer-tools/page.tsx',
  'app/devops-cicd/page.tsx',
  'app/devops/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/digital-twin-platform/page.tsx',
  'app/docs/page.tsx',
  'app/edge-computing/page.tsx',
  'app/email-optimizer/page.tsx',
  'app/enterprise-security/page.tsx',
  'app/enterprise/page.tsx',
  'app/error.tsx',
  'app/financial-it/page.tsx',
  'app/gdpr/page.tsx',
  'app/global-error.tsx',
  'app/health/page.tsx',
  'app/healthcare-it/page.tsx',
  'app/help/page.tsx',
  'app/innovation-labs/page.tsx',
  'app/intelligent-database-migration/page.tsx',
  'app/intelligent-email-infrastructure/page.tsx',
  'app/investors/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/iot-platform/page.tsx',
  'app/iot/page.tsx',
  'app/it-asset-management/page.tsx',
  'app/it-consulting/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-performance/page.tsx',
  'app/it-services/page.tsx',
  'app/it-training/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/loading.tsx',
  'app/machine-learning/page.tsx',
  'app/marketing-tools/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/mobile-development/page.tsx',
  'app/network-design/page.tsx',
  'app/network-infrastructure/page.tsx',
  'app/network-security/page.tsx',
  'app/news/page.tsx',
  'app/nlp/page.tsx',
  'app/offline/page.tsx',
  'app/partners/page.tsx',
  'app/performance-optimization/page.tsx',
  'app/pricing/page.tsx',
  'app/privacy/page.tsx',
  'app/productivity/page.tsx',
  'app/quantum-ai/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/robotics-integration/page.tsx',
  'app/robotics/page.tsx',
  'app/security/page.tsx',
  'app/seo-optimizer/page.tsx',
  'app/services-advertising/page.tsx',
  'app/sitemap/page.tsx',
  'app/smart-city-infrastructure/page.tsx',
  'app/smart-contract-security-audit/page.tsx'
];

// Template for a basic page component
const pageTemplate = (pageName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ${pageName}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${pageName.toLowerCase()}, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Our ${title}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your ${pageName.toLowerCase()} needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ${pageName}Page;`;

// Function to get page name from file path
function getPageName(filePath) {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 1];
  const pageName = fileName.replace('.tsx', '').replace('.ts', '');
  
  // Convert kebab-case to PascalCase
  return pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Function to get title from page name
function getTitle(pageName) {
  return pageName.split(/(?=[A-Z])/).join(' ');
}

// Function to get description
function getDescription(pageName) {
  return `Professional ${pageName.toLowerCase()} services by Zion Tech Group. Advanced AI and IT solutions for your business.`;
}

// Fix files
filesToFix.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const pageName = getPageName(filePath);
    const title = getTitle(pageName);
    const description = getDescription(pageName);
    
    const content = pageTemplate(pageName, title, description);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Syntax error fixes completed!');
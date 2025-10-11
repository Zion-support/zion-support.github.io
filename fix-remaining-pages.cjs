const fs = require('fs');
const path = require('path');

// List of remaining files to fix
const filesToFix = [
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation-pro/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/ai-customer-service/page.tsx',
  'app/ai-data-analysis/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-mining/page.tsx',
  'app/ai-data-processing/page.tsx',
  'app/ai-data-science/page.tsx',
  'app/ai-deep-learning/page.tsx',
  'app/ai-development/page.tsx',
  'app/ai-document-analysis/page.tsx',
  'app/ai-document-processing/page.tsx',
  'app/ai-education/page.tsx',
  'app/ai-enterprise-solutions/page.tsx',
  'app/ai-finance/page.tsx',
  'app/ai-fraud-detection/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-image-analysis/page.tsx',
  'app/ai-image-processing/page.tsx',
  'app/ai-image-recognition/page.tsx',
  'app/ai-insurance/page.tsx',
  'app/ai-logistics/page.tsx',
  'app/ai-machine-learning/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-medical/page.tsx',
  'app/ai-natural-language-processing/page.tsx',
  'app/ai-neural-networks/page.tsx',
  'app/ai-predictive-analytics/page.tsx',
  'app/ai-process-automation/page.tsx',
  'app/ai-recommendation-engine/page.tsx',
  'app/ai-robotics/page.tsx',
  'app/ai-sales/page.tsx',
  'app/ai-search/page.tsx',
  'app/ai-security/page.tsx',
  'app/ai-sentiment-analysis/page.tsx',
  'app/ai-speech-recognition/page.tsx',
  'app/ai-supply-chain/page.tsx',
  'app/ai-text-analysis/page.tsx',
  'app/ai-text-processing/page.tsx',
  'app/ai-translation/page.tsx',
  'app/ai-voice-assistant/page.tsx',
  'app/ai-web-scraping/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/enterprise-solutions/page.tsx',
  'app/it-infrastructure-design/page.tsx',
  'app/it-project-management/page.tsx',
  'app/mobile-app-development/page.tsx',
  'app/system-administration/page.tsx'
];

// Template for a proper page
const createPageTemplate = (pageName, title, description) => `'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${pageName}: React.FC = () => {
  const features = [
    {
      title: '${title}',
      description: 'Professional ${title.toLowerCase()} services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${title.toLowerCase()}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our ${title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ${pageName};`;

// Function to convert file path to component name and title
function getPageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} services and solutions.`;
  
  return { pageName, title, description };
}

// Fix all files
filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const { pageName, title, description } = getPageInfo(filePath);
      const content = createPageTemplate(pageName, title, description);
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All remaining files fixed!');
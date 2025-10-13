import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of missing pages from App.tsx
const missingPages = [
  'team/page.tsx',
  'careers/page.tsx',
  'ai-content-generation/page.tsx',
  'ai-cybersecurity/page.tsx',
  'ai-workflow-automation/page.tsx',
  'ai-customer-support/page.tsx',
  'ai-sales-automation/page.tsx',
  'ai-data-visualization/page.tsx',
  'ai-analytics/page.tsx',
  'ai-chatbot-builder/page.tsx',
  'ai-crm/page.tsx',
  'ai-computer-vision/page.tsx',
  'ai-document-processing/page.tsx',
  'ai-edge-computing/page.tsx',
  'ai-hr/page.tsx',
  'ai-financial-services/page.tsx',
  'ai-voice-solutions/page.tsx',
  'ai-hr-solutions/page.tsx',
  'it-support/page.tsx',
  'api/page.tsx',
  'mobile-development/page.tsx',
  'devops-cicd/page.tsx',
  'data-analytics/page.tsx',
  'custom-development/page.tsx',
  'it-asset-management/page.tsx',
  'performance-optimization/page.tsx',
  'api-development/page.tsx',
  'data-analytics-bi/page.tsx',
  'quantum-computing/page.tsx',
  'iot-edge-computing/page.tsx',
  'ar-vr-solutions/page.tsx',
  'autonomous-systems/page.tsx',
  '5g-implementation/page.tsx',
  'ai-3d-generation/page.tsx',
  'ai-holographic-workspace/page.tsx',
  'ai-blockchain-solutions/page.tsx',
  'machine-learning/page.tsx',
  'iot/page.tsx',
  'community/page.tsx',
  'business-intelligence/page.tsx',
  'enterprise/page.tsx',
  'digital-transformation/page.tsx',
  'edge-computing/page.tsx'
];

// Generic page template
const createPageTemplate = (serviceName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const ${serviceName}Page: React: React: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge technology solutions for modern businesses.',
      benefits: ['Latest innovations', 'Scalable solutions', 'High performance', 'Future-proof']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and insights.',
      benefits: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Targeted solutions designed for your specific needs.',
      benefits: ['Custom solutions', 'Expert consultation', 'Proven results', 'Ongoing support']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Years Experience', value: '5+' }
  ];

  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="AI, ${serviceName}, automation, technology, solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-300">
              Powerful capabilities designed to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our ${serviceName} solution today and see the difference AI can make.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
};

export default ${serviceName}Page;
`;

// Function to get service name from file path
const getServiceName = (filePath) => {
  const dirName = path.basename(path.dirname(filePath));
  return dirName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

// Function to get title from service name
const getTitle = (serviceName) => {
  return serviceName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Function to get description from title
const getDescription = (title) => {
  return `Advanced ${title.toLowerCase()} solutions powered by artificial intelligence to transform your business operations.`;
};

// Main function
const main = () => {
  let createdCount = 0;
  
  for (const pagePath of missingPages) {
    try {

      const fullPath = path.join(__dirname, 'app', pagePath);
      const dirPath = path.dirname(fullPath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true 
} catch (error) {
  console.error('Error:', error);
});
      }
      
      // Check if file already exists
      if (fs.existsSync(fullPath)) {
        console.log(`File already exists: ${pagePath}`);
        continue;
      }
      
      const serviceName = getServiceName(pagePath);
      const title = getTitle(serviceName);
      const description = getDescription(title);
      
      const content = createPageTemplate(serviceName, title, description);
      fs.writeFileSync(fullPath, content);
      
      console.log(`Created: ${pagePath}`);
      createdCount++;
      
    } catch (error) {
      console.error(`Error creating ${pagePath}:`, error.message);
    }
  }
  
  console.log(`\nCreated ${createdCount} missing page files.`);
};

main();
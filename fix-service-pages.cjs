const fs = require('fs');
const path = require('path');

const servicesDir = './app/services';

// Get all service directories
const serviceDirs = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Template for service pages
const servicePageTemplate = (serviceName, title, description, keywords) => `import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: '${description}',
  keywords: '${keywords}'
};

export default function ${serviceName}Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Service</h3>
            <p className="text-gray-600">
              Expert ${serviceName.toLowerCase()} solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600">
              Personalized approach to meet your specific requirements and goals.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Expert Support</h3>
            <p className="text-gray-600">
              Dedicated support team to ensure your success and satisfaction.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}`;

// Service configurations
const serviceConfigs = {
  'ai-marketing-automation': {
    title: 'AI Marketing Automation',
    description: 'Intelligent marketing automation with AI-powered personalization, predictive analytics, and automated campaign optimization.',
    keywords: 'AI marketing automation, marketing personalization, predictive analytics, campaign optimization, marketing AI'
  },
  'ai-meeting-assistant': {
    title: 'AI Meeting Assistant',
    description: 'Intelligent meeting assistant powered by AI to enhance productivity and collaboration.',
    keywords: 'AI meeting assistant, meeting automation, productivity, collaboration, AI assistant'
  },
  'ai-powered-crm': {
    title: 'AI-Powered CRM',
    description: 'Revolutionary customer relationship management powered by artificial intelligence for enhanced sales and customer satisfaction.',
    keywords: 'AI CRM, customer relationship management, sales automation, customer analytics, AI-powered sales'
  },
  'ai-project-management-suite': {
    title: 'AI Project Management Suite',
    description: 'Comprehensive project management powered by AI for intelligent task allocation, progress tracking, and resource optimization.',
    keywords: 'AI project management, project automation, task management, resource optimization, project AI'
  },
  'ai-services': {
    title: 'AI Services',
    description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
    keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
  }
};

// Fix each service page
serviceDirs.forEach(serviceDir => {
  const pagePath = path.join(servicesDir, serviceDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    const config = serviceConfigs[serviceDir] || {
      title: serviceDir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: `Professional ${serviceDir.replace(/-/g, ' ')} services for your business needs.`,
      keywords: serviceDir.replace(/-/g, ', ')
    };
    
    const serviceName = serviceDir.replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase());
    const content = servicePageTemplate(serviceName, config.title, config.description, config.keywords);
    
    fs.writeFileSync(pagePath, content);
    console.log(`Fixed: ${pagePath}`);
  }
});

console.log('All service pages have been fixed!');
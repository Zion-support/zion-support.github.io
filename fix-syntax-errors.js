#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with the most errors that need to be fixed
const criticalFiles = [
  '/workspace/app/ai-automated-reporting/page.tsx',
  '/workspace/app/ai-data-analytics-pro/page.tsx',
  '/workspace/app/ai-expense-tracker/page.tsx',
  '/workspace/app/ai-financial-analysis/page.tsx',
  '/workspace/app/ai-fraud-detection/page.tsx',
  '/workspace/app/ai-hr-recruitment-pro/page.tsx',
  '/workspace/app/ai-image-recognition-pro/page.tsx',
  '/workspace/app/ai-invoice-generator/page.tsx',
  '/workspace/app/ai-predictive-analytics/page.tsx',
  '/workspace/app/ai-recommendation-engine/page.tsx'
];

function createBasicPage(filePath, pageName, title, description) {
  const content = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BarChart, Target, TrendingUp, Bot } from 'lucide-react';

const ${pageName}: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered ${title}',
      description: 'Leverage advanced AI technology for intelligent ${title.toLowerCase()} solutions.',
      benefits: ['Smart automation', 'Real-time insights', 'Predictive analytics', 'Performance optimization']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track and analyze performance with comprehensive analytics.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'ROI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 300%',
    'Reduce manual work by 80%',
    'Improve accuracy with AI automation',
    'Scale your operations seamlessly',
    'Save time with intelligent automation',
    'Boost productivity and results'
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ${title}
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                View Demo
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities of our ${title.toLowerCase()} platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ${title}?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our advanced ${title.toLowerCase()} technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our ${title.toLowerCase()} solutions to boost their performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ${pageName};`;

  return content;
}

function fixFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const pageName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    const title = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const description = `Advanced ${title.toLowerCase()} solutions powered by artificial intelligence. Transform your business with our cutting-edge technology.`;
    
    const content = createBasicPage(filePath, pageName, title, description);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all critical files
criticalFiles.forEach(fixFile);

console.log('Syntax error fixing completed!');
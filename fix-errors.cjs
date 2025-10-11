const fs = require('fs');
const path = require('path');

// Common template for AI service pages
const createAIServicePage = (serviceName, title, description, features) => {
  return `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, TrendingUp, Shield, Zap, ArrowRight, Database, Lock, Globe, Target, Settings } from 'lucide-react';

const ${serviceName}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Machine learning', 'Pattern recognition', 'Predictive analytics', 'Automated insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance monitoring and reporting.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Efficient data handling and storage solutions for your applications.',
      benefits: ['Data processing', 'Storage optimization', 'Backup solutions', 'Data integration']
    }
  ];

  const benefits = [
    'Automated ${serviceName.toLowerCase().replace(/-/g, ' ')} processes',
    'Real-time monitoring and analytics',
    'Enhanced security and compliance',
    'Scalable infrastructure management',
    'Reduced operational costs',
    'Improved decision-making capabilities'
  ];

  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need for effective ${serviceName.toLowerCase().replace(/-/g, ' ')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our ${title}?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ${serviceName}Page;`;
};

// List of problematic files to fix
const problematicFiles = [
  {
    path: 'app/ai-computer-vision/page.tsx',
    serviceName: 'AiComputerVision',
    title: 'AI Computer Vision',
    description: 'Advanced AI-powered computer vision solutions for image recognition, object detection, and visual analytics.'
  },
  {
    path: 'app/ai-content-delivery-network/page.tsx',
    serviceName: 'AiContentDeliveryNetwork',
    title: 'AI Content Delivery Network',
    description: 'Intelligent content delivery network with AI-powered optimization for faster, more reliable content distribution.'
  },
  {
    path: 'app/ai-content-generation/page.tsx',
    serviceName: 'AiContentGeneration',
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced AI algorithms for blogs, articles, and marketing materials.'
  },
  {
    path: 'app/ai-customer-support/page.tsx',
    serviceName: 'AiCustomerSupport',
    title: 'AI Customer Support',
    description: 'Intelligent customer support solutions with chatbots, automated responses, and sentiment analysis.'
  },
  {
    path: 'app/ai-data-analytics/page.tsx',
    serviceName: 'AiDataAnalytics',
    title: 'AI Data Analytics',
    description: 'Advanced data analytics powered by AI for business intelligence, predictive modeling, and insights.'
  },
  {
    path: 'app/ai-workflow-automation/page.tsx',
    serviceName: 'AiWorkflowAutomation',
    title: 'AI Workflow Automation',
    description: 'Intelligent workflow automation solutions that streamline business processes and increase efficiency.'
  },
  {
    path: 'app/cloud-migration/page.tsx',
    serviceName: 'CloudMigration',
    title: 'Cloud Migration',
    description: 'Seamless cloud migration services with AI-powered optimization and minimal downtime.'
  },
  {
    path: 'app/consultation/page.tsx',
    serviceName: 'Consultation',
    title: 'Consultation',
    description: 'Expert consultation services for technology strategy, digital transformation, and business optimization.'
  },
  {
    path: 'app/privacy/page.tsx',
    serviceName: 'Privacy',
    title: 'Privacy Policy',
    description: 'Our commitment to protecting your privacy and personal information.'
  },
  {
    path: 'app/support/page.tsx',
    serviceName: 'Support',
    title: 'Support',
    description: 'Comprehensive support services to help you succeed with our solutions.'
  }
];

// Fix each problematic file
problematicFiles.forEach(file => {
  try {
    const content = createAIServicePage(file.serviceName, file.title, file.description);
    fs.writeFileSync(file.path, content);
    console.log(`Fixed: ${file.path}`);
  } catch (error) {
    console.error(`Error fixing ${file.path}:`, error.message);
  }
});

console.log('All files have been processed.');
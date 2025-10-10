#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of broken files that need to be fixed
const brokenFiles = [
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx', 
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-crm-assistant/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx'
];

// Template for AI pages
const createAiPageTemplate = (title, description, color, icon) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ${title.replace(/\s+/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="AI ${title.toLowerCase()}, artificial intelligence, ${title.toLowerCase()}, AI solutions, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${color}-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-${color}-500 to-blue-600 hover:from-${color}-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-${color}-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-${color}-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our ${title}?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-${color}-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our ${title} solution today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-${color}-500 to-blue-600 hover:from-${color}-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ${title.replace(/\s+/g, '')}Page;`;

// Page configurations
const pageConfigs = {
  'app/ai-autonomous-systems/page.tsx': {
    title: 'AI Autonomous Systems',
    description: 'Advanced AI-powered autonomous systems solution for modern businesses.',
    color: 'green'
  },
  'app/ai-blockchain-analytics/page.tsx': {
    title: 'AI Blockchain Analytics',
    description: 'Advanced AI-powered blockchain analytics solution for modern businesses.',
    color: 'violet'
  },
  'app/ai-blockchain-solutions/page.tsx': {
    title: 'AI Blockchain Solutions',
    description: 'Advanced AI-powered blockchain solutions for modern businesses.',
    color: 'violet'
  },
  'app/ai-cloud-infrastructure/page.tsx': {
    title: 'AI Cloud Infrastructure',
    description: 'Advanced AI-powered cloud infrastructure solution for modern businesses.',
    color: 'blue'
  },
  'app/ai-code-assistant/page.tsx': {
    title: 'AI Code Assistant',
    description: 'Advanced AI-powered code assistant solution for modern businesses.',
    color: 'emerald'
  },
  'app/ai-code-security-auditor/page.tsx': {
    title: 'AI Code Security Auditor',
    description: 'Advanced AI-powered code security auditor solution for modern businesses.',
    color: 'red'
  },
  'app/ai-computer-vision/page.tsx': {
    title: 'AI Computer Vision',
    description: 'Advanced AI-powered computer vision solution for modern businesses.',
    color: 'purple'
  },
  'app/ai-content-delivery-network/page.tsx': {
    title: 'AI Content Delivery Network',
    description: 'Advanced AI-powered content delivery network solution for modern businesses.',
    color: 'orange'
  },
  'app/ai-content-generation/page.tsx': {
    title: 'AI Content Generation',
    description: 'Advanced AI-powered content generation solution for modern businesses.',
    color: 'pink'
  },
  'app/ai-content-studio/page.tsx': {
    title: 'AI Content Studio',
    description: 'Advanced AI-powered content studio solution for modern businesses.',
    color: 'pink'
  },
  'app/ai-content-writer/page.tsx': {
    title: 'AI Content Writer',
    description: 'Advanced AI-powered content writer solution for modern businesses.',
    color: 'pink'
  },
  'app/ai-crm-assistant/page.tsx': {
    title: 'AI CRM Assistant',
    description: 'Advanced AI-powered CRM assistant solution for modern businesses.',
    color: 'indigo'
  },
  'app/ai-climate-solutions-pro/page.tsx': {
    title: 'AI Climate Solutions Pro',
    description: 'Advanced AI-powered climate solutions for modern businesses.',
    color: 'teal'
  }
};

console.log(`Fixing ${brokenFiles.length} broken files`);

brokenFiles.forEach(filePath => {
  const config = pageConfigs[filePath];
  if (!config) {
    console.log(`No config found for: ${filePath}`);
    return;
  }
  
  console.log(`Fixing: ${filePath}`);
  
  const content = createAiPageTemplate(config.title, config.description, config.color);
  
  // Ensure directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All broken files fixed!');
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for AI pages
const createAIPageTemplate = (pageName, title, description, keywords, icon, color) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ${pageName}: React.FC = () => {
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
        <meta name="keywords" content="${keywords}" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${color}-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${title.split(' - ')[0]}
              <span className="block bg-gradient-to-r from-${color}-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                ${title.split(' - ')[1] || 'Solution'}
              </span>
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
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-${color}-500 to-blue-600 hover:from-${color}-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-${color}-400 text-${color}-400 hover:bg-${color}-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ${pageName};`;

// List of files to fix with their configurations
const filesToFix = [
  {
    path: 'app/ai-code-assistant/page.tsx',
    pageName: 'AICodeAssistantPage',
    title: 'AI Code Assistant - Zion Tech Group',
    description: 'Intelligent AI-powered code assistant that helps developers write better code faster.',
    keywords: 'AI code assistant, code generation, programming AI, developer tools, code completion',
    color: 'purple'
  },
  {
    path: 'app/ai-code-security-auditor/page.tsx',
    pageName: 'AICodeSecurityAuditorPage',
    title: 'AI Code Security Auditor - Zion Tech Group',
    description: 'Advanced AI-powered code security auditing and vulnerability detection.',
    keywords: 'AI security auditor, code security, vulnerability detection, security analysis',
    color: 'red'
  },
  {
    path: 'app/ai-computer-vision/page.tsx',
    pageName: 'AIComputerVisionPage',
    title: 'AI Computer Vision - Zion Tech Group',
    description: 'Advanced AI computer vision solutions for image recognition and analysis.',
    keywords: 'AI computer vision, image recognition, visual AI, computer vision, image analysis',
    color: 'blue'
  },
  {
    path: 'app/ai-content-delivery-network/page.tsx',
    pageName: 'AIContentDeliveryNetworkPage',
    title: 'AI Content Delivery Network - Zion Tech Group',
    description: 'Intelligent CDN with AI-powered optimization and content delivery.',
    keywords: 'AI CDN, content delivery network, CDN optimization, intelligent CDN',
    color: 'green'
  },
  {
    path: 'app/ai-content-generation/page.tsx',
    pageName: 'AIContentGenerationPage',
    title: 'AI Content Generation - Zion Tech Group',
    description: 'AI-powered content generation for blogs, articles, and marketing materials.',
    keywords: 'AI content generation, content creation, automated writing, content AI',
    color: 'indigo'
  },
  {
    path: 'app/ai-content-studio/page.tsx',
    pageName: 'AIContentStudioPage',
    title: 'AI Content Studio - Zion Tech Group',
    description: 'Complete AI-powered content creation and management studio.',
    keywords: 'AI content studio, content management, creative AI, content production',
    color: 'pink'
  },
  {
    path: 'app/ai-content-writer/page.tsx',
    pageName: 'AIContentWriterPage',
    title: 'AI Content Writer - Zion Tech Group',
    description: 'Intelligent AI content writer for blogs, articles, and marketing content.',
    keywords: 'AI content writer, automated writing, content creation, writing AI',
    color: 'teal'
  }
];

function fixCorruptedFiles() {
  let fixedCount = 0;
  
  for (const fileConfig of filesToFix) {
    const filePath = path.join(__dirname, fileConfig.path);
    
    try {
      const content = createAIPageTemplate(
        fileConfig.pageName,
        fileConfig.title,
        fileConfig.description,
        fileConfig.keywords,
        fileConfig.icon,
        fileConfig.color
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${fileConfig.path}`);
      fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${fileConfig.path}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} corrupted files`);
}

fixCorruptedFiles();
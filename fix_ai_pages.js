#!/usr/bin/env node

import fs from 'fs';

const aiPages = [
  './app/zion-ai-inventory-manager/page.tsx',
  './app/zion-ai-performance-optimizer/page.tsx',
  './app/zion-ai-social-media-manager/page.tsx',
  './app/zion-ai-voice-assistant-pro/page.tsx'
];

const pageTemplates = {
  'inventory-manager': {
    title: 'Zion AI Inventory Manager',
    description: 'Professional AI Inventory Manager services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion AI Inventory Manager',
    subtitle: 'Advanced AI-powered inventory management and optimization solutions for modern businesses.',
    features: [
      {
        title: 'Smart Inventory Tracking',
        description: 'AI-powered real-time inventory monitoring and tracking.',
        items: ['• Real-time tracking', '• Demand forecasting', '• Stock optimization']
      },
      {
        title: 'Automated Reordering',
        description: 'Intelligent automated reorder point management.',
        items: ['• Smart reorder points', '• Supplier integration', '• Cost optimization']
      },
      {
        title: 'Analytics & Insights',
        description: 'Comprehensive inventory analytics and reporting.',
        items: ['• Performance metrics', '• Trend analysis', '• Predictive insights']
      }
    ],
    cta: {
      title: 'Ready to Optimize Your Inventory?',
      description: 'Our AI inventory management experts are ready to help you streamline your operations.',
      button: 'Get Started Today'
    }
  },
  'performance-optimizer': {
    title: 'Zion AI Performance Optimizer',
    description: 'Professional AI Performance Optimizer services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion AI Performance Optimizer',
    subtitle: 'Advanced AI-powered performance optimization solutions for modern businesses.',
    features: [
      {
        title: 'Performance Monitoring',
        description: 'AI-powered real-time performance monitoring and analysis.',
        items: ['• Real-time metrics', '• Bottleneck detection', '• Performance alerts']
      },
      {
        title: 'Automated Optimization',
        description: 'Intelligent automated performance optimization recommendations.',
        items: ['• Code optimization', '• Resource allocation', '• Efficiency improvements']
      },
      {
        title: 'Predictive Analytics',
        description: 'Advanced predictive analytics for performance forecasting.',
        items: ['• Capacity planning', '• Trend analysis', '• Proactive optimization']
      }
    ],
    cta: {
      title: 'Ready to Optimize Your Performance?',
      description: 'Our AI performance optimization experts are ready to help you achieve peak efficiency.',
      button: 'Get Started Today'
    }
  },
  'social-media-manager': {
    title: 'Zion AI Social Media Manager',
    description: 'Professional AI Social Media Manager services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion AI Social Media Manager',
    subtitle: 'Advanced AI-powered social media management and optimization solutions for modern businesses.',
    features: [
      {
        title: 'Content Generation',
        description: 'AI-powered social media content creation and optimization.',
        items: ['• Automated posts', '• Content scheduling', '• Engagement optimization']
      },
      {
        title: 'Analytics & Insights',
        description: 'Comprehensive social media analytics and performance tracking.',
        items: ['• Engagement metrics', '• Audience analysis', '• ROI tracking']
      },
      {
        title: 'Community Management',
        description: 'Intelligent community management and customer engagement.',
        items: ['• Automated responses', '• Sentiment analysis', '• Crisis management']
      }
    ],
    cta: {
      title: 'Ready to Transform Your Social Media?',
      description: 'Our AI social media management experts are ready to help you grow your online presence.',
      button: 'Get Started Today'
    }
  },
  'voice-assistant-pro': {
    title: 'Zion AI Voice Assistant Pro',
    description: 'Professional AI Voice Assistant Pro services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion AI Voice Assistant Pro',
    subtitle: 'Advanced AI-powered voice assistant solutions for modern businesses.',
    features: [
      {
        title: 'Voice Recognition',
        description: 'Advanced AI-powered voice recognition and processing.',
        items: ['• Natural language processing', '• Multi-language support', '• Context understanding']
      },
      {
        title: 'Task Automation',
        description: 'Intelligent task automation and workflow management.',
        items: ['• Voice commands', '• Process automation', '• Integration capabilities']
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored voice assistant solutions for your business needs.',
        items: ['• Custom training', '• Industry-specific features', '• Scalable deployment']
      }
    ],
    cta: {
      title: 'Ready to Implement Voice AI?',
      description: 'Our AI voice assistant experts are ready to help you integrate voice technology.',
      button: 'Get Started Today'
    }
  }
};

function generatePageContent(pageName) {
  const template = pageTemplates[pageName];
  if (!template) return null;

  return `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${template.heading.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${template.title} | Zion Tech Group</title>
        <meta name="description" content="${template.description}" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${template.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${template.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          ${template.features.map(feature => `
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">${feature.title}</h3>
            <p className="text-gray-300 mb-4">
              ${feature.description}
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              ${feature.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>`).join('')}
        </div>
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">${template.cta.title}</h2>
            <p className="text-gray-300 mb-6">
              ${template.cta.description}
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              ${template.cta.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

function fixAIPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    // Extract page name from file path
    const pageName = filePath.match(/zion-ai-([^/]+)/)?.[1];
    if (!pageName) {
      console.log(`Could not extract page name from ${filePath}`);
      return;
    }

    const content = generatePageContent(pageName);
    if (!content) {
      console.log(`No template found for ${pageName}`);
      return;
    }

    fs.writeFileSync(filePath, content);
    console.log(`Fixed AI page: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all AI pages
console.log('Starting to fix AI pages...');
aiPages.forEach(fixAIPage);
console.log('AI page fixing completed!');
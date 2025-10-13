#!/usr/bin/env node

import fs from 'fs';

const aiPages = [
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

const pageTemplates = {
  'voice-assistant-pro': {
    title: 'Zion AI Voice Assistant Pro',
    description: 'Professional AI Voice Assistant services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Voice Recognition', description: 'Advanced voice recognition and natural language processing.', items: ['• Speech-to-text', '• Voice commands', '• Multi-language support'] },
      { title: 'Smart Responses', description: 'Intelligent voice responses and conversation management.', items: ['• Context awareness', '• Personalized responses', '• Learning capabilities'] },
      { title: 'Integration', description: 'Seamless integration with your existing systems.', items: ['• API integration', '• Custom workflows', '• Real-time processing'] }
    ]
  },
  'performance-optimizer': {
    title: 'Zion AI Performance Optimizer',
    description: 'Professional AI Performance Optimization services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Performance Analysis', description: 'Comprehensive performance analysis and monitoring.', items: ['• Real-time monitoring', '• Performance metrics', '• Bottleneck detection'] },
      { title: 'Optimization', description: 'Automated optimization recommendations and implementation.', items: ['• Code optimization', '• Resource allocation', '• Performance tuning'] },
      { title: 'Reporting', description: 'Detailed performance reports and insights.', items: ['• Performance dashboards', '• Trend analysis', '• Recommendations'] }
    ]
  },
  'social-media-manager': {
    title: 'Zion AI Social Media Manager',
    description: 'Professional AI Social Media Management services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Content Creation', description: 'AI-powered content creation and curation.', items: ['• Post generation', '• Image optimization', '• Trend analysis'] },
      { title: 'Scheduling', description: 'Smart scheduling and posting automation.', items: ['• Optimal timing', '• Cross-platform posting', '• Content calendar'] },
      { title: 'Analytics', description: 'Comprehensive social media analytics and insights.', items: ['• Engagement metrics', '• Audience analysis', '• ROI tracking'] }
    ]
  },
  'inventory-manager': {
    title: 'Zion AI Inventory Manager',
    description: 'Professional AI Inventory Management services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Inventory Tracking', description: 'Real-time inventory tracking and monitoring.', items: ['• Stock levels', '• Movement tracking', '• Alerts'] },
      { title: 'Demand Forecasting', description: 'AI-powered demand forecasting and planning.', items: ['• Predictive analytics', '• Seasonal trends', '• Supply optimization'] },
      { title: 'Automation', description: 'Automated inventory management processes.', items: ['• Reorder automation', '• Quality control', '• Reporting'] }
    ]
  },
  'smart-expense-categorizer': {
    title: 'Zion Smart Expense Categorizer',
    description: 'Professional Smart Expense Categorization services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Auto Categorization', description: 'Automatic expense categorization and classification.', items: ['• Smart classification', '• Rule-based sorting', '• Learning algorithms'] },
      { title: 'Receipt Processing', description: 'OCR and AI-powered receipt processing.', items: ['• Text extraction', '• Data validation', '• Duplicate detection'] },
      { title: 'Reporting', description: 'Comprehensive expense reporting and analytics.', items: ['• Expense reports', '• Budget tracking', '• Tax preparation'] }
    ]
  },
  'smart-inventory-optimizer': {
    title: 'Zion Smart Inventory Optimizer',
    description: 'Professional Smart Inventory Optimization services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    features: [
      { title: 'Optimization Algorithms', description: 'Advanced algorithms for inventory optimization.', items: ['• Demand prediction', '• Stock optimization', '• Cost reduction'] },
      { title: 'Real-time Monitoring', description: 'Real-time inventory monitoring and alerts.', items: ['• Live tracking', '• Alert system', '• Performance metrics'] },
      { title: 'Integration', description: 'Seamless integration with existing systems.', items: ['• ERP integration', '• API connectivity', '• Data synchronization'] }
    ]
  }
};

function createPageContent(pageName, template) {
  return `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${template.title.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${template.title} | Zion Tech Group</title>
        <meta name="description" content="${template.description}" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${template.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered solutions for modern businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {template.features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our AI experts are ready to help you optimize your business processes.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Fix all AI pages
aiPages.forEach(pagePath => {
  try {
    const pageName = pagePath.split('/')[1].replace('zion-ai-', '').replace('zion-smart-', '');
    const template = pageTemplates[pageName];
    
    if (template) {
      const content = createPageContent(pageName, template);
      fs.writeFileSync(pagePath, content);
      console.log(`Fixed: ${pagePath}`);
    } else {
      console.log(`No template found for: ${pagePath} (${pageName})`);
    }
  } catch (error) {
    console.error(`Error fixing ${pagePath}:`, error.message);
  }
});

console.log('AI pages fixed successfully!');
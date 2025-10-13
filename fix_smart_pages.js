#!/usr/bin/env node

import fs from 'fs';

const smartPages = [
  './app/zion-smart-expense-categorizer/page.tsx',
  './app/zion-smart-inventory-optimizer/page.tsx'
];

const pageTemplates = {
  'expense-categorizer': {
    title: 'Zion Smart Expense Categorizer',
    description: 'Professional Smart Expense Categorizer services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion Smart Expense Categorizer',
    subtitle: 'Advanced AI-powered expense categorization and management solutions for modern businesses.',
    features: [
      {
        title: 'Smart Categorization',
        description: 'AI-powered automatic expense categorization and classification.',
        items: ['• Automatic categorization', '• Receipt scanning', '• Rule-based filtering']
      },
      {
        title: 'Expense Analytics',
        description: 'Comprehensive expense analytics and reporting capabilities.',
        items: ['• Spending insights', '• Budget tracking', '• Trend analysis']
      },
      {
        title: 'Integration & Automation',
        description: 'Seamless integration with accounting and financial systems.',
        items: ['• API integration', '• Automated workflows', '• Real-time sync']
      }
    ],
    cta: {
      title: 'Ready to Optimize Your Expense Management?',
      description: 'Our AI expense categorization experts are ready to help you streamline your financial processes.',
      button: 'Get Started Today'
    }
  },
  'inventory-optimizer': {
    title: 'Zion Smart Inventory Optimizer',
    description: 'Professional Smart Inventory Optimizer services by Zion Tech Group. Advanced AI and IT solutions for your business.',
    heading: 'Zion Smart Inventory Optimizer',
    subtitle: 'Advanced AI-powered inventory optimization and management solutions for modern businesses.',
    features: [
      {
        title: 'Inventory Optimization',
        description: 'AI-powered inventory level optimization and demand forecasting.',
        items: ['• Demand forecasting', '• Stock optimization', '• Reorder automation']
      },
      {
        title: 'Smart Analytics',
        description: 'Advanced analytics for inventory performance and insights.',
        items: ['• Performance metrics', '• Trend analysis', '• Predictive insights']
      },
      {
        title: 'Supply Chain Integration',
        description: 'Seamless integration with supply chain and vendor management.',
        items: ['• Vendor integration', '• Order automation', '• Cost optimization']
      }
    ],
    cta: {
      title: 'Ready to Optimize Your Inventory?',
      description: 'Our AI inventory optimization experts are ready to help you maximize efficiency and reduce costs.',
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

function fixSmartPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    // Extract page name from file path
    const pageName = filePath.match(/zion-smart-([^/]+)/)?.[1];
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
    console.log(`Fixed smart page: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all smart pages
console.log('Starting to fix smart pages...');
smartPages.forEach(fixSmartPage);
console.log('Smart page fixing completed!');
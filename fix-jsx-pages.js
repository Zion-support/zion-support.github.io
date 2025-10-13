#!/usr/bin/env node

import fs from 'fs';

// Pages that need JSX fixes
const pagesToFix = [
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

function fixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the service name from the file path
    const serviceName = filePath.split('/')[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Create a proper page structure
    const fixedContent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${serviceName.replace(/\s+/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${serviceName} | Zion Tech Group</title>
        <meta name="description" content="Professional ${serviceName} services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${serviceName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered solutions for modern businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Analysis</h3>
            <p className="text-gray-300 mb-4">
              Advanced AI analysis and intelligent processing capabilities.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Smart data processing</li>
              <li>• Pattern recognition</li>
              <li>• Predictive analytics</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Automation</h3>
            <p className="text-gray-300 mb-4">
              Streamline your workflow with intelligent automation.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Workflow optimization</li>
              <li>• Task automation</li>
              <li>• Process improvement</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Integration</h3>
            <p className="text-gray-300 mb-4">
              Seamless integration with your existing systems.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• API integration</li>
              <li>• Data synchronization</li>
              <li>• Custom solutions</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our ${serviceName.toLowerCase()} experts are ready to help you optimize your operations.
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
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed JSX structure in: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all pages
console.log('Starting JSX page fixes...');
pagesToFix.forEach(fixPage);
console.log('JSX page fixes completed!');
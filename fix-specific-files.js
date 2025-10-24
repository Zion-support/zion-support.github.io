#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a clean service page template
function createCleanServicePage(title, description, serviceName) {
  return `'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'

export default function ServicePage() {
  return (
    <div>
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title} | Zion Tech Group" />
        <meta property="og:description" content="${description}" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">${serviceName}</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">${description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}`;
}

// List of problematic files to fix
const problematicFiles = [
  '/workspace/app/accessibility/page.tsx',
  '/workspace/app/ad-management/page.tsx',
  '/workspace/app/advanced-security-suite/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx',
  '/workspace/app/ai-analytics/page.tsx',
  '/workspace/app/ai-automation/page.tsx',
  '/workspace/app/ai-business-intelligence/page.tsx',
  '/workspace/app/ai-chatbot/page.tsx',
  '/workspace/app/ai-cloud-infrastructure/page.tsx',
  '/workspace/app/ai-content-generation/page.tsx',
  '/workspace/app/ai-customer-service/page.tsx',
  '/workspace/app/ai-cybersecurity/page.tsx',
  '/workspace/app/ai-data-analytics/page.tsx',
  '/workspace/app/ai-devops/page.tsx',
  '/workspace/app/ai-ecommerce/page.tsx',
  '/workspace/app/ai-education/page.tsx',
  '/workspace/app/ai-financial-services/page.tsx',
  '/workspace/app/ai-healthcare/page.tsx',
  '/workspace/app/ai-hr/page.tsx',
  '/workspace/app/ai-marketing/page.tsx',
  '/workspace/app/ai-ml/page.tsx',
  '/workspace/app/ai-mobile-development/page.tsx',
  '/workspace/app/ai-nlp/page.tsx',
  '/workspace/app/ai-predictive-analytics/page.tsx',
  '/workspace/app/ai-project-management/page.tsx',
  '/workspace/app/ai-robotics/page.tsx',
  '/workspace/app/ai-sales/page.tsx',
  '/workspace/app/ai-security/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/ai-solutions/page.tsx',
  '/workspace/app/ai-supply-chain/page.tsx',
  '/workspace/app/ai-translation/page.tsx',
  '/workspace/app/ai-video/page.tsx',
  '/workspace/app/ai-voice/page.tsx',
  '/workspace/app/ai-website-builder/page.tsx',
  '/workspace/app/ai-workflow/page.tsx',
  '/workspace/app/ai-writing/page.tsx'
];

// Function to get service name from file path
function getServiceName(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2]; // Get the directory name
  return fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Function to get service description
function getServiceDescription(serviceName) {
  return `Professional ${serviceName.toLowerCase()} services and solutions for modern businesses.`;
}

// Main execution
console.log('Starting specific file fixes...');

problematicFiles.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const serviceName = getServiceName(filePath);
      const description = getServiceDescription(serviceName);
      const cleanContent = createCleanServicePage(serviceName, description, serviceName);
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Specific file fixes completed!');
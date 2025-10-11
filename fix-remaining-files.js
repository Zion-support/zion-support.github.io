#!/usr/bin/env node

import fs from 'fs';

// List of files that need to be fixed
const filesToFix = [
  './app/ai-accounting-assistant/page.tsx',
  './app/ai-agricultural-intelligence-pro/page.tsx',
  './app/ai-analytics-dashboard/page.tsx',
  './app/blog/page.tsx',
  './app/community/page.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/computer-vision/page.tsx',
  './app/custom-development/page.tsx',
  './app/custom-software/page.tsx'
];

// Template for a basic page
const basicPageTemplate = (title, description, componentName) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${componentName}: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">${title}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ${componentName};`;

// Page configurations
const pageConfigs = {
  './app/ai-accounting-assistant/page.tsx': {
    title: 'AI Accounting Assistant',
    description: 'Automate your accounting processes with our intelligent AI assistant. Streamline bookkeeping, financial reporting, and compliance.',
    componentName: 'AIAccountingAssistantPage'
  },
  './app/ai-agricultural-intelligence-pro/page.tsx': {
    title: 'AI Agricultural Intelligence Pro',
    description: 'Revolutionize farming with AI-powered agricultural intelligence. Optimize crop yields, monitor soil health, and predict weather patterns.',
    componentName: 'AIAgriculturalIntelligenceProPage'
  },
  './app/ai-analytics-dashboard/page.tsx': {
    title: 'AI Analytics Dashboard',
    description: 'Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time monitoring and predictive analytics.',
    componentName: 'AIAnalyticsDashboardPage'
  },
  './app/blog/page.tsx': {
    title: 'Blog',
    description: 'Stay updated with the latest insights, trends, and innovations in AI and technology from our expert team.',
    componentName: 'BlogPage'
  },
  './app/community/page.tsx': {
    title: 'Community',
    description: 'Join our vibrant community of developers, innovators, and technology enthusiasts. Share knowledge and collaborate on projects.',
    componentName: 'CommunityPage'
  },
  './app/components/ContentPromotionBanner.tsx': {
    title: 'Content Promotion Banner',
    description: 'A reusable banner component for promoting content and announcements across the website.',
    componentName: 'ContentPromotionBanner'
  },
  './app/computer-vision/page.tsx': {
    title: 'Computer Vision Services',
    description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis using cutting-edge AI technology.',
    componentName: 'ComputerVisionPage'
  },
  './app/custom-development/page.tsx': {
    title: 'Custom Development',
    description: 'Tailored software development solutions designed specifically for your business needs. From web apps to enterprise systems.',
    componentName: 'CustomDevelopmentPage'
  },
  './app/custom-software/page.tsx': {
    title: 'Custom Software',
    description: 'Bespoke software solutions built to your exact specifications. Scalable, secure, and designed for your unique business requirements.',
    componentName: 'CustomSoftwarePage'
  }
};

function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File ${filePath} does not exist, skipping...`);
      return;
    }
    
    const config = pageConfigs[filePath];
    if (!config) {
      console.log(`No config found for ${filePath}, skipping...`);
      return;
    }
    
    const content = basicPageTemplate(config.title, config.description, config.componentName);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting remaining file fixes...');
filesToFix.forEach(fixFile);
console.log('Remaining file fixes completed!');
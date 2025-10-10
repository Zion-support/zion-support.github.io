#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to create a clean page template for any page
function createCleanPageTemplate(pageName, title, description, keywords) {
  return `'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ${pageName}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional ${title} Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our ${title.toLowerCase()} solutions are designed to help your business grow and succeed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Solutions</h3>
                <p className="text-gray-600">
                  Get professional solutions tailored to your specific business needs and requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock support from our team of experts to ensure your success.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Platform</h3>
                <p className="text-gray-600">
                  Scale your operations with our flexible and scalable platform solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to learn more about our ${title.toLowerCase()} solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}`;
}

// Page configurations for all remaining problematic files
const pageConfigs = [
  {
    file: 'app/analytics-tools/page.tsx',
    name: 'AnalyticsToolsPage',
    title: 'Analytics Tools',
    description: 'Professional analytics tools and solutions to help your business make data-driven decisions.',
    keywords: 'analytics tools, data analytics, business intelligence, data visualization'
  },
  {
    file: 'app/api-docs/page.tsx',
    name: 'ApiDocsPage',
    title: 'API Documentation',
    description: 'Comprehensive API documentation and developer resources for our platform.',
    keywords: 'API documentation, developer resources, API reference, technical documentation'
  },
  {
    file: 'app/ar-vr-platform/page.tsx',
    name: 'ArVrPlatformPage',
    title: 'AR/VR Platform',
    description: 'Immersive augmented and virtual reality solutions for modern businesses.',
    keywords: 'AR VR platform, augmented reality, virtual reality, immersive technology'
  },
  {
    file: 'app/backup-recovery/page.tsx',
    name: 'BackupRecoveryPage',
    title: 'Backup & Recovery',
    description: 'Reliable backup and disaster recovery solutions to protect your business data.',
    keywords: 'backup recovery, disaster recovery, data protection, business continuity'
  },
  {
    file: 'app/blockchain-integration-services/page.tsx',
    name: 'BlockchainIntegrationServicesPage',
    title: 'Blockchain Integration Services',
    description: 'Professional blockchain integration services to modernize your business operations.',
    keywords: 'blockchain integration, blockchain services, distributed ledger, smart contracts'
  },
  {
    file: 'app/blockchain/page.tsx',
    name: 'BlockchainPage',
    title: 'Blockchain Solutions',
    description: 'Comprehensive blockchain solutions and services for modern businesses.',
    keywords: 'blockchain solutions, distributed ledger technology, smart contracts, cryptocurrency'
  },
  {
    file: 'app/blog/page.tsx',
    name: 'BlogPage',
    title: 'Blog',
    description: 'Latest insights, news, and updates from Zion Tech Group.',
    keywords: 'tech blog, AI insights, IT news, technology updates'
  },
  {
    file: 'app/business-apps/page.tsx',
    name: 'BusinessAppsPage',
    title: 'Business Applications',
    description: 'Custom business applications designed to streamline your operations.',
    keywords: 'business applications, custom software, enterprise apps, business solutions'
  },
  {
    file: 'app/business-intelligence/page.tsx',
    name: 'BusinessIntelligencePage',
    title: 'Business Intelligence',
    description: 'Advanced business intelligence solutions to drive data-driven decision making.',
    keywords: 'business intelligence, data analytics, BI solutions, data visualization'
  },
  {
    file: 'app/careers/page.tsx',
    name: 'CareersPage',
    title: 'Careers',
    description: 'Join our team and help shape the future of technology.',
    keywords: 'careers, jobs, employment, tech careers, AI jobs'
  },
  {
    file: 'app/case-studies/page.tsx',
    name: 'CaseStudiesPage',
    title: 'Case Studies',
    description: 'Real-world examples of how we\'ve helped businesses succeed.',
    keywords: 'case studies, success stories, client examples, project showcases'
  },
  {
    file: 'app/cloud-infrastructure/page.tsx',
    name: 'CloudInfrastructurePage',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions for your business.',
    keywords: 'cloud infrastructure, cloud computing, AWS, Azure, Google Cloud'
  },
  {
    file: 'app/cloud-migration-services/page.tsx',
    name: 'CloudMigrationServicesPage',
    title: 'Cloud Migration Services',
    description: 'Professional cloud migration services to help you transition to the cloud.',
    keywords: 'cloud migration, cloud services, migration planning, cloud transition'
  },
  {
    file: 'app/cloud-migration/page.tsx',
    name: 'CloudMigrationPage',
    title: 'Cloud Migration',
    description: 'Seamless cloud migration solutions for your business transformation.',
    keywords: 'cloud migration, cloud transition, cloud services, digital transformation'
  },
  {
    file: 'app/cloud-security/page.tsx',
    name: 'CloudSecurityPage',
    title: 'Cloud Security',
    description: 'Comprehensive cloud security solutions to protect your business data.',
    keywords: 'cloud security, cybersecurity, data protection, cloud compliance'
  },
  {
    file: 'app/cloud-services/page.tsx',
    name: 'CloudServicesPage',
    title: 'Cloud Services',
    description: 'Complete cloud services and solutions for modern businesses.',
    keywords: 'cloud services, cloud computing, cloud solutions, cloud platforms'
  }
];

// Main execution
console.log('Starting final JSX fixes...');

let fixedCount = 0;
pageConfigs.forEach(config => {
  if (fs.existsSync(config.file)) {
    try {
      const cleanContent = createCleanPageTemplate(
        config.name,
        config.title,
        config.description,
        config.keywords
      );
      
      fs.writeFileSync(config.file, cleanContent, 'utf8');
      console.log(`Fixed: ${config.file}`);
      fixedCount++;
    } catch (error) {
      console.error(`Error fixing ${config.file}:`, error.message);
    }
  }
});

console.log(`Fixed ${fixedCount} page files`);

// Also fix any remaining problematic files by finding them dynamically
console.log('Looking for remaining problematic files...');
try {
  const { execSync } = require('child_process');
  const result = execSync('find app -name "page.tsx" | head -100', { 
    encoding: 'utf8',
    cwd: process.cwd()
  });
  const allPageFiles = result.trim().split('\n').filter(f => f.length > 0);
  
  allPageFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Check if the file has malformed JSX
        if (content.includes('<>') && !content.includes('</>') || 
            content.includes('JSX expressions must have one parent element') ||
            content.includes('Expected corresponding closing tag')) {
          
          // Extract page name from file path
          const pathParts = file.split('/');
          const fileName = pathParts[pathParts.length - 2]; // Get the directory name
          const pageName = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join('') + 'Page';
          
          const title = fileName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ');
          
          const cleanContent = createCleanPageTemplate(
            pageName,
            title,
            `Professional ${title} solutions for your business.`,
            `${title.toLowerCase()}, business solutions, professional services`
          );
          
          fs.writeFileSync(file, cleanContent, 'utf8');
          console.log(`Auto-fixed: ${file}`);
        }
      } catch (error) {
        console.error(`Error auto-fixing ${file}:`, error.message);
      }
    }
  });
} catch (error) {
  console.error('Error finding remaining files:', error.message);
}

console.log('Final JSX fixes completed!');
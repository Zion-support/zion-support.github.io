#!/usr/bin/env node

import fs from 'fs';

// List of remaining files to fix
const filesToFix = [
  './app/data-analytics-bi/page.tsx',
  './app/data-center/page.tsx',
  './app/database-services/page.tsx',
  './app/database/page.tsx',
  './app/demo/page.tsx',
  './app/devops-cicd/page.tsx',
  './app/devops/page.tsx',
  './app/ecommerce-analytics-pro/page.tsx',
  './app/email-optimizer/page.tsx',
  './app/enterprise-security/page.tsx',
  './app/enterprise-solutions/page.tsx'
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
  './app/data-analytics-bi/page.tsx': {
    title: 'Data Analytics & BI',
    description: 'Comprehensive business intelligence and data analytics solutions to drive informed decision-making.',
    componentName: 'DataAnalyticsBIPage'
  },
  './app/data-center/page.tsx': {
    title: 'Data Center Services',
    description: 'Reliable and secure data center solutions for your critical infrastructure needs.',
    componentName: 'DataCenterPage'
  },
  './app/database-services/page.tsx': {
    title: 'Database Services',
    description: 'Expert database design, optimization, and management services for optimal performance.',
    componentName: 'DatabaseServicesPage'
  },
  './app/database/page.tsx': {
    title: 'Database Solutions',
    description: 'Comprehensive database solutions including design, implementation, and maintenance.',
    componentName: 'DatabasePage'
  },
  './app/demo/page.tsx': {
    title: 'Demo',
    description: 'Experience our solutions firsthand with interactive demos and proof-of-concepts.',
    componentName: 'DemoPage'
  },
  './app/devops-cicd/page.tsx': {
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with our DevOps and continuous integration solutions.',
    componentName: 'DevOpsCICDPage'
  },
  './app/devops/page.tsx': {
    title: 'DevOps Services',
    description: 'Comprehensive DevOps solutions to accelerate development and improve deployment reliability.',
    componentName: 'DevOpsPage'
  },
  './app/ecommerce-analytics-pro/page.tsx': {
    title: 'E-commerce Analytics Pro',
    description: 'Advanced analytics solutions specifically designed for e-commerce businesses.',
    componentName: 'EcommerceAnalyticsProPage'
  },
  './app/email-optimizer/page.tsx': {
    title: 'Email Optimizer',
    description: 'AI-powered email optimization tools to improve deliverability and engagement rates.',
    componentName: 'EmailOptimizerPage'
  },
  './app/enterprise-security/page.tsx': {
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
    componentName: 'EnterpriseSecurityPage'
  },
  './app/enterprise-solutions/page.tsx': {
    title: 'Enterprise Solutions',
    description: 'Scalable enterprise-grade solutions tailored to meet complex business requirements.',
    componentName: 'EnterpriseSolutionsPage'
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
console.log('Starting final file fixes...');
filesToFix.forEach(fixFile);
console.log('Final file fixes completed!');
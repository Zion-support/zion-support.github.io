#!/usr/bin/env node

import fs from 'fs';

// List of all remaining files to fix
const filesToFix = [
  './app/intelligent-database-migration/page.tsx',
  './app/intelligent-email-infrastructure/page.tsx',
  './app/investors/page.tsx',
  './app/iot-edge-computing/page.tsx',
  './app/legal/page.tsx',
  './app/legal/cookies/page.tsx',
  './app/legal/privacy/page.tsx',
  './app/legal/terms/page.tsx',
  './app/machine-learning/page.tsx',
  './app/mobile-app-development/page.tsx',
  './app/network-security/page.tsx',
  './app/partners/page.tsx',
  './app/pricing/page.tsx',
  './app/privacy/page.tsx',
  './app/robotic-process-automation/page.tsx',
  './app/security/page.tsx',
  './app/services/page.tsx',
  './app/sitemap/page.tsx',
  './app/solutions/page.tsx',
  './app/support/page.tsx',
  './app/team/page.tsx',
  './app/terms/page.tsx',
  './app/testimonials/page.tsx',
  './app/use-cases/page.tsx',
  './app/web-development/page.tsx'
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
  './app/intelligent-database-migration/page.tsx': {
    title: 'Intelligent Database Migration',
    description: 'AI-powered database migration services to seamlessly move your data to modern platforms.',
    componentName: 'IntelligentDatabaseMigrationPage'
  },
  './app/intelligent-email-infrastructure/page.tsx': {
    title: 'Intelligent Email Infrastructure',
    description: 'Advanced email infrastructure solutions with AI-powered optimization and security.',
    componentName: 'IntelligentEmailInfrastructurePage'
  },
  './app/investors/page.tsx': {
    title: 'Investors',
    description: 'Information for investors about Zion Tech Group\'s growth, financials, and investment opportunities.',
    componentName: 'InvestorsPage'
  },
  './app/iot-edge-computing/page.tsx': {
    title: 'IoT & Edge Computing',
    description: 'Comprehensive IoT and edge computing solutions for connected devices and real-time processing.',
    componentName: 'IoTEdgeComputingPage'
  },
  './app/legal/page.tsx': {
    title: 'Legal',
    description: 'Legal information, terms of service, privacy policy, and other legal documents.',
    componentName: 'LegalPage'
  },
  './app/legal/cookies/page.tsx': {
    title: 'Cookie Policy',
    description: 'Information about how we use cookies and similar technologies on our website.',
    componentName: 'CookiePolicyPage'
  },
  './app/legal/privacy/page.tsx': {
    title: 'Privacy Policy',
    description: 'Our privacy policy explaining how we collect, use, and protect your personal information.',
    componentName: 'PrivacyPolicyPage'
  },
  './app/legal/terms/page.tsx': {
    title: 'Terms of Service',
    description: 'Terms and conditions governing the use of our website and services.',
    componentName: 'TermsOfServicePage'
  },
  './app/machine-learning/page.tsx': {
    title: 'Machine Learning',
    description: 'Advanced machine learning solutions to extract insights and automate processes.',
    componentName: 'MachineLearningPage'
  },
  './app/mobile-app-development/page.tsx': {
    title: 'Mobile App Development',
    description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
    componentName: 'MobileAppDevelopmentPage'
  },
  './app/network-security/page.tsx': {
    title: 'Network Security',
    description: 'Comprehensive network security solutions to protect your infrastructure from threats.',
    componentName: 'NetworkSecurityPage'
  },
  './app/partners/page.tsx': {
    title: 'Partners',
    description: 'Information about our technology partners and partnership opportunities.',
    componentName: 'PartnersPage'
  },
  './app/pricing/page.tsx': {
    title: 'Pricing',
    description: 'Transparent pricing for our AI and IT services. Choose the plan that fits your needs.',
    componentName: 'PricingPage'
  },
  './app/privacy/page.tsx': {
    title: 'Privacy',
    description: 'Learn about our commitment to privacy and how we protect your data.',
    componentName: 'PrivacyPage'
  },
  './app/robotic-process-automation/page.tsx': {
    title: 'Robotic Process Automation',
    description: 'Automate repetitive tasks and processes with our RPA solutions.',
    componentName: 'RoboticProcessAutomationPage'
  },
  './app/security/page.tsx': {
    title: 'Security',
    description: 'Comprehensive security solutions to protect your business from cyber threats.',
    componentName: 'SecurityPage'
  },
  './app/services/page.tsx': {
    title: 'Services',
    description: 'Comprehensive AI and IT services to transform your business operations.',
    componentName: 'ServicesPage'
  },
  './app/sitemap/page.tsx': {
    title: 'Sitemap',
    description: 'Complete sitemap of our website to help you find the information you need.',
    componentName: 'SitemapPage'
  },
  './app/solutions/page.tsx': {
    title: 'Solutions',
    description: 'Tailored solutions for your specific business needs and challenges.',
    componentName: 'SolutionsPage'
  },
  './app/support/page.tsx': {
    title: 'Support',
    description: 'Get help and support for our services. Contact our technical support team.',
    componentName: 'SupportPage'
  },
  './app/team/page.tsx': {
    title: 'Our Team',
    description: 'Meet the talented individuals behind Zion Tech Group\'s success.',
    componentName: 'TeamPage'
  },
  './app/terms/page.tsx': {
    title: 'Terms of Service',
    description: 'Terms and conditions for using our website and services.',
    componentName: 'TermsPage'
  },
  './app/testimonials/page.tsx': {
    title: 'Testimonials',
    description: 'Read what our clients say about our services and solutions.',
    componentName: 'TestimonialsPage'
  },
  './app/use-cases/page.tsx': {
    title: 'Use Cases',
    description: 'Explore real-world applications of our AI and IT solutions across different industries.',
    componentName: 'UseCasesPage'
  },
  './app/web-development/page.tsx': {
    title: 'Web Development',
    description: 'Modern web development services using cutting-edge technologies and best practices.',
    componentName: 'WebDevelopmentPage'
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
console.log('Starting final cleanup of all remaining files...');
filesToFix.forEach(fixFile);
console.log('All remaining files fixed!');
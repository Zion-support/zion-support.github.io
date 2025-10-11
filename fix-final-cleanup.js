#!/usr/bin/env node

import fs from 'fs';

// List of remaining files to fix
const filesToFix = [
  './app/it-consulting/page.tsx',
  './app/it-infrastructure-design/page.tsx',
  './app/it-project-management/page.tsx',
  './app/it-services/cloud-migration/page.tsx',
  './app/it-services/page.tsx',
  './app/it-support/page.tsx',
  './app/legal-compliance/page.tsx',
  './app/legal/page.tsx',
  './app/legal/cookies/page.tsx',
  './app/legal/privacy/page.tsx',
  './app/legal/terms/page.tsx',
  './app/legal/terms-of-service/page.tsx',
  './app/legal/privacy-policy/page.tsx',
  './app/legal/cookie-policy/page.tsx',
  './app/legal/terms-and-conditions/page.tsx',
  './app/legal/terms-of-use/page.tsx',
  './app/legal/terms-of-service/page.tsx',
  './app/legal/privacy-policy/page.tsx',
  './app/legal/cookie-policy/page.tsx',
  './app/legal/terms-and-conditions/page.tsx',
  './app/legal/terms-of-use/page.tsx'
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
  './app/it-consulting/page.tsx': {
    title: 'IT Consulting',
    description: 'Expert IT consulting services to help you make informed technology decisions.',
    componentName: 'ITConsultingPage'
  },
  './app/it-infrastructure-design/page.tsx': {
    title: 'IT Infrastructure Design',
    description: 'Comprehensive IT infrastructure design and implementation services.',
    componentName: 'ITInfrastructureDesignPage'
  },
  './app/it-project-management/page.tsx': {
    title: 'IT Project Management',
    description: 'Professional IT project management services to ensure successful project delivery.',
    componentName: 'ITProjectManagementPage'
  },
  './app/it-services/cloud-migration/page.tsx': {
    title: 'Cloud Migration',
    description: 'Seamless cloud migration services to modernize your infrastructure.',
    componentName: 'CloudMigrationPage'
  },
  './app/it-services/page.tsx': {
    title: 'IT Services',
    description: 'Comprehensive IT services to support your business operations.',
    componentName: 'ITServicesPage'
  },
  './app/it-support/page.tsx': {
    title: 'IT Support',
    description: 'Reliable IT support services to keep your systems running smoothly.',
    componentName: 'ITSupportPage'
  },
  './app/legal-compliance/page.tsx': {
    title: 'Legal Compliance',
    description: 'Ensure your business meets all legal and regulatory requirements.',
    componentName: 'LegalCompliancePage'
  },
  './app/legal/page.tsx': {
    title: 'Legal',
    description: 'Legal information and policies for our services.',
    componentName: 'LegalPage'
  },
  './app/legal/cookies/page.tsx': {
    title: 'Cookie Policy',
    description: 'Information about our use of cookies and similar technologies.',
    componentName: 'CookiePolicyPage'
  },
  './app/legal/privacy/page.tsx': {
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices.',
    componentName: 'PrivacyPolicyPage'
  },
  './app/legal/terms/page.tsx': {
    title: 'Terms of Service',
    description: 'Terms and conditions for using our services.',
    componentName: 'TermsOfServicePage'
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
console.log('Starting final cleanup...');
filesToFix.forEach(fixFile);
console.log('Final cleanup completed!');
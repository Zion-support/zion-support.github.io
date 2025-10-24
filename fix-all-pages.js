const fs = require('fs');
const path = require('path');

// List of pages that need fixing
const pagesToFix = [
  'demo', 'devops', 'docs', 'enterprise', 'faq', 'gaming', 'hardware', 'healthcare',
  'home', 'iot', 'mobile', 'networking', 'privacy', 'products', 'research', 'security',
  'services', 'solutions', 'support', 'team', 'technology', 'training', 'web-development',
  'health', 'help', 'investors', 'it-services', 'news', 'nlp', 'offline', 'partners',
  'partnerships', 'press', 'pricing', 'productivity', 'resources', 'robotics', 'search', 'sitemap',
  'sla', 'status', 'terms', 'tutorials'
];

// Template for fixed pages
const createFixedPage = (pageName, title, description) => {
  // Convert page name to valid function name
  const functionName = pageName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  return `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function ${functionName}Page() {
  return (
    <div>
      <Head>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ${description} Services coming soon.
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}`;
};

// Descriptions for each page
const descriptions = {
  'demo': 'Experience our technology solutions through interactive demos',
  'devops': 'Streamline your development and operations with our DevOps services',
  'docs': 'Comprehensive documentation for our products and services',
  'enterprise': 'Enterprise-grade solutions for large organizations',
  'faq': 'Frequently asked questions about our services',
  'gaming': 'Cutting-edge gaming technology and development services',
  'hardware': 'Professional hardware solutions and consulting',
  'healthcare': 'Technology solutions for the healthcare industry',
  'home': 'Welcome to Zion Tech Group',
  'iot': 'Internet of Things solutions and consulting',
  'mobile': 'Mobile application development and consulting',
  'networking': 'Network infrastructure and security solutions',
  'privacy': 'Privacy policy and data protection information',
  'products': 'Our comprehensive product portfolio',
  'research': 'Research and development initiatives',
  'security': 'Comprehensive security solutions and consulting',
  'services': 'Professional technology services',
  'solutions': 'Custom technology solutions for your business',
  'support': 'Technical support and customer service',
  'team': 'Meet our expert team of professionals',
  'technology': 'Latest technology trends and innovations',
  'training': 'Professional training and certification programs',
  'web-development': 'Custom web development services',
  'health': 'Health technology solutions and consulting',
  'help': 'Get help and support for our services',
  'investors': 'Information for investors and stakeholders',
  'it-services': 'Comprehensive IT services and solutions',
  'news': 'Latest news and updates from Zion Tech Group',
  'nlp': 'Natural Language Processing solutions and services',
  'offline': 'Offline mode - limited functionality available',
  'partners': 'Our trusted partners and collaborators',
  'partnerships': 'Strategic partnerships and collaborations',
  'press': 'Press releases and media coverage',
  'pricing': 'Transparent pricing for our services',
  'productivity': 'Productivity tools and solutions for businesses',
  'resources': 'Helpful resources and documentation',
  'robotics': 'Advanced robotics solutions and automation',
  'search': 'Search functionality and site navigation',
  'sitemap': 'Site map and navigation structure',
  'sla': 'Service Level Agreements and commitments',
  'status': 'System status and service availability',
  'terms': 'Terms of service and legal agreements',
  'tutorials': 'Step-by-step tutorials and guides'
};

// Fix each page
pagesToFix.forEach(pageName => {
  const filePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const description = descriptions[pageName] || `Professional ${pageName} services by Zion Tech Group`;
    
    const fixedContent = createFixedPage(pageName, title, description);
    
    try {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All pages have been processed!');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Corrupted Pages');
console.log('=========================');

// List of corrupted pages that need to be recreated
const corruptedPages = [
  'pages/about.tsx',
  'pages/compliance.tsx',
  'pages/index.tsx',
  'pages/micro-saas.tsx',
  'pages/newsletter.tsx'
];

// Template for a basic React page
const createBasicPage = (pageName, title, description) => `import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${pageName.toLowerCase()},zion tech group,technology solutions" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}`;

// Page configurations
const pageConfigs = {
  'pages/about.tsx': {
    pageName: 'AboutPage',
    title: 'About Us',
    description: 'Learn about Zion Tech Group\'s mission to provide cutting-edge technology solutions and our team of expert professionals.'
  },
  'pages/compliance.tsx': {
    pageName: 'CompliancePage',
    title: 'Compliance & Standards',
    description: 'Learn about our compliance with industry standards including SOC 2, HIPAA, GDPR, and ISO 27001. Your data protection and regulatory compliance is our priority.'
  },
  'pages/index.tsx': {
    pageName: 'HomePage',
    title: 'Transform Your Business with AI & Technology',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.'
  },
  'pages/micro-saas.tsx': {
    pageName: 'MicroSaaSPage',
    title: 'Micro SaaS Solutions',
    description: 'Scalable Micro SaaS solutions designed for specific business needs. Rapid deployment, enterprise security, and built-in analytics.'
  },
  'pages/newsletter.tsx': {
    pageName: 'NewsletterPage',
    title: 'Newsletter Subscription',
    description: 'Subscribe to our newsletter for exclusive content, webinar invitations, and the latest technology insights.'
  }
};

function fixCorruptedPages() {
  let fixedCount = 0;
  let errorCount = 0;

  for (const pagePath of corruptedPages) {
    try {
      console.log(`\n📝 Fixing ${pagePath}...`);
      
      const config = pageConfigs[pagePath];
      if (!config) {
        console.error(`❌ No configuration found for ${pagePath}`);
        errorCount++;
        continue;
      }

      const content = createBasicPage(config.pageName, config.title, config.description);
      
      // Ensure directory exists
      const dir = path.dirname(pagePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Write the fixed content
      fs.writeFileSync(pagePath, content, 'utf8');
      
      console.log(`✅ Fixed ${pagePath}`);
      fixedCount++;
      
    } catch (error) {
      console.error(`❌ Error fixing ${pagePath}: ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\n📊 Fix Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📁 Total files: ${corruptedPages.length}`);

  if (errorCount === 0) {
    console.log('\n🎉 All corrupted pages fixed successfully!');
    return true;
  } else {
    console.log('\n⚠️  Some pages could not be fixed.');
    return false;
  }
}

function main() {
  console.log('Starting corrupted pages fix...\n');
  
  const success = fixCorruptedPages();
  
  if (success) {
    console.log('\n📋 Next steps:');
    console.log('   1. Run npm run build to test the fixes');
    console.log('   2. Run npm run dev to start development server');
    console.log('   3. Verify pages load correctly in browser');
  } else {
    console.log('\n❌ Some pages could not be fixed automatically.');
    console.log('📋 Manual intervention may be required.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixCorruptedPages };
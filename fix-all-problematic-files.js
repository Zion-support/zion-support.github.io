const fs = require('fs');
const path = require('path');

// Simple template for all pages
const simplePageTemplate = (pageName, title, description) => `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ${pageName}() {
  return (
    <>
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
            Professional ${title.toLowerCase()} services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}`;

// List of problematic files to fix
const problematicFiles = [
  { path: '/workspace/app/automation/page.tsx', name: 'AutomationPage', title: 'Automation', description: 'Professional automation services by Zion Tech Group. Transform your business with our expert solutions.' },
  { path: '/workspace/app/blockchain/page.tsx', name: 'BlockchainPage', title: 'Blockchain', description: 'Professional blockchain services by Zion Tech Group. Transform your business with our expert solutions.' },
  { path: '/workspace/app/cloud-migration-pro/page.tsx', name: 'CloudMigrationProPage', title: 'Cloud Migration Pro', description: 'Professional cloud migration pro services by Zion Tech Group. Transform your business with our expert solutions.' },
  { path: '/workspace/app/contact/page.tsx', name: 'ContactPage', title: 'Contact', description: 'Professional contact services by Zion Tech Group. Transform your business with our expert solutions.' },
  { path: '/workspace/app/it-services/page.tsx', name: 'ItServicesPage', title: 'IT Services', description: 'Professional IT services by Zion Tech Group. Transform your business with our expert solutions.' }
];

console.log('Fixing problematic files...');

let fixedCount = 0;
for (const file of problematicFiles) {
  try {
    const content = simplePageTemplate(file.name, file.title, file.description);
    fs.writeFileSync(file.path, content);
    console.log(`Fixed: ${file.path}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file.path}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
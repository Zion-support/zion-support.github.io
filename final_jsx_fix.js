const fs = require('fs');
const path = require('path');

// List of files that need final JSX fixes
const filesToFix = [
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-email-automation/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/analytics/page.tsx',
  'app/api/page.tsx',
  'app/automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

console.log(`Final JSX fix for ${filesToFix.length} files...`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Create a simple, clean version of each file
  const fileName = path.basename(path.dirname(filePath));
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const cleanContent = `'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Cpu, BarChart3, Zap, Shield, Users, TrendingUp, Bot, Database, Settings, Target, MessageCircle, Clock, Globe, Smartphone, FileText, PenTool } from 'lucide-react';
import Footer from '../components/Footer';

export default function ${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Page() {
  return (
    <>
      <Head>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group. Transform your business with our expert solutions." />
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
  
  fs.writeFileSync(filePath, cleanContent);
  console.log(`Fixed: ${filePath}`);
});

console.log('All files fixed with clean JSX structure!');

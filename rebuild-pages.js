<<<<<<< HEAD:rebuild-pages.js
const fs = require('fs');
const path = require('path');

// Function to rebuild a page with correct structure
function rebuildPage(filePath) {
  try {
    // Read the original file to extract the title and content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');
    
    // Create a new, clean page structure
    const newContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';

const Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target the right audience with AI-driven precision and accuracy.',
      benefits: ['Audience segmentation', 'Behavioral analysis', 'Conversion optimization', 'ROI tracking']
    }
  ];
=======
'use client'
<<<<<<< HEAD
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
>>>>>>> origin/main:app/ai-content-generation/page.tsx

=======
import React from 'react';
import Head from 'next/head';
>>>>>>> origin/main
export default function ServicePage() {
  return (
<<<<<<< HEAD:rebuild-pages.js
    <>
      <Helmet>
        <title>${capitalizedPageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${capitalizedPageName.toLowerCase()} services and solutions from Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${capitalizedPageName}
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              Advanced ${capitalizedPageName.toLowerCase()} solutions powered by artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Contact us today to learn more.
            </p>
            <a
=======
    <div>
      <Head>
<<<<<<< HEAD
        <title>Ai Content Generation | Zion Tech Group</title>
=======
        <title>"Ai Content Generation | Zion Tech Group"</title>
>>>>>>> origin/main
        <meta name="description" content="Professional ai content generation services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ai Content Generation | Zion Tech Group" />
        <meta property="og:description" content="Professional ai content generation services and solutions for modern businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Content Generation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Professional ai content generation services and solutions for modern businesses.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
>>>>>>> origin/main:app/ai-content-generation/page.tsx
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
=======
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            "Ai Content Generation"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            "Professional ai content generation services and solutions for modern businesses."
          </p>
>>>>>>> origin/main
        </div>
      </div>
<<<<<<< HEAD:rebuild-pages.js
      <Footer />
    </>
  );
};

export default Page;
`;

    // Write the new content
    fs.writeFileSync(filePath, newContent);
    console.log(`Rebuilt: ${filePath}`);
  } catch (error) {
    console.error(`Error rebuilding ${filePath}:`, error.message);
  }
}

// Function to find all problematic page files
function findProblematicFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findProblematicFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Rebuild all page files
const appDir = './app';
const files = findProblematicFiles(appDir);

console.log(`Found ${files.length} page files to rebuild...`);

files.forEach(rebuildPage);

console.log('Done rebuilding pages!');
=======
    </>
  );
}
>>>>>>> origin/main:app/ai-content-generation/page.tsx

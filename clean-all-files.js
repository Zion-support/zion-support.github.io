const fs = require('fs');
const path = require('path');

// Function to create a clean template for service pages
function createCleanServicePage(title, description) {
  return `"use client";
import React from "react";
import Footer from '../components/Footer';
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="${title} | Zion Tech Group" />
        <meta property="og:description" content="${description}" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}`;
}

// Function to create a clean template for feature pages
function createCleanFeaturePage(title, description) {
  return `import React from 'react';
import Footer from '../components/Footer';
import Head from "next/head";
import Link from "next/link";
import Navigation from '../components/Navigation';
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

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-emerald-400 max-w-3xl mx-auto">
              ${description}
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
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;`;
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item !== 'layout.tsx' && item !== 'page.tsx' && !item.includes('components')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to clean`);

let cleanedCount = 0;
for (const file of tsxFiles) {
  try {
    const fileName = path.basename(file, '.tsx');
    const dirName = path.dirname(file).split('/').pop();
    
    // Skip certain files
    if (fileName === 'layout' || fileName === 'loading' || fileName === 'error' || fileName === 'not-found') {
      continue;
    }
    
    // Determine if it's a service page or feature page based on content
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('ServicePage') || content.includes('"use client"')) {
      // Service page template
      const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const description = `Professional ${fileName.replace(/-/g, ' ')} services and solutions for modern businesses.`;
      const cleanContent = createCleanServicePage(title, description);
      fs.writeFileSync(file, cleanContent);
      console.log(`Cleaned service page: ${file}`);
      cleanedCount++;
    } else if (content.includes('const features =') || content.includes('Page: React.FC')) {
      // Feature page template
      const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const description = `Advanced ${fileName.replace(/-/g, ' ')} solutions powered by artificial intelligence and machine learning.`;
      const cleanContent = createCleanFeaturePage(title, description);
      fs.writeFileSync(file, cleanContent);
      console.log(`Cleaned feature page: ${file}`);
      cleanedCount++;
    }
  } catch (error) {
    console.error(`Error cleaning ${file}:`, error.message);
  }
}

console.log(`Cleaned ${cleanedCount} files`);
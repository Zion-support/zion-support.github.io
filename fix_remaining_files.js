const fs = require('fs');
const path = require('path');

// Function to create a proper page component
function createProperPageComponent(title, description, keywords, canonicalUrl, colorScheme) {
  return `'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <>
      <SEOHead 
        title="${title} - Zion Tech Group"
        description="${description}"
        keywords="${keywords}"
        canonicalUrl="${canonicalUrl}"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${colorScheme}-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-${colorScheme}-600/20 to-${colorScheme === 'purple' ? 'pink' : colorScheme === 'indigo' ? 'purple' : 'blue'}-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-${colorScheme}-600 hover:bg-${colorScheme}-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-${colorScheme}-600 text-${colorScheme}-400 hover:bg-${colorScheme}-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Discover the powerful capabilities of our ${title.toLowerCase()} solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-${colorScheme}-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Feature {item}
                  </h3>
                  <p className="text-gray-300">
                    Advanced ${title.toLowerCase()} capabilities that enhance your workflow and productivity.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who are already using our ${title.toLowerCase()} solution.
            </p>
            <button className="bg-${colorScheme}-600 hover:bg-${colorScheme}-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Start Your Free Trial
            </button>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}`;
}

// Function to create a proper home page
function createHomePage() {
  return `'use client';

import React from 'react';
import Head from 'next/head';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, cloud services, and digital transformation services." />
        <meta name="keywords" content="AI solutions, cloud services, digital transformation, enterprise technology" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of enterprise AI solutions, cloud services, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive AI and IT solutions for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'AI Solutions', description: 'Advanced artificial intelligence services' },
                { title: 'Cloud Services', description: 'Scalable cloud infrastructure solutions' },
                { title: 'Digital Transformation', description: 'Complete digital modernization' },
                { title: 'Data Analytics', description: 'Insights-driven business intelligence' },
                { title: 'Cybersecurity', description: 'Enterprise-grade security solutions' },
                { title: 'DevOps', description: 'Streamlined development and operations' }
              ].map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage;`;
}

// Function to create a proper docs page
function createDocsPage() {
  return `'use client';

import React from 'react';
import SEOOptimizer from '../components/SEOOptimizer';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DocsPage() {
  return (
    <>
      <SEOOptimizer
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all our AI and IT solutions and services."
        keywords="documentation, API docs, guides, tutorials, AI solutions, IT services"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive documentation for all our AI and IT solutions and services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'API Documentation', description: 'Complete API reference and guides' },
                { title: 'Getting Started', description: 'Quick start guides for all services' },
                { title: 'Tutorials', description: 'Step-by-step tutorials and examples' },
                { title: 'Best Practices', description: 'Recommended practices and patterns' },
                { title: 'Troubleshooting', description: 'Common issues and solutions' },
                { title: 'Support', description: 'Get help from our support team' }
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}`;
}

// List of remaining problematic files
const remainingFiles = [
  {
    file: 'app/ai-video-generator/page.tsx',
    title: 'AI Video Generator',
    description: 'Advanced AI-powered video generation service. Create professional videos from text, images, and audio with cutting-edge AI technology.',
    keywords: 'AI video generator, video creation, AI video, video AI, automated video, video production',
    canonicalUrl: 'https://ziontechgroup.com/ai-video-generator',
    colorScheme: 'purple'
  },
  {
    file: 'app/ai-3d-model-generator/page.tsx',
    title: 'AI 3D Model Generator',
    description: 'Revolutionary AI-powered 3D model generation. Create detailed 3D models from text descriptions, images, or sketches using advanced AI technology.',
    keywords: 'AI 3D model generator, 3D modeling, AI 3D, 3D creation, automated 3D, 3D design',
    canonicalUrl: 'https://ziontechgroup.com/ai-3d-model-generator',
    colorScheme: 'indigo'
  },
  {
    file: 'app/micro-saas-solutions/page.tsx',
    title: 'Micro SaaS Solutions',
    description: 'Comprehensive micro SaaS solutions for modern businesses. Build, deploy, and scale your SaaS applications with our expert development services.',
    keywords: 'micro SaaS, SaaS development, software as a service, SaaS solutions, microservices',
    canonicalUrl: 'https://ziontechgroup.com/micro-saas-solutions',
    colorScheme: 'blue'
  }
];

// Regenerate remaining problematic files
for (const fileInfo of remainingFiles) {
  try {
    console.log(`Regenerating ${fileInfo.file}...`);
    
    const content = createProperPageComponent(
      fileInfo.title,
      fileInfo.description,
      fileInfo.keywords,
      fileInfo.canonicalUrl,
      fileInfo.colorScheme
    );
    
    fs.writeFileSync(fileInfo.file, content);
    console.log(`✅ Regenerated ${fileInfo.file}`);
    
  } catch (error) {
    console.error(`❌ Error regenerating ${fileInfo.file}:`, error.message);
  }
}

// Fix home page
try {
  console.log('Regenerating app/page.tsx...');
  const homeContent = createHomePage();
  fs.writeFileSync('app/page.tsx', homeContent);
  console.log('✅ Regenerated app/page.tsx');
} catch (error) {
  console.error('❌ Error regenerating app/page.tsx:', error.message);
}

// Fix docs page
try {
  console.log('Regenerating app/docs/page.tsx...');
  const docsContent = createDocsPage();
  fs.writeFileSync('app/docs/page.tsx', docsContent);
  console.log('✅ Regenerated app/docs/page.tsx');
} catch (error) {
  console.error('❌ Error regenerating app/docs/page.tsx:', error.message);
}

console.log('All remaining files regenerated!');
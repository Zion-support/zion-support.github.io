<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to create a clean service page template
function createServicePageTemplate(pageName, title, description) {
  return `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our ${title} Services
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We provide comprehensive ${title.toLowerCase()} solutions tailored to your business needs.
                Our expert team delivers cutting-edge technology and innovative approaches to help you succeed.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From strategy development to implementation and ongoing support, we're your trusted partner
                in digital transformation and technology excellence.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Expert team with proven experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Cutting-edge technology solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">24/7 support and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-300">Scalable and future-proof solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}`;
}

// Function to fix corrupted page files
function fixCorruptedPages() {
  const appDir = path.join(process.cwd(), 'app');
  const corruptedFiles = [];
  
  // Find all page.tsx files
  function findPageFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findPageFiles(filePath);
      } else if (file === 'page.tsx') {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          // Check for syntax errors or corrupted content
          if (content.includes(';') && content.includes('return (<div>') && content.includes('import Footer')) {
            corruptedFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
=======
const fs = require('fs')
const path = require('path')
// Template for a basic service page
const servicePageTemplate = (title, description, serviceName) => `'use client'
import React from 'react';
import Head } from 'next/head';
import Link } from 'next/link';
export default function ${serviceName}Page() {
  return ( <>

      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title} | Zion Tech Group" />
        <meta property="og:description" content="${description}" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
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
        </div>
      </div>
    </>
  )
}`
// Service definitions
const services = {
  '5g-data-analytics': {
    title: '5G Data Analytics'
    description: 'Advanced data analytics solutions powered by 5G technology for real-time insights and decision making.'
    serviceName: 'FiveGDataAnalytics'
  }

  '5g-edge-computing': {
    title: '5G Edge Computing'
    description: 'Cutting-edge edge computing solutions leveraging 5G networks for ultra-low latency applications.'
    serviceName: 'FiveGEdgeComputing'
  }

  '5g-implementation': {
    title: '5G Implementation'
    description: 'Complete 5G network implementation services for businesses and organizations.'
    serviceName: 'FiveGImplementation'
  }

  '5g-iot-solutions': {
    title: '5G IoT Solutions'
    description: 'Internet of Things solutions powered by 5G connectivity for smart devices and systems.'
    serviceName: 'FiveGIoTSolutions'
  }

  '5g-mobile-applications': {
    title: '5G Mobile Applications'
    description: 'High-performance mobile applications optimized for 5G networks and capabilities.'
    serviceName: 'FiveGMobileApplications'
  }

  '5g-network-infrastructure': {
    title: '5G Network Infrastructure'
    description: 'Robust 5G network infrastructure design and deployment services.'
    serviceName: 'FiveGNetworkInfrastructure'
  }

  '5g-private-networks': {
    title: '5G Private Networks'
    description: 'Secure private 5G network solutions for enterprise and industrial applications.'
    serviceName: 'FiveGPrivateNetworks'
  }

  '5g-smart-city-solutions': {
    title: '5G Smart City Solutions'
    description: 'Comprehensive smart city solutions powered by 5G technology for urban development.'
    serviceName: 'FiveGSmartCitySolutions'
  }

  '5g-solutions': {
    title: '5G Solutions'
    description: 'Complete 5G technology solutions for businesses and organizations.'
    serviceName: 'FiveGSolutions'
  }
}

// Function to fix a specific page
function fixPage(filePath, serviceKey) {
  try {
    const service = services[serviceKey]
    if (!service) {
      console.log(`No service definition found for ${serviceKey}, skipping...`)
      return
    }

    const content = servicePageTemplate(service.title, service.description, service.serviceName)
    fs.writeFileSync(filePath, content)
    console.log(`Fixed: ${filePath}`)
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}

// Function to recursively find and fix corrupted pages
function fixCorruptedPages(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'build' && file !== '.next') {
        fixCorruptedPages(filePath)
      }
    } else if (file === 'page.tsx') {
      // Check if this is a service page directory
      const parentDir = path.basename(path.dirname(filePath))
      if (services[parentDir]) {
        fixPage(filePath, parentDir)
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
      }
    }
  }
  
  findPageFiles(appDir);
  
  console.log(`Found ${corruptedFiles.length} corrupted page files`);
  
  // Fix each corrupted file
  corruptedFiles.forEach(filePath => {
    try {
      const relativePath = path.relative(appDir, filePath);
      const pageName = path.dirname(relativePath).split('/').pop();
      const title = pageName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      const description = `Professional ${title.toLowerCase()} services and solutions for modern businesses`;
      
      const cleanContent = createServicePageTemplate(pageName, title, description);
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
  
  console.log('Corrupted page files fixed!');
}

<<<<<<< HEAD
// Run the fix
fixCorruptedPages();
=======
// Start fixing from the app directory
console.log('Starting corrupted page fixes...')
fixCorruptedPages('./app')
console.log('Corrupted page fixes completed!')
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352

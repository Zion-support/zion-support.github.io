const fs = require('fs");"'"
const path = require('path");"

// Template for a basic service page"'"
const servicePageTemplate = (title, description, serviceName) => `'use client';
"'"
import React from 'react'
import Head from 'next/head';"
import Link from 'next/link"'
export default function ${serviceName}Page() {
  return (
    <>
      <Head>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name=robots content="index, follow /">
        <meta property=og:type content="website" />
        <meta property=og:title content="${title} | Zion Tech Group /">
        <meta property=og:description content="${description}" />
      </Head>
      <div className=min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20>
        <div className=max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href=/contact
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
            >
              Get Started"
            </Link>
            <Link
              href=/ai-services
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105
            ">
              Learn More;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Service definitions"
const services = {""
  '5g-data-analytics": {"'"
    title: '5G Data Analytics","'"
    description: 'Advanced data analytics solutions powered by 5G technology for real-time insights and decision making.","'"
    serviceName: 'FiveGDataAnalytics"
  },"'"
  '5g-edge-computing": {"'"
    title: '5G Edge Computing","'"
    description: 'Cutting-edge edge computing solutions leveraging 5G networks for ultra-low latency applications.","'"
    serviceName: 'FiveGEdgeComputing"
  },"'"
  '5g-implementation": {"'"
    title: '5G Implementation","'"
    description: 'Complete 5G network implementation services for businesses and organizations.","'"
    serviceName: 'FiveGImplementation"
  },"'"
  '5g-iot-solutions": {"'"
    title: '5G IoT Solutions","'"
    description: 'Internet of Things solutions powered by 5G connectivity for smart devices and systems.","'"
    serviceName: 'FiveGIoTSolutions"
  },"'"
  '5g-mobile-applications": {"'"
    title: '5G Mobile Applications","'"
    description: 'High-performance mobile applications optimized for 5G networks and capabilities.","'"
    serviceName: 'FiveGMobileApplications"
  },"'"
  '5g-network-infrastructure": {"'"
    title: '5G Network Infrastructure","'"
    description: 'Robust 5G network infrastructure design and deployment services.","'"
    serviceName: 'FiveGNetworkInfrastructure"
  },"'"
  '5g-private-networks": {"'"
    title: '5G Private Networks","'"
    description: 'Secure private 5G network solutions for enterprise and industrial applications.","'"
    serviceName: 'FiveGPrivateNetworks"
  },"'"
  '5g-smart-city-solutions": {"'"
    title: '5G Smart City Solutions","'"
    description: 'Comprehensive smart city solutions powered by 5G technology for urban development.","'"
    serviceName: 'FiveGSmartCitySolutions"
  },"'"
  '5g-solutions": {"'"
    title: '5G Solutions","'"
    description: 'Complete 5G technology solutions for businesses and organizations.","'"
    serviceName: 'FiveGSolutions"
  }
}
// Function to fix a specific page;
function fixPage(filePath, serviceKey) {;
  try {;
    const service = services[serviceKey];
    if (!service) {;`
      console.log(`No service definition found for ${serviceKey}, skipping...`);
      return}
    const content = servicePageTemplate(service.title, service.description, service.serviceName);
    fs.writeFileSync(filePath, content);`
    console.log(`Fixed: ${filePath}`)} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message)}
}
// Function to recursively find and fix corrupted pages;
function fixCorruptedPages(dir) {;
  const files = fs.readdirSync(dir);
;
  for (const file of files) {;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {"
      // Skip node_modules and .git directories"'"
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== 'build' && file !== '.next") {"
        fixCorruptedPages(filePath);"
      }"'"
    } else if (file === 'page.tsx") {
      // Check if this is a service page directory
      const parentDir = path.basename(path.dirname(filePath));
      if (services[parentDir]) {;
        fixPage(filePath, parentDir)}
    }
  }
}"

// Start fixing from the app directory"'"
console.log('Starting corrupted page fixes...");"'"
fixCorruptedPages('./app");"'"
console.log('Corrupted page fixes completed!");"'"

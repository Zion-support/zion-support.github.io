const fs = require('fs');
const path = require('path');

// List of corrupted pages that need to be fixed
const corruptedPages = [
  '5g-implementation',
  '5g-iot-solutions',
  '5g-mobile-applications',
  '5g-network-infrastructure',
  '5g-private-networks',
  '5g-smart-city-solutions',
  '5g-solutions'
];

// Template for 5G pages
const fiveGPageTemplate = (pageName, title, description) => `import React from 'react'
import Link from 'next/link'

export default function ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '')}Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              ${description}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Advanced 5G technology implementation</li>
              <li>High-speed connectivity and low latency</li>
              <li>Scalable and secure infrastructure</li>
              <li>Real-time monitoring and analytics</li>
              <li>24/7 support and maintenance</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance</h3>
                <p className="text-gray-600">
                  Experience ultra-fast speeds and minimal latency for optimal performance.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Built with enterprise-grade reliability and security standards.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}`;

// Page configurations
const pageConfigs = {
  '5g-implementation': {
    title: '5G Implementation Services',
    description: 'Complete 5G network implementation services for businesses looking to leverage next-generation connectivity. Our expert team ensures seamless deployment and optimization.'
  },
  '5g-iot-solutions': {
    title: '5G IoT Solutions',
    description: 'Revolutionary IoT solutions powered by 5G technology. Connect and manage millions of devices with ultra-low latency and high reliability.'
  },
  '5g-mobile-applications': {
    title: '5G Mobile Applications',
    description: 'Cutting-edge mobile applications designed to take full advantage of 5G capabilities. Experience the future of mobile technology.'
  },
  '5g-network-infrastructure': {
    title: '5G Network Infrastructure',
    description: 'Robust 5G network infrastructure solutions designed for enterprise needs. Scalable, secure, and optimized for performance.'
  },
  '5g-private-networks': {
    title: '5G Private Networks',
    description: 'Dedicated 5G private networks for enhanced security and control. Perfect for enterprises requiring isolated, high-performance connectivity.'
  },
  '5g-smart-city-solutions': {
    title: '5G Smart City Solutions',
    description: 'Transform your city with 5G-powered smart solutions. Enable connected infrastructure, real-time monitoring, and citizen services.'
  },
  '5g-solutions': {
    title: '5G Solutions',
    description: 'Comprehensive 5G solutions for modern businesses. From infrastructure to applications, we provide end-to-end 5G services.'
  }
};

// Fix corrupted pages
corruptedPages.forEach(pageName => {
  const pagePath = path.join(__dirname, 'app', pageName, 'page.tsx');
  const config = pageConfigs[pageName];
  
  if (config) {
    const content = fiveGPageTemplate(pageName, config.title, config.description);
    fs.writeFileSync(pagePath, content);
    console.log(`Fixed: ${pageName}/page.tsx`);
  }
});

console.log('All corrupted pages have been fixed!');
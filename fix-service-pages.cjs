#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const servicesDir = path.join(process.cwd(), 'app', 'services');

// Get all service directories
const serviceDirs = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(`Found ${serviceDirs.length} service directories`);

// Template for a clean service page
const createServicePage = (serviceName, title) => `import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Professional ${serviceName} services for your business needs.',
  keywords: '${serviceName}, services, business, technology'
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${serviceName} services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
            <p className="text-gray-300">
              High-performance solutions that deliver results quickly and consistently.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing systems and workflows.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Grow with your business with our flexible and scalable platform.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn how our ${serviceName} services can transform your business.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  )
}`;

// Fix each service page
serviceDirs.forEach(serviceDir => {
  const pagePath = path.join(servicesDir, serviceDir, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    try {
      const serviceName = serviceDir.replace(/-/g, ' ');
      const title = serviceName.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const cleanContent = createServicePage(serviceName, title);
      fs.writeFileSync(pagePath, cleanContent);
      console.log(`✅ Fixed: ${serviceDir}/page.tsx`);
    } catch (error) {
      console.error(`❌ Error fixing ${serviceDir}:`, error.message);
    }
  }
});

console.log('🎉 Service pages fixed successfully!');
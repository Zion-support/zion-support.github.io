#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class ServicePageCleaner {
  constructor() {
    this.serviceDir = path.join(process.cwd(), 'app/services');
    this.template = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SERVICE_NAME - Zion Tech Group',
  description: 'SERVICE_DESCRIPTION',
};

export default function SERVICE_PAGE() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SERVICE_NAME
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              SERVICE_DESCRIPTION
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=SERVICE_NAME Inquiry"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-300">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}`;
  }

  async cleanAllPages() {
    console.log('🧹 Cleaning service pages...');
    
    if (!fs.existsSync(this.serviceDir)) {
      console.log('❌ Services directory not found');
      return;
    }
    
    const files = fs.readdirSync(this.serviceDir, { withFileTypes: true });
    let cleaned = 0;
    
    for (const file of files) {
      if (file.isDirectory()) {
        const pageFile = path.join(this.serviceDir, file.name, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          await this.cleanPage(pageFile, file.name);
          cleaned++;
        }
      }
    }
    
    console.log(`✅ Cleaned ${cleaned} service pages`);
  }

  async cleanPage(filePath, serviceName) {
    try {
      const serviceTitle = serviceName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const content = this.template
        .replace(/SERVICE_NAME/g, serviceTitle)
        .replace(/SERVICE_DESCRIPTION/g, `Professional ${serviceTitle.toLowerCase()} solutions`)
        .replace(/SERVICE_PAGE/g, serviceName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page');
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned: ${serviceName}`);
    } catch (error) {
      console.log(`❌ Error cleaning ${serviceName}: ${error.message}`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const cleaner = new ServicePageCleaner();
  cleaner.cleanAllPages().catch(console.error);
}

module.exports = ServicePageCleaner;
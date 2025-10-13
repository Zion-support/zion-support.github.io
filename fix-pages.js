#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing page files...');

// Create a simple page template
const createPageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${title}Page = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">${title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
          
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-gray-600">
                This page is currently under development. Please check back soon for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${title}Page;`;

// List of pages to create
const pages = [
  { name: 'About', description: 'Learn about Zion Tech Group and our mission to deliver cutting-edge AI and IT solutions.' },
  { name: 'Contact', description: 'Get in touch with our team for consultation and support.' },
  { name: 'Services', description: 'Explore our comprehensive range of AI and IT services.' },
  { name: 'Blog', description: 'Read our latest insights on AI, technology, and business transformation.' },
  { name: 'Tutorials', description: 'Learn from our comprehensive tutorials and guides.' },
  { name: 'Demo', description: 'See our solutions in action with interactive demonstrations.' },
  { name: 'Support', description: 'Get technical support and assistance from our expert team.' },
  { name: 'Privacy', description: 'Our privacy policy and data protection practices.' },
  { name: 'Terms', description: 'Terms of service and usage agreements.' },
  { name: 'Pricing', description: 'Transparent pricing for all our services and solutions.' },
  { name: 'Solutions', description: 'Discover our comprehensive AI and IT solutions.' },
  { name: 'AIServices', description: 'Advanced AI services including machine learning and automation.' },
  { name: 'ITServices', description: 'Complete IT infrastructure and support services.' },
  { name: 'CloudInfrastructure', description: 'Scalable cloud solutions and infrastructure management.' },
  { name: 'DigitalTransformation', description: 'End-to-end digital transformation services.' },
  { name: 'CaseStudies', description: 'Real-world success stories and case studies.' },
  { name: 'Careers', description: 'Join our team and build the future of technology.' },
  { name: 'Cybersecurity', description: 'Comprehensive cybersecurity solutions and protection.' },
  { name: 'CloudSolutions', description: 'Cloud migration, optimization, and management services.' },
  { name: 'MicroSaaS', description: 'Micro SaaS solutions for modern businesses.' },
  { name: 'FiveGSolutions', description: '5G technology solutions and implementation.' },
  { name: 'Team', description: 'Meet our expert team of AI and IT professionals.' },
  { name: 'Documentation', description: 'Comprehensive documentation and technical guides.' }
];

// Create pages directory if it doesn't exist
const pagesDir = 'app/pages';
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Create all page files
pages.forEach(page => {
  const content = createPageTemplate(page.name, page.description);
  fs.writeFileSync(`${pagesDir}/${page.name}Page.tsx`, content);
  console.log(`✅ Created ${page.name}Page.tsx`);
});

console.log('🎉 All page files created!');
#!/usr/bin/env node

import fs from 'fs';

const pages = [
  {
    path: '/workspace/app/5g-edge-computing/page.tsx',
    title: '5G Edge Computing Solutions',
    description: 'Revolutionary 5G edge computing solutions for ultra-low latency applications.'
  },
  {
    path: '/workspace/app/5g-implementation/page.tsx',
    title: '5G Implementation Services',
    description: 'Complete 5G network implementation and deployment services.'
  },
  {
    path: '/workspace/app/5g-infrastructure/page.tsx',
    title: '5G Infrastructure Solutions',
    description: 'Robust 5G infrastructure solutions for next-generation networks.'
  },
  {
    path: '/workspace/app/5g-mobile-applications/page.tsx',
    title: '5G Mobile Applications',
    description: 'Cutting-edge mobile applications powered by 5G technology.'
  },
  {
    path: '/workspace/app/5g-network-infrastructure/page.tsx',
    title: '5G Network Infrastructure',
    description: 'Comprehensive 5G network infrastructure solutions and services.'
  }
];

const template = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge 5G solutions powered by the latest technology and best practices.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Performance</h3>
            <p className="text-gray-300">
              Ultra-low latency and high-speed connectivity for mission-critical applications.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Flexible and scalable infrastructure that grows with your business needs.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to learn how our 5G solutions can revolutionize your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}`;

console.log('🔧 Fixing 5G pages...');

let fixedCount = 0;

pages.forEach(page => {
  try {
    if (fs.existsSync(page.path)) {
      const content = template(page.title, page.description);
      fs.writeFileSync(page.path, content, 'utf8');
      console.log(`Fixed: ${page.path}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${page.path}: ${error.message}`);
  }
});

console.log(`✅ Fixed ${fixedCount} 5G pages`);
console.log('🎉 5G pages fix completed!');
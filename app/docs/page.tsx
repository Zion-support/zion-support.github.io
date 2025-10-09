'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Documentation</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Our Documentation</h2>
            <p className="text-gray-300 mb-6">
              Find comprehensive guides, API references, and tutorials to help you get the most out of our services.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              Learn how to integrate our AI and IT services into your applications with our step-by-step guides.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">API Reference</h2>
            <p className="text-gray-300 mb-6">
              Complete API documentation with examples and code snippets for all our services.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              Need help? Contact our support team at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
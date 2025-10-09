'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Welcome to the Zion Tech Group documentation. Here you'll find guides, API references, 
              and resources to help you get started with our AI and IT solutions.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              Learn how to integrate our AI services into your applications and workflows.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">API Reference</h2>
            <p className="text-gray-300 mb-6">
              Complete API documentation for all our services and endpoints.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocsPage;
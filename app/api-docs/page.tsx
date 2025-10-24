'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.tsx';

const ApiDocsPage: React.FC = () => {
  return (
    <div className="...">
      <Navigation />
      
      <main>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">API Documentation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Comprehensive API documentation for developers.</p>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">API Features</h2>
              <p className="text-xl text-gray-300">Comprehensive API documentation and tools</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">RESTful APIs</h3>
                <p className="text-gray-300">Well-documented RESTful APIs for easy integration.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Interactive Docs</h3>
                <p className="text-gray-300">Interactive API documentation with live examples.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">SDK Support</h3>
                <p className="text-gray-300">SDKs available for multiple programming languages.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
};

export default ApiDocsPage;

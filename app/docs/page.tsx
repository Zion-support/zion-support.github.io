import React from 'react';
import { Helmet } from "react-helmet-async";

const DocsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all our AI and IT solutions and services."
        keywords="documentation, API docs, technical docs, user guides, reference"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Documentation Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete technical documentation for all our solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">API Documentation</h3>
              <p className="text-gray-400 mb-4">
                Complete API reference for integrating with our services.
              </p>
              <a href="/api-docs" className="text-purple-400 hover:text-purple-300 transition-colors">
                View API Docs →
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">User Guides</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step user guides for all our applications.
              </p>
              <a href="/tutorials" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Tutorials →
              </a>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Developer Resources</h3>
              <p className="text-gray-400 mb-4">
                SDKs, libraries, and development tools for developers.
              </p>
              <a href="/api-docs" className="text-green-400 hover:text-green-300 transition-colors">
                Developer Portal →
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default Page;

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Documentation
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              Comprehensive documentation for all our services and APIs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Quick Start Guide</h3>
                <p className="text-gray-300 mb-4">Get up and running with our services in minutes</p>
                <a href="/api-docs" className="text-cyan-400 hover:text-cyan-300">Start Here →</a>
              </div>
              
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">API Reference</h3>
                <p className="text-gray-300 mb-4">Complete API reference with examples</p>
                <a href="/api" className="text-cyan-400 hover:text-cyan-300">View APIs →</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


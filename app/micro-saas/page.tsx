'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SAAS - Zion Tech Group | 50+ AI-Powered Tools</title>
        <meta name="description" content="Discover our collection of 50+ AI-powered micro SAAS tools designed to streamline your business operations." />
        <meta name="keywords" content="micro saas, AI tools, business automation, productivity tools, AI applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SAAS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of 50+ AI-powered micro SAAS tools designed to streamline your business operations.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">AI Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">Real-time business intelligence and analytics</p>
                <a href="/ai-analytics-dashboard" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered CRM</h3>
                <p className="text-gray-300 mb-4">Intelligent customer relationship management</p>
                <a href="/ai-crm" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3">Security Monitoring Suite</h3>
                <p className="text-gray-300 mb-4">Advanced cybersecurity monitoring and alerts</p>
                <a href="/security-monitoring-suite" className="text-cyan-400 hover:text-cyan-300">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;

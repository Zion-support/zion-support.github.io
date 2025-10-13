import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Explore our comprehensive AI and IT services including AI solutions, cybersecurity, cloud infrastructure, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions to automate processes and enhance decision-making.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your business from cyber threats.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable cloud solutions to modernize your infrastructure and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
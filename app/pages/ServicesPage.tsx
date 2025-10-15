import React from 'react';
import SEOHead from '../components/SEOHead';

export default function ServicesPage() {
  return (
    <>
      <SEOHead 
        title="Services - Zion Tech Group"
        description="Comprehensive AI and IT services to transform your business."
        keywords="services, AI services, IT services, digital transformation"
      />
      
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence solutions to automate and optimize your business processes.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">Scalable and secure cloud solutions to support your business growth.</p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300">Complete digital transformation services to modernize your business operations.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
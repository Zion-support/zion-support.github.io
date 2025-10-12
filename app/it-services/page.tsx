'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';

export default function ITServicesPage() {
  return (
    <>
      <SEOHead 
        title="IT Services - Comprehensive Technology Solutions | Zion Tech Group"
        description="Professional IT services including cloud migration, cybersecurity, DevOps, mobile development, and digital transformation. Transform your business with our expert IT solutions."
        keywords="IT services, cloud migration, cybersecurity, DevOps, mobile development, digital transformation, IT consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">IT Services</h1>
          <p className="text-xl text-gray-300 mb-8">Comprehensive IT Services by Zion Tech Group</p>
          <a
            href="/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}

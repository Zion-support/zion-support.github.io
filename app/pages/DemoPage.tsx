import React from 'react';
import SEOHead from '../components/SEOHead';

export default function DemoPage() {
  return (
    <>
      <SEOHead 
        title="DemoPage - Zion Tech Group"
        description="DemoPage services and solutions from Zion Tech Group."
        keywords="DemoPage, AI solutions, IT services"
      />
      
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">DemoPage</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}

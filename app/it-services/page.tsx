'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure, cloud migration, cybersecurity, and managed services."
        keywords={['IT services', 'infrastructure', 'cloud migration', 'cybersecurity', 'managed services']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-8">IT Services</h1>
            <p className="text-gray-300">IT services coming soon...</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;

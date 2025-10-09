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
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure management."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'infrastructure']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            IT Services
          </h1>
          <p className="text-gray-300 text-center mb-12">
            Comprehensive IT solutions for your business needs
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ITServicesPage;
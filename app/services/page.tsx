'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI and IT solutions including AI services, IT infrastructure, cloud services, and digital transformation."
        keywords={['AI services', 'IT services', 'cloud services', 'digital transformation', 'automation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
            <p className="text-gray-300">Comprehensive AI and IT solutions coming soon...</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;

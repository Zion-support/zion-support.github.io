'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const SupportPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Support - Zion Tech Group"
        description="Get support for Zion Tech Group services"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
          <p className="text-gray-300">Contact us for support at kleber@ziontechgroup.com</p>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default SupportPage;
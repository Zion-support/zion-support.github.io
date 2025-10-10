'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const SitemapPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Sitemap - Zion Tech Group"
        description="Sitemap for Zion Tech Group website"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/" className="text-cyan-400 hover:text-cyan-300">Home</a>
            <a href="/about" className="text-cyan-400 hover:text-cyan-300">About</a>
            <a href="/services" className="text-cyan-400 hover:text-cyan-300">Services</a>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default SitemapPage;
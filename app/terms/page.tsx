'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const TermsPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Terms of Service - Zion Tech Group"
        description="Terms of Service for Zion Tech Group - AI-Powered Enterprise Solutions"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              These terms of service govern your use of Zion Tech Group's services.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By using our services, you agree to be bound by these terms.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these terms, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default TermsPage;
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const StatusPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="System Status - Zion Tech Group"
        description="System status for Zion Tech Group services"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
            <p className="text-green-400 font-semibold">All systems operational</p>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default StatusPage;
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const BlogPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Blog - Zion Tech Group"
        description="Latest insights and updates from Zion Tech Group"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default BlogPage;
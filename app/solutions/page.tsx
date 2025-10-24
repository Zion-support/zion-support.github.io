'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOOptimizer
        title="Page - ZionTechGroup"
        description="ZionTechGroup page"
        keywords="ziontechgroup"
      />
      <Navigation />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Page Title
          </h1>
          <p className="text-xl text-gray-600">
            Page content coming soon.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
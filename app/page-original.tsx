'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navigation />
      <PerformanceOptimizer />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced AI and IT solutions for your business
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
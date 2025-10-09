'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MarketingToolsPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Marketing Tools
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              AI-powered marketing tools for your business
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              Boost your marketing efforts with our suite of AI-powered tools for content creation, analytics, and automation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MarketingToolsPage;

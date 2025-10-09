'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const MarketingToolsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Marketing Tools - Zion Tech Group"
        description="AI-powered marketing tools and automation solutions to boost your marketing performance."
        keywords={['marketing tools', 'AI marketing', 'marketing automation', 'digital marketing']}
        canonicalUrl="https://ziontechgroup.com/marketing-tools"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Marketing Tools</h1>
            <p className="text-gray-300">Marketing tools coming soon...</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MarketingToolsPage;

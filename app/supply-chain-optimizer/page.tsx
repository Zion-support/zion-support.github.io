import React from 'react';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Supply Chain Optimizer | Zion Tech Group',
  description: 'AI-powered supply chain optimization solutions',
  keywords: 'supply chain, optimization, AI, logistics, automation',
  openGraph: {
    title: 'Supply Chain Optimizer | Zion Tech Group',
    description: 'AI-powered supply chain optimization solutions',
    type: 'website',
  },
};

const SupplyChainOptimizerPage: React.FC = () => {

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Supply Chain Optimizer
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              AI-powered supply chain optimization solutions for better logistics
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupplyChainOptimizerPage;

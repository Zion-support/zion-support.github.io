import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI solutions, IT services, and micro SAAS products. Choose the plan that fits your business needs."
        keywords="pricing, plans, AI solutions, IT services, micro SAAS"
        canonical="/pricing"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your business needs. Contact us for custom solutions.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg">Pricing information coming soon. Contact us for a custom quote.</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
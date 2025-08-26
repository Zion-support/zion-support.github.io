import React from 'react';
import { SEO } from '@/components/SEO';

const ComprehensivePricingGuide2027 = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing guide for all our services and solutions for 2027."
        keywords="pricing guide 2027, service pricing, cost guide, 2027 pricing"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Pricing Guide 2027</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete pricing information for all our technology services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-400/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">Pricing Plans</h3>
              <p className="text-gray-300 mb-4">Flexible pricing plans for all budgets</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-400/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Analysis</h3>
              <p className="text-gray-300 mb-4">Detailed cost breakdown and analysis</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-400/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Value Proposition</h3>
              <p className="text-gray-300 mb-4">Clear value and ROI for each service</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2027;
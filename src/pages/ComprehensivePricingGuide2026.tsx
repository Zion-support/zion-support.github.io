import React from 'react';
import { SEO } from '../components/SEO';

const ComprehensivePricingGuide2026: React.FC = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Pricing Guide 2026 - Zion Tech Group"
        description="Complete pricing guide for all our services in 2026. Transparent pricing for AI, IT, and technology solutions."
        keywords="pricing guide 2026, service pricing, AI pricing, IT services pricing, technology solutions cost"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Comprehensive Pricing Guide 2026
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for all our cutting-edge technology services and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Services Pricing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Machine Learning Models</span>
                  <span className="text-green-400 font-semibold">$5,000 - $50,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">AI Automation</span>
                  <span className="text-green-400 font-semibold">$2,000 - $25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Data Analytics</span>
                  <span className="text-green-400 font-semibold">$1,500 - $15,000</span>
                </div>
              </div>
            </div>

            {/* IT Services Pricing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Cloud Migration</span>
                  <span className="text-green-400 font-semibold">$10,000 - $100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">System Integration</span>
                  <span className="text-green-400 font-semibold">$5,000 - $75,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Security Audit</span>
                  <span className="text-green-400 font-semibold">$3,000 - $30,000</span>
                </div>
              </div>
            </div>

            {/* Development Services Pricing */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Web Applications</span>
                  <span className="text-green-400 font-semibold">$15,000 - $150,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Mobile Apps</span>
                  <span className="text-green-400 font-semibold">$20,000 - $200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Custom Software</span>
                  <span className="text-green-400 font-semibold">$25,000 - $500,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Get a Custom Quote
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs and requirements.
            </p>
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensivePricingGuide2026;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions pricing, IT services pricing, technology costs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Starter</h3>
                <p className="text-gray-300 mb-6">Perfect for small businesses</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99/mo</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Basic AI Solutions</li>
                  <li className="text-gray-300">Email Support</li>
                  <li className="text-gray-300">Monthly Reports</li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Professional</h3>
                <p className="text-gray-300 mb-6">Ideal for growing companies</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299/mo</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Advanced AI Solutions</li>
                  <li className="text-gray-300">Priority Support</li>
                  <li className="text-gray-300">Weekly Reports</li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Enterprise</h3>
                <p className="text-gray-300 mb-6">For large organizations</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Custom AI Solutions</li>
                  <li className="text-gray-300">24/7 Support</li>
                  <li className="text-gray-300">Real-time Reports</li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;

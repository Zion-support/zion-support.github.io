'use client';
import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Pricing</span> Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include 
            24/7 support and regular updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$99</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Basic AI consultation
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Email support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Basic analytics
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Monthly reports
              </li>
            </ul>
            <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$299</div>
              <div className="text-gray-400">per month</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Advanced AI solutions
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Priority support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Custom integrations
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Weekly reports
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Training sessions
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Custom</div>
              <div className="text-gray-400">contact us</div>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Full AI transformation
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                24/7 dedicated support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Custom development
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                Real-time monitoring
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-5 h-5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                On-site consultation
              </li>
            </ul>
            <button className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss 
            a custom solution tailored to your specific needs.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

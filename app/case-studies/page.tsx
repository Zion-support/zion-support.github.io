'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories</title>
        <meta name="description" content="Explore our success stories and case studies. See how we've helped businesses transform with AI and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">E-commerce AI Optimization</h3>
              <p className="text-gray-300 mb-6">
                Increased conversion rates by 40% for a major online retailer using AI-powered recommendation engine.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Industry:</span>
                  <span className="text-white">E-commerce</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Result:</span>
                  <span className="text-white">40% increase in conversions</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare AI Assistant</h3>
              <p className="text-gray-300 mb-6">
                Developed an AI-powered patient triage system that reduced wait times by 60%.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Industry:</span>
                  <span className="text-white">Healthcare</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Result:</span>
                  <span className="text-white">60% reduction in wait times</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Financial Fraud Detection</h3>
              <p className="text-gray-300 mb-6">
                Implemented AI fraud detection system that prevented $2M in fraudulent transactions.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-cyan-400">Industry:</span>
                  <span className="text-white">Fintech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-400">Result:</span>
                  <span className="text-white">$2M fraud prevented</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;

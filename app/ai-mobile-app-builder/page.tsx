import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiMobileAppBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI mobile app builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Mobile App Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build intelligent mobile applications with AI-powered features and seamless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Features</h3>
            <p className="text-gray-300 mb-6">
              Integrate machine learning and AI capabilities directly into your mobile app.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Cross-Platform Development</h3>
            <p className="text-gray-300 mb-6">
              Build once, deploy everywhere with our cross-platform development tools.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Real-time Analytics</h3>
            <p className="text-gray-300 mb-6">
              Monitor app performance and user behavior with real-time analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
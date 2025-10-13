import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AiMobileBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Mobile Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced AI mobile builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Mobile Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create intelligent mobile applications with our AI-powered development platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Smart Development</h3>
            <p className="text-gray-300 mb-6">
              AI-assisted development tools that accelerate your mobile app creation process.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Intelligent UI/UX</h3>
            <p className="text-gray-300 mb-6">
              Create user interfaces that adapt and learn from user behavior patterns.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Performance Optimization</h3>
            <p className="text-gray-300 mb-6">
              AI-powered optimization for better app performance and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
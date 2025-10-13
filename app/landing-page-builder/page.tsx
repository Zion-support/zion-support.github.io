import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function LandingPageBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="Advanced landing page builder solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Landing Page Builder
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create high-converting landing pages with our AI-powered landing page builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Conversion Optimization</h3>
            <p className="text-gray-300 mb-6">
              AI-powered A/B testing and optimization for maximum conversion rates.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Template Library</h3>
            <p className="text-gray-300 mb-6">
              Choose from hundreds of professionally designed, conversion-optimized templates.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Analytics Integration</h3>
            <p className="text-gray-300 mb-6">
              Track performance and user behavior with integrated analytics tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
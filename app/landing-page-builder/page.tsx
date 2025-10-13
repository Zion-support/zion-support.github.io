import React from 'react';
import { Helmet } from 'react-helmet-async';
export default function LandingPageBuilder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Landing Page Builder - Zion Tech Group</title>
        <meta name="description" content="Create high-converting landing pages with our builder." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Landing Page Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create high-converting landing pages with our builder.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
              <p className="text-gray-300">
                Easy-to-use drag and drop interface for creating landing pages.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">A/B Testing</h3>
              <p className="text-gray-300">
                Built-in A/B testing tools to optimize conversion rates.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Analytics Integration</h3>
              <p className="text-gray-300">
                Comprehensive analytics and performance tracking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
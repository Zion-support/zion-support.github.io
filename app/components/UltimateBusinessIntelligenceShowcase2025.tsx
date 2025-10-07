import React from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligenceShowcase2025 = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ultimate Business Intelligence Showcase 2025
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI-powered business intelligence solutions are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-gray-300 mb-6">
              Get instant insights from your data with our advanced real-time analytics platform.
            </p>
            <Link
              href="/solutions/real-time-analytics"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Predictive Modeling</h3>
            <p className="text-gray-300 mb-6">
              Leverage machine learning to predict future trends and make data-driven decisions.
            </p>
            <Link
              href="/solutions/predictive-modeling"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Custom Dashboards</h3>
            <p className="text-gray-300 mb-6">
              Create personalized dashboards that provide exactly the insights you need.
            </p>
            <Link
              href="/solutions/custom-dashboards"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligenceShowcase2025;

import React from 'react';
import Link from 'next/link';

const NewContent2025AnalyticsRevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2025 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Analytics Revolution 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of data analytics with AI-powered insightsreal-time processing
            and predictive intelligence that transforms raw data into actionable business strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-analytics-revolution"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Analytics Revolution
            </Link>
            <Link
              href="/case-studies/analytics-success"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
            <p className="opacity-90">
              Process and analyze data streams in real-time with sub-millisecond latency for instant insights.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Predictive Intelligence</h3>
            <p className="opacity-90">
              Advanced machine learning models that predict trends and outcomes with 95%+ accuracy.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Automated Insights</h3>
            <p className="opacity-90">
              AI automatically generates actionable insights and recommendations from your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025AnalyticsRevolutionBanner;
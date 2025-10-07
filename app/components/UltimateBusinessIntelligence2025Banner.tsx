import React from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">📊</span>
            <span className="text-yellow-400 font-bold text-xl">
              ULTIMATE BUSINESS INTELLIGENCE 2025
            </span>
            <span className="text-3xl">🚀</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Transform Data Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Strategic Advantage
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Advanced AI-powered business intelligence platform delivering real-time insights, 
            predictive analytics, and automated decision-making for enterprise success.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Real-time Analytics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Get instant insights from your data with our advanced real-time processing engine.
            </p>
            <div className="text-cyan-400 text-sm font-medium">
              Process 1M+ events/second
            </div>
          </div>

          {/* Predictive Intelligence */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔮</span>
              <h3 className="text-xl font-bold text-white">Predictive Intelligence</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Forecast trends and outcomes with 95% accuracy using machine learning algorithms.
            </p>
            <div className="text-purple-400 text-sm font-medium">
              95% prediction accuracy
            </div>
          </div>

          {/* Automated Insights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <h3 className="text-xl font-bold text-white">Automated Insights</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              AI automatically generates actionable insights and recommendations.
            </p>
            <div className="text-green-400 text-sm font-medium">
              24/7 automated analysis
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join 500+ enterprises already using our platform to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateBusinessIntelligence2025Banner;
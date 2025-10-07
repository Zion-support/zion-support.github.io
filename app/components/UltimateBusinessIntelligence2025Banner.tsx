'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateBusinessIntelligence2025Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-400/30 mb-6">
              <span className="text-2xl">🚀</span>
              <span className="text-cyan-300 font-bold text-sm uppercase tracking-wider">
                Ultimate Business Intelligence 2025
              </span>
              <span className="text-2xl">⚡</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Transform Your Enterprise with
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                AI-Powered Business Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Achieve unprecedented 30,000% ROI with our revolutionary AI-powered business intelligence solutions. 
              Join Fortune 500 companies already transforming their decision-making processes.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">30,000%</div>
              <div className="text-gray-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$750B+</div>
              <div className="text-gray-300 text-sm">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Enterprise Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="text-xl">🚀</span>
              <span>Explore Solutions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="tel:+13024640950"
              className="group flex items-center gap-3 border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-xl">📞</span>
              <span>Call +1 302 464 0950</span>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI-Powered Analytics</h3>
              <p className="text-gray-300 text-sm">Advanced machine learning algorithms for predictive insights</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-time Dashboards</h3>
              <p className="text-gray-300 text-sm">Live data visualization and interactive reporting</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Process millions of data points in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessIntelligence2025Banner;
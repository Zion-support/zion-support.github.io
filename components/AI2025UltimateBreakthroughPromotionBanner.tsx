import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-18 h-18 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-400/30 mb-8 backdrop-blur-sm">
          <span className="text-red-300 font-bold text-sm animate-pulse">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI 2025 Ultimate
          <span className="block bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
            Breakthrough Revolution
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Experience the most revolutionary AI breakthrough of 2025 delivering 
          <span className="text-yellow-300 font-bold"> 10,000% ROI</span>, 
          <span className="text-green-300 font-bold"> 99.9% accuracy</span>, and 
          <span className="text-blue-300 font-bold"> autonomous operations</span> that transform your business forever.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-1">10,000%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-green-300 mb-1">99.9%</div>
            <div className="text-gray-300 text-sm">Accuracy Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-1">10,000x</div>
            <div className="text-gray-300 text-sm">Faster Processing</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-1">24/7</div>
            <div className="text-gray-300 text-sm">Autonomous Ops</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link 
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Discover the Breakthrough
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-transformation-breakthrough"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            📊 View Success Stories
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 text-sm">
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>Fortune 500 Proven</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>6-Month Implementation</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            <span>Global Success</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main headline */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="text-sm font-bold">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              AI 2025 ULTIMATE
            </span>
            <br />
            <span className="text-white">
              BREAKTHROUGH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most revolutionary AI breakthrough in history - delivering{' '}
            <span className="text-yellow-400 font-bold">2,500-5,000% ROI</span> with{' '}
            <span className="text-green-400 font-bold">99.9% accuracy</span> and{' '}
            <span className="text-purple-400 font-bold">10,000x faster processing</span>
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-sm text-blue-100">ROI Potential</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-100">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-sm text-blue-100">Faster Processing</div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/blog/ai-2025-ultimate-breakthrough-announcement"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Read Full Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough-10000-roi"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🏆 See 10,000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📚 Implementation Guide
            </Link>
          </div>
          
          {/* Urgency message */}
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-red-100 mb-2">
              ⚠️ LIMITED AVAILABILITY
            </p>
            <p className="text-sm text-blue-100">
              This breakthrough technology is available to only <span className="font-bold text-yellow-400">100 organizations</span> in 2025. 
              Demand is unprecedented - contact us immediately for priority access.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">🚀</div>
      <div className="absolute top-20 right-20 text-3xl animate-pulse">⚡</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-bounce">🌟</div>
      <div className="absolute bottom-10 right-10 text-3xl animate-pulse">💎</div>
    </section>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;
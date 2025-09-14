import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2025BreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 via-pink-600/20 to-purple-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main announcement */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-4">
            <span className="text-white text-sm font-semibold animate-pulse">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-4xl mx-auto">
            Discover revolutionary AI technologies delivering 
            <span className="text-yellow-300 font-bold"> 2,500-5,000% ROI</span> across industries. 
            Join the transformation that's reshaping the future of business.
          </p>

          {/* Key metrics */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-white">10,000% ROI</div>
              <div className="text-white/80 text-sm">Proven Success</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-white">99.9% Accuracy</div>
              <div className="text-white/80 text-sm">AI Decision Making</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Global Enterprises</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg"
            >
              Read Predictions
            </Link>
          </div>

          {/* Additional features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>Quantum-Neural Fusion</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>Autonomous Operations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>Consciousness AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
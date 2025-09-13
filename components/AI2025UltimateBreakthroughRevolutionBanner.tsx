import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-bounce">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthrough in history. Our quantum consciousness 
            and synthetic intelligence platform delivers <span className="text-yellow-400 font-bold text-xl">5,000% ROI</span> 
            with 99.9% accuracy and 10,000x faster processing speeds.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5,000%</div>
              <div className="text-gray-300">Guaranteed ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Get 5,000% ROI Now
            </Link>
            <Link 
              href="/case-studies/ai-2025-ultimate-breakthrough-success" 
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/10"
            >
              📊 View Success Stories
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ 30-day implementation • 24/7 support • Money-back guarantee</p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-pink-400/30 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping delay-1000"></div>
    </div>
  );
}
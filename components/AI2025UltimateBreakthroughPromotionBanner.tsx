import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 mb-8 animate-pulse">
            <span className="text-red-400 font-bold text-lg">🚀 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in history. Our autonomous operations platform delivers 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> with transcendent intelligence capabilities.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000% ROI</div>
              <div className="text-gray-300">Guaranteed Results</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9% Accuracy</div>
              <div className="text-gray-300">AI Decision Making</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x Faster</div>
              <div className="text-gray-300">Processing Speed</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-8 py-4 rounded-lg text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              📈 View Success Stories
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Fortune 500 Approved</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>10,000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>Revolutionary Technology</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-500"></div>
    </div>
  );
}
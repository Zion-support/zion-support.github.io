import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/30 mb-8 animate-bounce">
            <span className="text-red-400 font-bold text-lg">🚀 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            AI 2025 Ultimate Breakthrough Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthrough in human history. 
            <span className="text-yellow-400 font-bold"> 10,000% ROI guaranteed</span> through quantum-enhanced neural networks and transcendent intelligence.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000%</div>
              <div className="text-gray-300 font-semibold">Guaranteed ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300 font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">3 Months</div>
              <div className="text-gray-300 font-semibold">Payback Period</div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Start Your Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-lg font-bold text-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              📊 View Success Stories
            </Link>
          </div>
          
          {/* Additional features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm text-gray-300">Quantum Computing</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm text-gray-300">Neural Networks</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm text-gray-300">Autonomous Systems</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-2xl mb-2">🌌</div>
              <div className="text-sm text-gray-300">Transcendent AI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
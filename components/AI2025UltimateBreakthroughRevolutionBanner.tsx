import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-400/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full mb-4 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Experience the most revolutionary AI technologies of 2025 delivering 
            <span className="text-yellow-400 font-bold"> 2,500-5,000% ROI</span> across industries worldwide.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-cyan-400">Quantum-Neural Fusion</h3>
            <p className="text-sm text-gray-300">15,000% ROI in computational power</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="text-lg font-bold mb-2 text-green-400">Autonomous Operations</h3>
            <p className="text-sm text-gray-300">99.9% accuracy, zero human intervention</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-pink-500/30">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-pink-400">Neural Interfaces</h3>
            <p className="text-sm text-gray-300">95% patient recovery in medical applications</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-ultimate-breakthrough-revolution" 
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Breakthroughs
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
          >
            Get Started Now
          </Link>
        </div>

        {/* Success Metrics */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400">10,000%</div>
            <div className="text-sm text-gray-300">Max ROI Achieved</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">10,000x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">500+</div>
            <div className="text-sm text-gray-300">Companies Transformed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
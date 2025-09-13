import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            🚀 AI 2025 Ultimate Breakthrough Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough of 2025, delivering unprecedented 
            <span className="text-yellow-400 font-bold text-2xl"> 2,500-5,000% ROI</span> and transforming entire industries.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold text-purple-300 mb-2">Synthetic Intelligence</h3>
              <p className="text-sm text-gray-300">99.9% accuracy in complex decision-making</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">Quantum Computing</h3>
              <p className="text-sm text-gray-300">10,000x faster than traditional computers</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-bold text-green-300 mb-2">Autonomous Operations</h3>
              <p className="text-sm text-gray-300">99.9% efficiency in autonomous systems</p>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              🚀 Explore Breakthrough Features
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-white/25"
            >
              💬 Get Started Today
            </Link>
          </div>
          
          {/* Success metrics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">2,500-5,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
      </div>
    </div>
  );
}
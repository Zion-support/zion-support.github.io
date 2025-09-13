import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-red-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-bounce">
            🚀 REVOLUTIONARY BREAKTHROUGH
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthroughs in human history. 
            Quantum-AI fusion, neural consciousness interfaces, and transcendent intelligence 
            delivering unprecedented 2,500-5,000% ROI across all industries.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">5,000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏆 View 10,000% ROI Story
            </Link>
          </div>
          
          {/* Revolutionary features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <div className="font-bold text-purple-400 mb-2">Quantum-AI Fusion</div>
              <div className="text-sm text-gray-300">99.9% accuracy, 10,000x faster</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <div className="font-bold text-cyan-400 mb-2">Neural Consciousness</div>
              <div className="text-sm text-gray-300">95% patient recovery rates</div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-3">🌌</div>
              <div className="font-bold text-emerald-400 mb-2">Transcendent Intelligence</div>
              <div className="text-sm text-gray-300">Infinite problem-solving</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '3s'}}></div>
      </div>
    </div>
  );
}
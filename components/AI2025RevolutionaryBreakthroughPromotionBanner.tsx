import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryBreakthroughPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/20 via-transparent to-yellow-600/20 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-yellow-500 bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium animate-pulse">🚀 REVOLUTIONARY BREAKTHROUGH 2025</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Witness the most revolutionary AI breakthroughs in history. Our clients are achieving 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> with autonomous operations, 
            quantum computing breakthroughs, and transcendent intelligence systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-red-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
            >
              🔥 Explore Breakthroughs
            </Link>
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-red-900 transition-all duration-300"
            >
              📈 View 10,000% ROI Success
            </Link>
          </div>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">10,000%</div>
              <div className="text-sm text-gray-300">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-red-400">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-400">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-pink-400">∞</div>
              <div className="text-sm text-gray-300">Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
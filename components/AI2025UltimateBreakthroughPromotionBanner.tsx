import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-6 animate-bounce">
            🚀 REVOLUTIONARY BREAKTHROUGH
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most revolutionary AI breakthrough of 2025 delivering{' '}
            <span className="text-yellow-400 font-bold text-3xl">10,000% ROI</span>{' '}
            with autonomous operations, quantum computing integration, and transcendent intelligence.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-4 rounded-lg border border-purple-500/30">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-bold text-purple-400">Transcendent Intelligence</div>
              <div className="text-sm text-gray-300">99.9% accuracy across all domains</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 p-4 rounded-lg border border-blue-500/30">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="font-bold text-cyan-400">Quantum Integration</div>
              <div className="text-sm text-gray-300">10,000x faster processing</div>
            </div>
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 p-4 rounded-lg border border-green-500/30">
              <div className="text-2xl mb-2">🤖</div>
              <div className="font-bold text-green-400">Autonomous Operations</div>
              <div className="text-sm text-gray-300">Zero human intervention required</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              View Success Stories
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>10,000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Revolutionary Technology</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}
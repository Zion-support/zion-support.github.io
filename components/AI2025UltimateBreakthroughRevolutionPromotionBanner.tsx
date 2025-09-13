import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in human history. 
            Quantum-powered intelligence delivering unprecedented <span className="text-yellow-400 font-bold">10,000% ROI</span> across all industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
              <div className="text-lg font-semibold text-purple-400 mb-2">ROI</div>
              <p className="text-gray-300 text-sm">Guaranteed return on investment</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold text-cyan-400 mb-2">Accuracy</div>
              <p className="text-gray-300 text-sm">AI decision accuracy</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-lg font-semibold text-green-400 mb-2">Faster</div>
              <p className="text-gray-300 text-sm">Processing speed improvement</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
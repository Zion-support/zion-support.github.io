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
            🚀 REVOLUTIONARY BREAKTHROUGH - NEW CONTENT AVAILABLE
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in history. Achieve 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span>, 
            <span className="text-green-400 font-bold"> 99.9% accuracy</span>, and 
            <span className="text-blue-400 font-bold"> 10,000x faster processing</span>.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-500/30">
              <div className="text-3xl font-bold text-yellow-400">10,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
              <div className="text-3xl font-bold text-green-400">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-lg border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit" 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Implementation Guide
            </Link>
          </div>
          
          {/* Additional content links */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link 
              href="/quantum-computing-solutions-2025" 
              className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-4 rounded-lg border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-cyan-400">⚛️ Quantum Computing Solutions</div>
                  <div className="text-sm text-gray-300">15,000% ROI with quantum supremacy</div>
                </div>
                <div className="text-cyan-400">→</div>
              </div>
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit" 
              className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-purple-400">🛠️ Ultimate Implementation Toolkit</div>
                  <div className="text-sm text-gray-300">Complete guide to AI success</div>
                </div>
                <div className="text-purple-400">→</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}
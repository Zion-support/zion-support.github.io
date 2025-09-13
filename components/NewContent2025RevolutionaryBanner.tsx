import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            NEW AI 2025 REVOLUTIONARY CONTENT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most revolutionary AI breakthrough content ever created. 
            Quantum computing, neural interfaces, and transcendent intelligence 
            delivering unprecedented 50,000% ROI.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum Computing</h3>
              <p className="text-sm text-gray-300">50,000% ROI breakthrough</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 rounded-xl p-6 border border-blue-500/30">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Neural Interfaces</h3>
              <p className="text-sm text-gray-300">95% success rate</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-xl p-6 border border-green-500/30">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Future Predictions</h3>
              <p className="text-sm text-gray-300">2026-2030 roadmap</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore AI 2025 Revolution
            </Link>
            <Link 
              href="/ai-2026-2030-future-predictions-revolutionary"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🔮 See Future Predictions
            </Link>
            <Link 
              href="/quantum-computing-solutions-2025"
              className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ⚛️ Quantum Solutions
            </Link>
          </div>

          {/* Additional content links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-yellow-400 mb-1">AI 2025 Breakthrough</h4>
              <p className="text-xs text-gray-400">10,000% ROI Revolution</p>
            </Link>
            
            <Link 
              href="/ai-2026-2030-future-predictions-revolutionary"
              className="bg-gradient-to-r from-blue-800/20 to-cyan-800/20 rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">🔮</div>
              <h4 className="font-semibold text-cyan-400 mb-1">Future Predictions</h4>
              <p className="text-xs text-gray-400">2026-2030 Roadmap</p>
            </Link>
            
            <Link 
              href="/quantum-computing-solutions-2025"
              className="bg-gradient-to-r from-green-800/20 to-emerald-800/20 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">⚛️</div>
              <h4 className="font-semibold text-green-400 mb-1">Quantum Computing</h4>
              <p className="text-xs text-gray-400">50,000% ROI Solutions</p>
            </Link>
            
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-orange-800/20 to-red-800/20 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">📞</div>
              <h4 className="font-semibold text-orange-400 mb-1">Get Started</h4>
              <p className="text-xs text-gray-400">Contact Our Experts</p>
            </Link>
          </div>

          {/* Stats section */}
          <div className="mt-12 bg-black/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">Revolutionary Impact Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">50,000%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">10^15</div>
                <div className="text-sm text-gray-300">Speed Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">∞</div>
                <div className="text-sm text-gray-300">Scalability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
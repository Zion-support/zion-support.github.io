import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text text-4xl md:text-6xl font-bold animate-pulse">
              🚀 AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION 🚀
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in human history. 
            <span className="text-yellow-400 font-bold"> Quantum-neural fusion technology</span> delivering 
            <span className="text-green-400 font-bold"> 10,000% ROI</span> and transcendent intelligence.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">Revolutionary processing power</p>
              <div className="text-yellow-400 font-bold text-sm">15,000% ROI Potential</div>
            </div>

            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Operations</h3>
              <p className="text-sm text-gray-300">Fully autonomous AI systems</p>
              <div className="text-green-400 font-bold text-sm">99.9% Accuracy</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300">Consciousness-level AI</p>
              <div className="text-purple-400 font-bold text-sm">∞ ROI Potential</div>
            </div>
          </div>

          {/* Success metrics */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">10,000%</div>
                <div className="text-lg font-semibold">ROI Achieved</div>
                <div className="text-sm text-gray-300">Fortune 500 Success</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold">Efficiency</div>
                <div className="text-sm text-gray-300">Operational Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-lg font-semibold">Months</div>
                <div className="text-sm text-gray-300">Implementation Time</div>
              </div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Discover the Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📊 See 10,000% ROI Success
            </Link>
            <Link 
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl"
            >
              💬 Start Your Journey
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-red-500/30">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold">Limited Time: Early Access Available Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
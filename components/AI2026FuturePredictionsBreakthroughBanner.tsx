import React from 'react';
import Link from 'next/link';

export default function AI2026FuturePredictionsBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Future predictions badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8 animate-bounce">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">
              🔮 EXCLUSIVE: AI 2026 FUTURE PREDICTIONS REVEALED
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026 Future Predictions
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary AI breakthroughs predicted for 2026. Discover 
            <span className="text-cyan-400 font-bold"> quantum computing</span>, 
            <span className="text-purple-400 font-bold"> neural interfaces</span>, and 
            <span className="text-blue-400 font-bold"> transcendent intelligence</span>.
          </p>

          {/* Key predictions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">95% probability - Q2 2026</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Interface Revolution</h3>
              <p className="text-sm text-gray-300">88% probability - Q3 2026</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-sm text-gray-300">92% probability - Q4 2026</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2026-future-predictions-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔮 Explore Predictions
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              🚀 Get Early Access
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
            <span className="text-purple-400 font-semibold text-sm">
              ⏰ Limited Access: Exclusive predictions available for next 72 hours
            </span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}
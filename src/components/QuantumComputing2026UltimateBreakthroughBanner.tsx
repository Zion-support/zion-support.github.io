import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumComputing2026UltimateBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Quantum breakthrough badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-8 animate-bounce">
            <span className="text-indigo-400 font-bold text-sm uppercase tracking-wide">
              ⚛️ BREAKTHROUGH: QUANTUM COMPUTING 2026 ULTIMATE
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Quantum Computing 2026
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The ultimate quantum computing breakthrough is here. Experience 
            <span className="text-indigo-400 font-bold"> error-corrected quantum computers</span>
            <span className="text-purple-400 font-bold"> quantum supremacy</span>and 
            <span className="text-pink-400 font-bold"> revolutionary applications</span>.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300">99.9% accuracyunlimited scalability</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Quantum Supremacy</h3>
              <p className="text-sm text-gray-300">10^18 operations per second</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Revolutionary Apps</h3>
              <p className="text-sm text-gray-300">Cryptographydrug discoveryAI</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="/quantum-computing-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-indigo-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Discover Quantum Breakthrough
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              🚀 Get Quantum Access
            </a>
          </div>

          {/* Urgency indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30">
            <span className="text-pink-400 font-semibold text-sm">
              ⏰ Limited Access: Revolutionary quantum technology available for next 48 hours
            </span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-rose-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}
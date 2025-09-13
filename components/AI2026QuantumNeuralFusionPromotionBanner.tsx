import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
      {/* Quantum animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-yellow-400/20 rounded-full animate-pulse"></div>
        {/* Quantum field lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Quantum Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold mb-6 animate-pulse shadow-lg">
            ⚛️ QUANTUM BREAKTHROUGH - 15,000% ROI GUARANTEED
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent leading-tight">
            AI 2026 Quantum-Neural Fusion
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The world's first quantum-neural fusion AI system. Revolutionary consciousness integration and neural interface technology delivering unprecedented 15,000% ROI.
          </p>

          {/* Quantum stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">15,000%</div>
              <div className="text-sm text-gray-300">Quantum ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">99.97%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-1">50,000x</div>
              <div className="text-sm text-gray-300">Faster</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Quantum Scale</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              ⚛️ Explore Quantum Fusion
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-xl"
            >
              🚀 Start Quantum Journey
            </Link>
          </div>

          {/* Quantum trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⚛️</span>
              <span>Quantum Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">🧠</span>
              <span>Neural Integration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-pink-400">🌌</span>
              <span>Consciousness Fusion</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">∞</span>
              <span>Infinite Scalability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum floating elements */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-12 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 left-16 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
      
      {/* Quantum field particles */}
      <div className="absolute top-20 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-500"></div>
      <div className="absolute top-40 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-ping delay-1500"></div>
      <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-ping delay-2000"></div>
    </div>
  );
}
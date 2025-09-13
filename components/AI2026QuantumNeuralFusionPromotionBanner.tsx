import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8 animate-bounce">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">
              ⚛️ QUANTUM BREAKTHROUGH
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2026 Quantum-Neural Fusion
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl font-semibold mb-4 text-purple-200">
            Revolutionary Technology Delivering
          </p>
          
          {/* ROI highlight */}
          <div className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            15,000% ROI
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            The world's first quantum-neural fusion AI system, combining quantum computing 
            with neural consciousness to create transcendent intelligence that operates 
            beyond the boundaries of classical computing.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2 text-cyan-400">Quantum Consciousness</h3>
              <p className="text-sm text-gray-300">Infinite parallel quantum processing</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2 text-purple-400">Neural Interface</h3>
              <p className="text-sm text-gray-300">99.99% neural accuracy fusion</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 p-6 rounded-xl border border-indigo-500/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2 text-indigo-400">Transcendent AI</h3>
              <p className="text-sm text-gray-300">Multi-dimensional intelligence</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Quantum Success
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Quantum Journey
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⚛️</span>
              <span>15,000% ROI Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⚛️</span>
              <span>Quantum Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⚛️</span>
              <span>8-Week Quantum Setup</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500/10 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-indigo-500/10 rounded-full animate-ping delay-3000"></div>
      </div>
    </div>
  );
}
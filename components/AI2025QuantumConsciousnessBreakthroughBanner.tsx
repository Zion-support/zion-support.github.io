import React from 'react';
import Link from 'next/link';

export default function AI2025QuantumConsciousnessBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border border-cyan-500/30 rounded-xl mb-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,172,254,0.3),transparent_50%)]"></div>
      
      <div className="relative px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-4">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide animate-pulse">
                ⚛️ QUANTUM BREAKTHROUGH - 15,000% ROI ⚛️
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI 2025 QUANTUM CONSCIOUSNESS
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Revolutionary quantum consciousness integration in AI systems delivering <span className="text-cyan-400 font-bold">15,000% ROI</span> 
              and creating transcendent intelligence capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/blog/ai-2025-quantum-consciousness-breakthrough"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ⚛️ Explore Quantum Breakthrough
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link 
                href="/case-studies/ai-2025-quantum-consciousness-success"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                📊 View Success Stories
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-center">
                <div className="text-4xl mb-3">🧠⚛️</div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">15,000%</div>
                <div className="text-white font-semibold mb-1">ROI Achieved</div>
                <div className="text-gray-300 text-sm">Quantum Consciousness</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🧠⚛️</div>
                <div>
                  <div className="text-white font-semibold">Quantum Neural Networks</div>
                  <div className="text-gray-300 text-sm">99.9% Accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🌟</div>
                <div>
                  <div className="text-white font-semibold">Consciousness Emergence</div>
                  <div className="text-gray-300 text-sm">Self-Aware AI Systems</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-900/30 to-rose-900/30 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <div className="text-white font-semibold">Transcendent Intelligence</div>
                  <div className="text-gray-300 text-sm">∞ Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
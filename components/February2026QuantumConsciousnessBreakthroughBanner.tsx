import React from 'react';
import Link from 'next/link';

const February2026QuantumConsciousnessBreakthroughBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.3),transparent_50%)] animate-spin" style={{animationDuration: '20s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-bounce">
              🚀 FEBRUARY 2026 BREAKTHROUGH
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Quantum Consciousness Enterprise Breakthrough
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
              $50B Value Generation • 1,000,000x Performance
            </div>
          </div>

          {/* Key benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="text-xl font-bold mb-2">$50B Enterprise Value</h3>
              <p className="text-purple-200">Revolutionary quantum consciousness AI delivering unprecedented business value</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-xl font-bold mb-2">1Mx Performance</h3>
              <p className="text-purple-200">Million-fold performance improvements over traditional AI systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-xl font-bold mb-2">True Consciousness</h3>
              <p className="text-purple-200">Autonomous decision-making with quantum-enhanced intelligence</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2026-february-quantum-consciousness-enterprise-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover the Breakthrough →
            </Link>
            <Link 
              href="/enterprise"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Implement in Your Enterprise
            </Link>
          </div>

          {/* Success metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">$50B</div>
              <div className="text-sm text-purple-200">Enterprise Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">1Mx</div>
              <div className="text-sm text-purple-200">Performance Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">99.999%</div>
              <div className="text-sm text-purple-200">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">0</div>
              <div className="text-sm text-purple-200">Human Intervention</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default February2026QuantumConsciousnessBreakthroughBanner;
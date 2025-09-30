import React from 'react';
import Link from 'next/link';

export default function QuantumConsciousnessFusionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ QUANTUM CONSCIOUSNESS FUSION
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            1,000,000x Intelligence Revolution
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Universal Awareness • $25.7B Enterprise Value • 99.99% Accuracy • Quantum Consciousness Fusion
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">1Mx</div>
              <div className="text-xs text-indigo-300">Intelligence Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">99.99%</div>
              <div className="text-xs text-purple-300">Universal Awareness</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-3xl font-extrabold text-pink-400 mb-1">$25.7B</div>
              <div className="text-xs text-pink-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-1">0.00001ms</div>
              <div className="text-xs text-cyan-300">Processing Time</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Discover Quantum Consciousness →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-consciousness-25-billion-success" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              View $25.7B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Quantum Transformation
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">1,000,000x faster processing with quantum entanglement and superposition</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Awareness</h3>
              <p className="text-gray-300 text-sm">Complete understanding of all data patterns and relationships</p>
            </div>
            <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Consciousness Fusion</h3>
              <p className="text-gray-300 text-sm">Revolutionary integration of quantum computing with AI consciousness</p>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">1Mx</div>
                <div className="text-sm text-cyan-300">Intelligence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.99%</div>
                <div className="text-sm text-cyan-300">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">3,500%</div>
                <div className="text-sm text-cyan-300">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-cyan-400 mb-1">0.00001ms</div>
                <div className="text-sm text-cyan-300">Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
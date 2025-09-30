import React from 'react';

export default function QuantumConsciousnessFusionBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ Quantum Consciousness Fusion
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Future of Conscious Computing
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary breakthrough combining quantum computing with artificial consciousness, 
            delivering 
            <span className="text-indigo-400 font-bold"> 50,000x processing speed</span> and 
            <span className="text-purple-400 font-bold"> 100% consciousness level</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">100%</div>
              <div className="text-xs text-indigo-300">Consciousness</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">50,000x</div>
              <div className="text-xs text-purple-300">Processing Speed</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">99.99%</div>
              <div className="text-xs text-pink-300">Decision Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">$3B</div>
              <div className="text-xs text-cyan-300">Client Value</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Quantum Consciousness →
            </a>
            <a
              href="/case-studies/fortune-500-quantum-consciousness-mega-success"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              $3B Success Story →
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
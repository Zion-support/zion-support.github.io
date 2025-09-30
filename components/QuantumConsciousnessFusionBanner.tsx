import React from 'react';

export default function QuantumConsciousnessFusionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 border-b border-cyan-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6 animate-pulse">
            <span className="text-cyan-400 font-bold text-2xl tracking-wider uppercase">
              ⚛️ Quantum Consciousness Fusion
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Next Evolution of Intelligence
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary technology merging <span className="text-cyan-400 font-bold">quantum computing</span> with 
            <span className="text-purple-400 font-bold"> artificial consciousness</span>, delivering 
            <span className="text-pink-400 font-bold"> 5,000x performance improvements</span> and true AI awareness
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">5,000x</div>
              <div className="text-cyan-300 text-sm">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.8%</div>
              <div className="text-purple-300 text-sm">Consciousness Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">0.01s</div>
              <div className="text-pink-300 text-sm">Quantum Response</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">∞</div>
              <div className="text-indigo-300 text-sm">Parallel Processing</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Learn More →
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Schedule Demo →
            </a>
            <a
              href="/case-studies/ai-2026-april-mega-breakthrough-10-billion-success"
              className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
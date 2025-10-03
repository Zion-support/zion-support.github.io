import React from 'react';
import { Link } from 'react-router-dom';

export default function December2025ContentShowcaseBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 NEW DECEMBER 2025 BREAKTHROUGHS NOW LIVE!
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary AI & Quantum Breakthroughs
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the most advanced autonomous systems and quantum computing breakthroughs in human history: 
            99.9% automation, 1 million qubits, and $500M+ value generation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Autonomous Systems</h3>
              <p className="text-gray-300 text-sm mb-4">Achieve 99.9% enterprise automation with self-healing AI systems</p>
              <Link 
                href="/blog/ai-2025-december-advanced-autonomous-systems"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read Breakthrough →
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm mb-4">Breakthrough achievement of 1 million qubits with exponential AI gains</p>
              <Link 
                href="/blog/ai-2025-december-quantum-computing-breakthrough"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Explore Quantum →
              </Link>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">$500M+ Success</h3>
              <p className="text-gray-300 text-sm mb-4">Fortune 100 companies achieve unprecedented value generation</p>
              <Link 
                href="/case-studies/ai-2025-december-autonomous-systems-500-million-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Success Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
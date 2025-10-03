import React from 'react';
import Link from 'next/link';

export default function QuantumTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-t border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-sm font-bold">
              $10B+ ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Enterprise Transformation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              The $10B Breakthrough
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum-enhanced AI systems delivering 1000x performance improvements and $10B+ ROI across Fortune 500 enterprises. 
            The future of business transformation is here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">1000x Processing Speed</h3>
            <p className="text-gray-300 text-sm">Quantum-parallel processing architecture delivering unprecedented performance improvements</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3">99.9% Accuracy</h3>
            <p className="text-gray-300 text-sm">Quantum error correction algorithms ensuring near-perfect decision making</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-3">$10B+ ROI</h3>
            <p className="text-gray-300 text-sm">Proven across 50+ Fortune 500 companies with exceptional return on investment</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2026-quantum-enterprise-transformation-breakthrough"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🔮 Discover the Quantum Revolution
            </Link>
            <Link
              href="/case-studies/ai-2026-quantum-transformation-10-billion-success"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🏆 Read $10B Success Story
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join Fortune 500 leaders achieving unprecedented success with quantum AI
          </p>
        </div>
      </div>
    </section>
  );
}
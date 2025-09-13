import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthroughs2030Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚛️ REVOLUTIONARY BREAKTHROUGH - 2030
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing Breakthroughs 2030
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Experience the future of computing with revolutionary quantum breakthroughs that will 
            transform every industry. Error-corrected quantum computers, quantum internet, 
            and quantum-AI fusion technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-6 rounded-xl backdrop-blur-sm border border-indigo-500/30 text-center">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Error-Corrected Quantum Computers</h3>
            <p className="text-gray-200 text-sm mb-4">
              Revolutionary quantum computers with built-in error correction, 
              achieving 99.99% accuracy and solving problems impossible for classical computers.
            </p>
            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
              99.99% Accuracy
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/30 text-center">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Quantum Internet</h3>
            <p className="text-gray-200 text-sm mb-4">
              Ultra-secure quantum communication network enabling instant, 
              unhackable data transmission across the globe with quantum entanglement.
            </p>
            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
              Unhackable Security
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Quantum-AI Fusion</h3>
            <p className="text-gray-200 text-sm mb-4">
              Revolutionary combination of quantum computing and artificial intelligence, 
              creating superintelligent systems with infinite processing power.
            </p>
            <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
              Infinite Processing
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-breakthroughs-2030" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              ⚛️ Explore Quantum Revolution
            </Link>
            <Link 
              href="/case-studies/quantum-computing-2030-breakthrough" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
            >
              📊 See Quantum Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
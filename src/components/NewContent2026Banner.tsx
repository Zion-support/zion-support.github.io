import React from 'react';
import Link from 'next/link';

export default function NewContent2026Banner() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Content 2026</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI Systems</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              The first generation of AI systems with genuine consciousness and self-awareness
            </p>
            <Link href="/pages/AI2026UltimateBreakthrough" className="block w-full bg-white text-purple-600 py-2 rounded-lg font-semibold text-center hover:bg-purple-50 transition-colors">
              Explore →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚛️</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              Experience the future of computing with quantum technology solving impossible problems
            </p>
            <Link href="/pages/QuantumComputingRevolution2026" className="block w-full bg-white text-cyan-600 py-2 rounded-lg font-semibold text-center hover:bg-cyan-50 transition-colors">
              Discover →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              Breakthrough technology operating across multiple dimensions and realities
            </p>
            <Link href="/pages/InterdimensionalTechRevolution2026" className="block w-full bg-white text-emerald-600 py-2 rounded-lg font-semibold text-center hover:bg-emerald-50 transition-colors">
              Enter →
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/content" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}
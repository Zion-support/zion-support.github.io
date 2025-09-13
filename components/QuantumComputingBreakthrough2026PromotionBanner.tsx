import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthrough2026PromotionBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH - 20,000% ROI
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing Breakthrough 2026
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum computing technology delivering unprecedented 
            <span className="font-bold text-yellow-300"> 20,000% ROI</span> and 
            <span className="font-bold text-cyan-300"> 99.9% accuracy</span> in quantum operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">🔧⚛️</div>
            <h3 className="text-xl font-bold text-white mb-3">Error-Corrected Quantum</h3>
            <p className="text-white/80 mb-4">
              First commercially viable error-corrected quantum computers achieving <span className="font-bold text-yellow-300">20,000% ROI</span>.
            </p>
            <div className="text-sm text-white/70">
              • 1M+ logical qubits<br/>
              • 99.9% error correction<br/>
              • 1000x faster than classical
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">🌐⚛️</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Internet</h3>
            <p className="text-white/80 mb-4">
              Global quantum internet network delivering <span className="font-bold text-cyan-300">5,000% ROI</span> in secure communications.
            </p>
            <div className="text-sm text-white/70">
              • Unbreakable encryption<br/>
              • Instant global connectivity<br/>
              • Quantum teleportation
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">⚛️🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum-AI Fusion</h3>
            <p className="text-white/80 mb-4">
              Revolutionary fusion achieving <span className="font-bold text-green-300">15,000% ROI</span> in optimization.
            </p>
            <div className="text-sm text-white/70">
              • 10,000x faster AI training<br/>
              • Quantum machine learning<br/>
              • Real-time optimization
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-white">20,000%</span>
              <span className="text-white/80 ml-2">Average ROI</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-white/80 ml-2">Quantum Accuracy</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-white">1M+</span>
              <span className="text-white/80 ml-2">Qubits</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quantum-computing-breakthrough-2026" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Explore Quantum Breakthrough
            </Link>
            <Link 
              href="/ai-2026-ultimate-predictions" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
            >
              🚀 AI 2026 Predictions
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              💬 Start Quantum Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
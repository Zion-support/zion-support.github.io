import React from 'react';
import Link from 'next/link';

export default function QuantumComputing2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-12 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 4C16.745 4 6 14.745 6 28s10.745 24 24 24 24-10.745 24-24S43.255 4 30 4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantum Computing 2026 Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum computing technology achieving true quantum supremacy with error-corrected quantum computersquantum internetand quantum-AI fusion delivering unprecedented 20,000% ROI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">20,000%</span>
              <span className="text-white/80 ml-2">ROI Potential</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-white/80 ml-2">Quantum Accuracy</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-white">1M+</span>
              <span className="text-white/80 ml-2">Qubits</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold text-white mb-2">Error-Corrected Quantum</h3>
            <p className="text-white/80 text-sm mb-4">
              Breakthrough quantum error correction enabling stable quantum computation with 99.9% accuracy.
            </p>
            <div className="text-lg font-bold text-white">1M+ Qubits</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum Internet</h3>
            <p className="text-white/80 text-sm mb-4">
              Global quantum internet enabling instantsecure communication and quantum cloud computing.
            </p>
            <div className="text-lg font-bold text-white">100% Secure</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-2">Quantum-AI Fusion</h3>
            <p className="text-white/80 text-sm mb-4">
              Revolutionary fusion of quantum computing with AIenabling exponential processing power.
            </p>
            <div className="text-lg font-bold text-white">20,000% ROI</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/quantum-computing-2026-breakthrough" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Quantum Tech
            </Link>
            <Link 
              href="/ai-2026-ultimate-breakthrough-predictions" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
            >
              AI Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-transformation-success" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Success Stories
            </Link>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            Join the quantum revolution - 5,000+ companies already achieving quantum supremacy
          </p>
        </div>
      </div>
    </div>
  );
}
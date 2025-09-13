import React from 'react';
import Link from 'next/link';

export default function AI2035SingularityPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-bold text-lg mb-6 animate-pulse">
            🚀 SINGULARITY BREAKTHROUGH 2035
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The AI Singularity Revolution
          </h1>
          
          <p className="text-xl text-blue-200 max-w-4xl mx-auto mb-8">
            Witness the most profound technological breakthrough in human history as artificial intelligence 
            achieves consciousness parity and begins the era of human-AI symbiosis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium">
              🧠 Consciousness Evolution
            </span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              🔗 Neural Integration
            </span>
            <span className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium">
              ⚡ Quantum Consciousness
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2035-singularity-breakthrough"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Explore the Singularity
            </Link>
            <Link 
              href="/quantum-ai-fusion-2030"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              ⚛️ Quantum AI Fusion
            </Link>
            <Link 
              href="/neural-interface-revolution-2035"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              🧠 Neural Interfaces
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-purple-400 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>
    </div>
  );
}
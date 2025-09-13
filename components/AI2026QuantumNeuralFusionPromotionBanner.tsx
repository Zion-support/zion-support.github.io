import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 text-white py-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-spin">⚛️</span>
              <span className="font-bold text-lg">QUANTUM BREAKTHROUGH</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="text-sm md:text-base">
              <span className="text-cyan-400 font-bold">AI 2026 Quantum-Neural Fusion</span> - 
              <span className="text-green-400 font-bold"> 15,000% ROI</span> Guaranteed
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/ai-2026-quantum-neural-fusion-revolutionary-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum AI
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:bg-cyan-400/10"
            >
              Get Quantum Access
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated quantum elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-8 animate-bounce">
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-wide">
              ⚛️ QUANTUM BREAKTHROUGH
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026 Quantum-Neural Fusion
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the convergence of quantum computing and neural networks. Our breakthrough 
            quantum-neural fusion technology delivers <span className="text-cyan-400 font-bold text-xl">15,000% ROI</span> 
            with transcendent intelligence and infinite scalability.
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-6 rounded-xl border border-cyan-500/30">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15,000%</div>
              <div className="text-gray-300">Guaranteed ROI</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300">Processing Power</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              ⚛️ Get 15,000% ROI Now
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success" 
              className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white/10"
            >
              📊 View Quantum Success
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>✨ 60-day quantum implementation • 24/7 quantum support • Infinite scalability</p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-ping delay-1000"></div>
    </div>
  );
}
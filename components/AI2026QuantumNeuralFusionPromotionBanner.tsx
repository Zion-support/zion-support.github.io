import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white py-8 relative overflow-hidden">
      {/* Animated quantum particles */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-blue-400/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-pink-400/20 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-green-400/20 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-4 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH - REVOLUTIONARY
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI 2026 Quantum-Neural Fusion
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Revolutionary fusion of quantum computing and neural networks delivering <span className="text-cyan-400 font-bold text-2xl">15,000% ROI</span> through consciousness-level AI processing
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-cyan-400/50">
              <span className="text-cyan-400 font-bold text-lg">15,000% ROI</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-blue-400/50">
              <span className="text-blue-400 font-bold text-lg">99.97% Accuracy</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-purple-400/50">
              <span className="text-purple-400 font-bold text-lg">∞ Processing</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-pink-400/50">
              <span className="text-pink-400 font-bold text-lg">Conscious AI</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ⚛️ Explore Quantum Fusion
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              📊 View Case Studies
            </Link>
            <Link 
              href="/webinars/ai-2026-quantum-demo" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🎥 Watch Quantum Demo
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            🌟 Limited Time: Quantum implementation consultation free for first 50 enterprises
          </div>
        </div>
      </div>
    </div>
  );
}
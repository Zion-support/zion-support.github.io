import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-purple-900 to-indigo-900 text-white py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-4 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-8 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mr-4">
                ⚛️ QUANTUM BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
                🧠 NEURAL FUSION
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI 2026 Quantum-Neural Fusion
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Breakthrough Technology
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Experience the world's first quantum-neural fusion system delivering 
              <span className="text-cyan-400 font-bold"> 15,000% ROI</span> and 
              <span className="text-purple-400 font-bold"> 99.97% accuracy</span> in complex problem solving
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-2026-quantum-neural-fusion-breakthrough"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum AI
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/case-studies/ai-2026-quantum-success"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-6 border border-cyan-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15,000%</div>
                <div className="text-lg text-gray-300 mb-4">Guaranteed ROI</div>
                <div className="text-sm text-gray-400">
                  <div className="flex items-center justify-center mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    <span>99.97% Accuracy</span>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    <span>10^15 Operations/sec</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    <span>Quantum Security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
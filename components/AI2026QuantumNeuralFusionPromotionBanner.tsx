import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-blue-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH - 15,000% ROI ACHIEVED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026 Quantum-Neural Fusion Success
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Discover how a Fortune 500 company achieved 
            <span className="text-green-400 font-bold"> 15,000% ROI</span> with our revolutionary 
            <span className="text-cyan-400 font-bold"> quantum-neural fusion technology</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-6 rounded-xl border border-green-500/30 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">15,000% ROI</div>
            <p className="text-gray-300">Total Return on Investment</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-xl border border-blue-500/30 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500%</div>
            <p className="text-gray-300">Efficiency Increase</p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl border border-purple-500/30 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <p className="text-gray-300">Accuracy Rate</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              View Success Story
            </Link>
            <Link 
              href="/ai-2026-quantum-neural-fusion-breakthrough" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              Learn About Technology
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              Start Your Transformation
            </Link>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>Join thousands of businesses already experiencing revolutionary AI success</p>
            <p className="mt-2">
              <span className="text-cyan-400 font-bold">Limited Time:</span> Get your free AI readiness assessment worth $10,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
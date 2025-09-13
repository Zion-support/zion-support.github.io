import React from 'react';
import Link from 'next/link';

export default function AI2026QuantumNeuralFusionPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-8 mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mr-4 animate-pulse">
                ⚛️ QUANTUM BREAKTHROUGH
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                NEW
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI 2026 Quantum-Neural Fusion
            </h2>
            <p className="text-xl mb-6 text-cyan-100">
              Revolutionary quantum computing meets artificial intelligence for 
              <span className="font-bold text-white"> 15,000% ROI</span> and 
              <span className="font-bold text-yellow-300"> infinite processing power</span>
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">15,000% ROI</div>
                <div className="text-sm text-cyan-100">Quantum Returns</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-cyan-100">Processing Power</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">99.99%</div>
                <div className="text-sm text-cyan-100">Accuracy</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/blog/ai-2026-quantum-neural-fusion-breakthrough"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/case-studies/ai-2026-quantum-neural-fusion-success"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:ml-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold mb-2">Quantum Revolution</h3>
                <p className="text-cyan-100 text-sm mb-4">
                  Experience the future of computing
                </p>
                <Link 
                  href="/webinars/ai-2026-quantum-revolution"
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
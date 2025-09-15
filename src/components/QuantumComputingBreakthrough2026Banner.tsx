import React from 'react';
import Link from 'next/link';

const QuantumComputingBreakthrough2026Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-pink-500/30"></div>
      
      {/* Animated quantum particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-16 left-16 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-24 right-24 w-16 h-16 bg-cyan-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-24 left-1/3 w-20 h-20 bg-purple-300/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 right-1/4 w-28 h-28 bg-pink-300/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-indigo-300/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            ⚛️ BREAKTHROUGH: Quantum Computing 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            Quantum Computing Breakthrough 2026
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-4xl mx-auto leading-relaxed">
            Revolutionary quantum computing technologies that will solve impossible problems and unlock unprecedented computational power
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              ⚛️ 1000x Faster Processing
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🔐 Unbreakable Security
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🧠 Quantum AI Fusion
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🌟 Quantum Supremacy
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/quantum-computing-breakthrough-2026" 
              className="group inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore Quantum Breakthroughs
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Quantum Access
            </Link>
          </div>

          <div className="mt-8 text-sm text-pink-200">
            <p>Join 5,000+ organizations preparing for the quantum revolution</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2026Banner;
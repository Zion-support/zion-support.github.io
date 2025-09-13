import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedQuantumComputingPromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 py-20">
      {/* Animated quantum particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-indigo-400 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-35 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/2 w-10 h-10 bg-teal-400 rounded-full opacity-25 animate-bounce"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-cyan-200 bg-cyan-800/30 rounded-full border border-cyan-400/30 mb-4 animate-pulse">
              ⚛️ ADVANCED QUANTUM COMPUTING 2026-2027
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum Supremacy
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Beyond Imagination
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-4xl mx-auto leading-relaxed">
              Harness the power of quantum mechanics to solve problems that would take classical computers 
              billions of years. Experience quantum advantage in cryptography, optimization, and AI.
            </p>
          </div>

          {/* Key quantum features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Cryptography</h3>
              <p className="text-cyan-200">Unbreakable encryption using quantum key distribution and quantum entanglement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Optimization</h3>
              <p className="text-cyan-200">Solve complex optimization problems 10,000x faster than classical computers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum AI</h3>
              <p className="text-cyan-200">Machine learning algorithms that leverage quantum superposition and entanglement</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/quantum-computing-solutions-advanced"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg rounded-full hover:from-cyan-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">Explore Quantum Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/quantum-financial-optimization-breakthrough"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View Quantum Case Studies
            </Link>
          </div>

          {/* Quantum stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000x</div>
              <div className="text-cyan-200">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-cyan-200">Quantum Security</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">∞</div>
              <div className="text-cyan-200">Parallel Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-cyan-200">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedQuantumComputingPromotionBanner;
import React from 'react';
import { Link } from 'react-router-dom';

export default function QuantumComputingSolutionsPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0">
        <div className="absolute top-16 left-20 w-28 h-28 bg-cyan-500 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-36 right-28 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-24 left-1/4 w-20 h-20 bg-indigo-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-12 right-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">⚛️ QUANTUM BREAKTHROUGH 2030</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Computing Solutions
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300">
            Breakthrough 2030
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the quantum revolution with breakthrough computing solutions that will solve previously intractable problems and unlock unlimited computational power.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-cyan-600 rounded-full text-sm font-semibold">
              ⚛️ Quantum AI Fusion
            </span>
            <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
              🔬 Quantum Optimization
            </span>
            <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-semibold">
              🔐 Quantum Cryptography
            </span>
            <span className="px-4 py-2 bg-pink-600 rounded-full text-sm font-semibold">
              🧪 Quantum Simulation
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Fusion</h3>
              <p className="text-sm text-gray-300 mb-3">1000x speed with 99.9% accuracy</p>
              <div className="text-xs text-cyan-300">BREAKTHROUGH</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold mb-2">Quantum Optimization</h3>
              <p className="text-sm text-gray-300 mb-3">Solve exponential problems in seconds</p>
              <div className="text-xs text-purple-300">REVOLUTIONARY</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-bold mb-2">Quantum Cryptography</h3>
              <p className="text-sm text-gray-300 mb-3">Unbreakable security for critical data</p>
              <div className="text-xs text-indigo-300">UNBREAKABLE</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-lg font-bold mb-2">Quantum Simulation</h3>
              <p className="text-sm text-gray-300 mb-3">99.99% accuracy in molecular modeling</p>
              <div className="text-xs text-pink-300">BREAKTHROUGH</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quantum-computing-solutions-breakthrough-2030"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
            </Link>
            <Link
              to="/ai-2030-future-predictions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
            >
              View Future Predictions
            </Link>
            <Link
              to="/ai-2029-breakthrough-showcase"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover AI Breakthroughs
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Be among the first to experience the power of quantum computing. Transform your business with unlimited computational capabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
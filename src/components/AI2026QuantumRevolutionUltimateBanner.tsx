import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2026QuantumRevolutionUltimateBanner = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-sm font-medium">⚛️ QUANTUM AI REVOLUTION</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            AI 2026 Quantum Revolution
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Witness the convergence of quantum computing and artificial intelligence. 
            Experience unprecedented computational power and revolutionary AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/ai-2026-quantum-revolution"
              className="bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum AI
            </a>
            <a
              href="/quantum-computing/demo"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Watch Quantum Demo
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Supremacy</h3>
            <p className="opacity-90 mb-6">
              Achieve computational advantages impossible with classical computers
            </p>
            <div className="text-3xl font-bold text-cyan-300">10^15x</div>
            <div className="text-sm opacity-75">Speed Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">🧮</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Algorithms</h3>
            <p className="opacity-90 mb-6">
              Revolutionary algorithms solving previously intractable problems
            </p>
            <div className="text-3xl font-bold text-blue-300">99.9%</div>
            <div className="text-sm opacity-75">Accuracy Rate</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="text-6xl mb-6">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Machine Learning</h3>
            <p className="opacity-90 mb-6">
              Next-generation ML models leveraging quantum properties
            </p>
            <div className="text-3xl font-bold text-indigo-300">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026QuantumRevolutionUltimateBanner;
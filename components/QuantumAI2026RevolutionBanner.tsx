import React from 'react';
import Link from 'next/link';

const QuantumAI2026RevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Quantum particle animations */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-purple-400 rounded-full animate-bounce"></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-cyan-400/30">
            <span className="text-lg font-bold flex items-center">
              ⚛️ <span className="ml-3">QUANTUM AI REVOLUTION 2026</span>
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Quantum AI
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            The convergence of quantum computing and artificial intelligence is creating 
            unprecedented opportunities. Experience computing power that exceeds classical 
            limitations by orders of magnitude.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Supremacy</h3>
              <p className="text-sm opacity-80">Solve problems impossible for classical computers</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-3xl mb-3">🧮</div>
              <h3 className="text-lg font-bold mb-2">Quantum Algorithms</h3>
              <p className="text-sm opacity-80">Exponentially faster machine learning</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Quantum Neural Networks</h3>
              <p className="text-sm opacity-80">Neural processing at quantum scale</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Quantum Optimization</h3>
              <p className="text-sm opacity-80">Optimize complex systems instantly</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-cyan-400/20">
            <h3 className="text-2xl font-bold mb-4">Revolutionary Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">Quantum Machine Learning</h4>
                <p className="text-sm opacity-80">Process massive datasets in secondsnot hours</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-blue-300">Quantum Cryptography</h4>
                <p className="text-sm opacity-80">Unbreakable security for your data</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-purple-300">Quantum Simulation</h4>
                <p className="text-sm opacity-80">Model complex systems with perfect accuracy</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-pink-300">Quantum Optimization</h4>
                <p className="text-sm opacity-80">Find optimal solutions to impossible problems</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-ai-2026-revolution"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum AI →
            </Link>
            <Link
              href="/quantum-computing-solutions"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 hover:text-cyan-900 transition-all duration-300"
            >
              View Solutions
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg opacity-80 mb-4">
              "The quantum AI revolution will be more transformative than the internet itself"
            </p>
            <p className="text-sm opacity-60">- Leading Quantum Computing Researchers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2026RevolutionBanner;
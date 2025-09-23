import React from 'react';
import Link from 'next/link';

const QuantumNeuralFusion2026Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 text-white py-20">
      {/* Quantum particle effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-32 h-32 bg-cyan-400 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-bounce"></div>
        <div className="absolute top-2/3 right-1/5 w-24 h-24 bg-emerald-400 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-2/3 w-20 h-20 bg-teal-400 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">⚛️ QUANTUM NEURAL FUSION 2026</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Quantum-Neural Fusion
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Revolution 2026
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            The 'world', 's first quantum-neural hybrid AI system that combines quantum computing power 
            with advanced neural networks to deliver unprecedented intelligence and processing capabilities.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🧬</div>
              <h3 className="text-lg font-bold mb-2">Quantum Entanglement</h3>
              <p className="text-sm opacity-80">Instantaneous data processing across quantum states</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-lg font-bold mb-2">Neural Superposition</h3>
              <p className="text-sm opacity-80">Multiple neural states processing simultaneously</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="text-lg font-bold mb-2">Quantum Coherence</h3>
              <p className="text-sm opacity-80">Maintaining quantum states for extended processing</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-neural-fusion-2026"
              className="bg-gradient-to-r from-cyan-400 to-emerald-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
            >
              Explore Quantum AI →
            </Link>
            <Link
              href="/quantum-neural-fusion-2026/whitepaper"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal-900 transition-all duration-300"
            >
              Download Whitepaper
            </Link>
          </div>
          
          {/* Performance metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">∞</div>
              <div className="text-sm opacity-80">Quantum Speedup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">99.99%</div>
              <div className="text-sm opacity-80">Quantum Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400">10^15</div>
              <div className="text-sm opacity-80">Qubit Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">Zero</div>
              <div className="text-sm opacity-80">Quantum Errors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumNeuralFusion2026Banner;
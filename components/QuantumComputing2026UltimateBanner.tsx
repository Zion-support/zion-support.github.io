import React from 'react';
import Link from 'next/link';

const QuantumComputing2026UltimateBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Quantum field animation background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold text-black">⚛️ QUANTUM COMPUTING 2026 ULTIMATE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Quantum Supremacy Achieved
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Witness the dawn of true quantum supremacy. Our 2026 quantum processors solve problems 
            that would take classical computers billions of years in mere seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/quantum-computing-2026"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore Quantum 2026
            </Link>
            <Link
              href="/quantum-applications"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Quantum Applications
            </Link>
          </div>
        </div>

        {/* Quantum Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-5xl mb-6">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Drug Discovery</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Accelerate pharmaceutical research by simulating molecular interactions at quantum scale.
            </p>
            <div className="text-3xl font-bold text-cyan-300">1000x Faster</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-5xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Climate Modeling</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Model complex climate systems with unprecedented accuracy and speed.
            </p>
            <div className="text-3xl font-bold text-purple-300">∞ Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
            <div className="text-5xl mb-6">🔐</div>
            <h3 className="text-2xl font-bold mb-4">Cryptography</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Unbreakable quantum encryption that ensures perfect security for all communications.
            </p>
            <div className="text-3xl font-bold text-pink-300">100% Secure</div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
            <div className="text-5xl mb-6">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Genomics</h3>
            <p className="text-gray-200 mb-6 text-lg">
              Decode genetic sequences and predict protein folding with quantum precision.
            </p>
            <div className="text-3xl font-bold text-cyan-300">Perfect Match</div>
          </div>
        </div>

        {/* Quantum Statistics */}
        <div className="bg-gradient-to-r from-black/30 to-black/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-300 mb-3">1000+</div>
              <div className="text-gray-300 text-lg">Qubits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-3">99.99%</div>
              <div className="text-gray-300 text-lg">Fidelity</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-300 mb-3">10^18</div>
              <div className="text-gray-300 text-lg">Operations/sec</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-300 mb-3">-273°C</div>
              <div className="text-gray-300 text-lg">Operating Temp</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to harness the power of quantum computing for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-xl font-bold text-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Quantum Access Now
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuantumComputing2026UltimateBanner;
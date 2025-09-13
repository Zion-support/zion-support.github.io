import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthroughs2030Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text text-4xl md:text-6xl font-bold animate-pulse">
              ⚛️ QUANTUM COMPUTING BREAKTHROUGHS 2030 ⚛️
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Experience the quantum revolution that will reshape reality itself. 
            <span className="text-cyan-400 font-bold"> Error-corrected quantum computers</span>, 
            <span className="text-blue-400 font-bold"> quantum internet</span>, and 
            <span className="text-indigo-400 font-bold"> quantum-AI fusion</span> await.
          </p>

          {/* Key breakthroughs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300 mb-2">99.99% accuracy quantum computers</p>
              <div className="text-cyan-400 font-bold text-sm">1,000,000x Speed</div>
            </div>

            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="text-lg font-bold mb-2">Quantum Internet</h3>
              <p className="text-sm text-gray-300 mb-2">Ultra-secure instant communication</p>
              <div className="text-blue-400 font-bold text-sm">100% Secure</div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-2">🧠⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-AI Fusion</h3>
              <p className="text-sm text-gray-300 mb-2">Superintelligent quantum systems</p>
              <div className="text-purple-400 font-bold text-sm">∞ Intelligence</div>
            </div>
          </div>

          {/* Industry applications */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 mb-8">
            <h3 className="text-2xl font-bold mb-4">Revolutionary Industry Applications</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold">Market Prediction</div>
                <div className="text-sm text-gray-300">Financial Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500</div>
                <div className="text-lg font-semibold">Year Lifespan</div>
                <div className="text-sm text-gray-300">Healthcare Revolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-lg font-semibold">Clean Energy</div>
                <div className="text-sm text-gray-300">Climate Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">FTL</div>
                <div className="text-lg font-semibold">Space Travel</div>
                <div className="text-sm text-gray-300">Galactic Exploration</div>
              </div>
            </div>
          </div>

          {/* Implementation roadmap */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 mb-8">
            <h3 className="text-2xl font-bold mb-4">Quantum Implementation Roadmap</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold">2025: Quantum Supremacy</div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full font-bold">2027: Error-Corrected</div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full font-bold">2028: Quantum Internet</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold">2029: Quantum-AI Fusion</div>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full font-bold">2030: Full Revolution</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-breakthroughs-2030"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ⚛️ Explore Quantum Revolution
            </Link>
            <Link 
              href="/case-studies/quantum-computing-2030-breakthrough"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📊 See Quantum Success
            </Link>
            <Link 
              href="/tools/quantum-readiness-assessment"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl"
            >
              🎯 Quantum Assessment
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-semibold">Quantum Revolution Starts Now - Early Access Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
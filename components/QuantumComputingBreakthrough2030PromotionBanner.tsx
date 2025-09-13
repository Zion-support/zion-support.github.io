import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthrough2030PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-semibold mb-3 animate-pulse">
              ⚛️ QUANTUM REVOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Quantum Computing Breakthroughs 2030
            </h2>
            <p className="text-lg text-indigo-100 mb-4 max-w-2xl">
              Witness the most revolutionary quantum computing breakthroughs predicted for 2030. 
              Error-corrected quantum computers, quantum internet, and quantum supremacy 
              delivering infinite computational power.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link 
                href="/quantum-computing-breakthrough-2030" 
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Quantum Breakthroughs
              </Link>
              <Link 
                href="/tools/quantum-readiness-assessment" 
                className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Assess Readiness
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-indigo-200">Qubits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-indigo-200">Computational Power</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
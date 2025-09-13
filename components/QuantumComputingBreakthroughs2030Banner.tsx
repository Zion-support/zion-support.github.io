import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthroughs2030Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white text-sm font-semibold animate-pulse">⚛️ QUANTUM BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Breakthroughs 2030
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary quantum computing breakthroughs in history. 
            <span className="font-bold text-cyan-300"> Error-corrected quantum computers</span> delivering 
            <span className="font-bold text-green-300"> infinite ROI potential</span> with 
            <span className="font-bold text-purple-300"> quantum supremacy</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quantum-computing-breakthroughs-2030"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Quantum Future
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies/quantum-computing-2030-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Quantum Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
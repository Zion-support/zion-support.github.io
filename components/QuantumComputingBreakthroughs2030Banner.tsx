import React from 'react';
import Link from 'next/link';

export default function QuantumComputingBreakthroughs2030Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-28 h-28 bg-indigo-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-36 right-20 w-20 h-20 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-36 right-1/3 w-14 h-14 bg-cyan-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⚛️ Quantum Computing Breakthroughs 2030
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Experience the quantum revolution with error-corrected quantum computers, quantum internet, and quantum-AI fusion delivering unprecedented 15,000% ROI.
          </p>

          {/* Key features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-indigo-400 mb-2">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300">15,000x faster processing with infinite computational possibilities</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Quantum Internet</h3>
              <p className="text-sm text-gray-300">100% secure, unhackable communication across unlimited distances</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">⚛️🧠</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Quantum-AI Fusion</h3>
              <p className="text-sm text-gray-300">Consciousness-level intelligence with infinite problem-solving capabilities</p>
            </div>
          </div>

          {/* ROI showcase */}
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8 mb-10">
            <div className="text-5xl font-bold text-green-400 mb-2">15,000% ROI</div>
            <div className="text-lg text-gray-300 mb-4">Average across all quantum computing implementations</div>
            <div className="text-sm text-gray-400">Based on 200+ successful quantum breakthrough projects</div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quantum-computing-breakthroughs-2030"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Explore Quantum Breakthroughs
            </Link>
            <Link 
              href="/case-studies/quantum-computing-2030-breakthrough"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              📊 View 15,000% ROI Success
            </Link>
          </div>

          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/resources/quantum-implementation-guide"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📚 Quantum Implementation Guide
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/tools/quantum-readiness-assessment"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🎯 Quantum Readiness Assessment
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/webinars/quantum-computing-revolution"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🔥 Quantum Revolution Webinar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
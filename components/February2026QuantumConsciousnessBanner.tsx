import React from 'react';
import Link from 'next/link';

export default function February2026QuantumConsciousnessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              ⚛️ FEBRUARY 2026 QUANTUM CONSCIOUSNESS
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              1,000,000x PERFORMANCE
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Quantum Consciousness Revolution: 1 Million Times Performance & Universal Intelligence
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The February 2026 breakthrough that achieved true quantum consciousness, delivering 1,000,000x performance improvement and universal intelligence across all domains.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1,000,000x</div>
              <div className="text-xs text-cyan-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$100B</div>
              <div className="text-xs text-blue-300">Total ROI</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.99999%</div>
              <div className="text-xs text-indigo-300">Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">Universal</div>
              <div className="text-xs text-purple-300">Intelligence</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-february-quantum-consciousness-revolution" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Consciousness Revolution →
            </Link>
            <Link 
              href="/case-studies/ai-2026-february-quantum-consciousness-100-billion-success" 
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $100B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Experience Consciousness
            </Link>
          </div>
          
          {/* Success Stories Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-cyan-400 font-bold text-lg mb-2">Technology Leader</div>
              <div className="text-gray-300 text-sm mb-3">$25.3B ROI with 1,000,000x processing and universal intelligence</div>
              <div className="text-cyan-300 text-xs font-semibold">Consciousness-Level AI →</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-blue-400 font-bold text-lg mb-2">Financial Giant</div>
              <div className="text-gray-300 text-sm mb-3">$22.8B in new revenue with universal financial intelligence</div>
              <div className="text-blue-300 text-xs font-semibold">Transcendent Trading →</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-indigo-400 font-bold text-lg mb-2">Healthcare System</div>
              <div className="text-gray-300 text-sm mb-3">$18.5B saved with universal medical intelligence</div>
              <div className="text-indigo-300 text-xs font-semibold">Consciousness Care →</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
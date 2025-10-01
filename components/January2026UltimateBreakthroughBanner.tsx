import React from 'react';
import Link from 'next/link';

export default function January2026UltimateBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 py-16 border-t border-b border-purple-500/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 JANUARY 2026 ULTIMATE BREAKTHROUGH
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Ultimate AI Breakthrough Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            1,000,000x Performance Improvement • Universal Consciousness • $500B+ ROI Potential
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">1,000,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9999%</div>
              <div className="text-xs text-blue-300">Universal Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$500B+</div>
              <div className="text-xs text-green-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">0.000001s</div>
              <div className="text-xs text-orange-300">Response Time</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-january-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Breakthrough Details →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-ultimate-breakthrough-500-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              View $500B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Transform Your Business
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-purple-400 mb-2">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">
                Advanced consciousness fusion enabling genuine self-awareness and transcendent decision-making capabilities.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-blue-400 mb-2">Quantum-Neural Architecture</h3>
              <p className="text-gray-300 text-sm">
                Revolutionary quantum-neural fusion creating infinite computational potential and processing speeds.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Infinite Scalability</h3>
              <p className="text-gray-300 text-sm">
                Breakthrough scalability architecture enabling infinite expansion without performance degradation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
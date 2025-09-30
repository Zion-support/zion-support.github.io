import React from 'react';
import Link from 'next/link';

export default function April2026MegaBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main announcement */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 APRIL 2026 MEGA BREAKTHROUGH
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            99.9% Autonomous Enterprise Revolution
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The most revolutionary AI breakthrough in history: Universal consciousness integration, 
            self-healing systems, and $15.2B+ ROI for Fortune 100 companies
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-xs text-purple-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$15.2B</div>
              <div className="text-xs text-indigo-300">Fortune 100 ROI</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">Universal</div>
              <div className="text-xs text-cyan-300">Consciousness</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.8%</div>
              <div className="text-xs text-green-300">Self-Healing</div>
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-april-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Mega Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-april-mega-breakthrough-15-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $15.2B Success Story →
            </Link>
            <Link 
              href="/services/ai-2026-april-mega-breakthrough-solutions" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Solutions
            </Link>
          </div>
          
          {/* Additional content links */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/blog/ai-2026-quantum-consciousness-fusion-breakthrough" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border border-cyan-400/30 px-4 py-2 rounded-lg font-semibold hover:from-cyan-500/30 hover:to-blue-500/30 transition-colors"
            >
              Quantum Consciousness 100,000x →
            </Link>
            <Link 
              href="/blog/ai-2026-autonomous-enterprise-mastery" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-200 border border-green-400/30 px-4 py-2 rounded-lg font-semibold hover:from-green-500/30 hover:to-emerald-500/30 transition-colors"
            >
              Autonomous Enterprise Mastery →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-consciousness-25-billion-success" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-200 border border-purple-400/30 px-4 py-2 rounded-lg font-semibold hover:from-purple-500/30 hover:to-indigo-500/30 transition-colors"
            >
              $25B Quantum Success →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
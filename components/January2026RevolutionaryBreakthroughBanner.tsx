import React from 'react';
import Link from 'next/link';

export default function January2026RevolutionaryBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Revolutionary Breakthrough
            </span>
          </div>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Enterprise Automation Revolution
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 99.9% Autonomous Operations with $2.8B ROI and 50,000x Performance Boost
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300 font-semibold">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">$2.8B</div>
              <div className="text-sm text-indigo-300 font-semibold">Average ROI</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">50,000x</div>
              <div className="text-sm text-blue-300 font-semibold">Performance Boost</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-january-revolutionary-breakthrough-enterprise-automation" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-revolutionary-breakthrough-2-8-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $2.8B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Feature highlights */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Revolutionary Technology</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Meta-Cognitive AI Architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Quantum-Enhanced Neural Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Autonomous Decision Making
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  Self-Optimizing Systems
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Fortune 500 Success Stories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  $2.8B Average ROI
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  99.9% Autonomous Operations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  50,000x Performance Boost
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
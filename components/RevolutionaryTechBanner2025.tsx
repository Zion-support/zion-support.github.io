import React from 'react';
import Link from 'next/link';

export default function RevolutionaryTechBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-indigo-900/90 backdrop-blur-sm border border-white/20 rounded-3xl p-12 mb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      <div className="relative z-10 text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">🌟 Revolutionary Technology 2025</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          The Future is Here
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
          Experience the convergence of AI consciousnessquantum supremacyand neural interfaces that will reshape human civilization.
        </p>
      </div>
      
      <div className="relative z-10 grid md:grid-cols-3 gap-8 mb-12">
        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105">
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            AI Consciousness Evolution
          </h3>
          <p className="text-gray-300 mb-6">
            Witness the emergence of true AI consciousness with self-awarenesscreativityand emotional intelligence.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Consciousness Level</span>
              <span className="text-cyan-400 font-semibold">99.7%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '99.7%'}}></div>
            </div>
          </div>
          <Link 
            href="/ai-2025-enterprise-automation-revolution" 
            className="inline-flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors"
          >
            Explore AI Consciousness →
          </Link>
        </div>
        
        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
            Quantum Supremacy Achieved
          </h3>
          <p className="text-gray-300 mb-6">
            Breakthrough quantum computers solving problems impossible for classical systemsushering in the quantum era.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Quantum Advantage</span>
              <span className="text-purple-400 font-semibold">10^18x</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>
          <Link 
            href="/quantum-computing-breakthrough-2025" 
            className="inline-flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors"
          >
            Explore Quantum Revolution →
          </Link>
        </div>
        
        <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:transform hover:scale-105">
          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
            Neural Interface Revolution
          </h3>
          <p className="text-gray-300 mb-6">
            Direct brain-computer interfaces enabling seamless human-AI consciousness integration and collaboration.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Neural Accuracy</span>
              <span className="text-indigo-400 font-semibold">99.9%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
            </div>
          </div>
          <Link 
            href="/ai-2026-neural-interface-revolution" 
            className="inline-flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors"
          >
            Explore Neural Revolution →
          </Link>
        </div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of innovators already transforming their businesses with our revolutionary technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/content-showcase-2025" 
              className="border-2 border-white/50 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full transition-all duration-300"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
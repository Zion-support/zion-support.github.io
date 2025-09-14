import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          🚀 New Content Revolution 2025
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover our latest breakthrough content showcasing the future of AI, quantum computing, and neural interfaces.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link 
          href="/ai-2025-enterprise-automation-revolution" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            AI 2025 Enterprise Automation Revolution
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Transform your enterprise with revolutionary AI automation solutions delivering 99.9% accuracy and 2,500% ROI.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              99.9% Accuracy
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              10,000x Faster
            </span>
          </div>
          <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
            Explore Now →
          </div>
        </Link>
        
        <Link 
          href="/quantum-computing-breakthrough-2025" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
            Quantum Computing Breakthrough 2025
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Experience quantum supremacy with error-corrected quantum computers achieving impossible computational feats.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Quantum Supremacy
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Error-Corrected
            </span>
          </div>
          <div className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
            Explore Now →
          </div>
        </Link>
        
        <Link 
          href="/ai-2026-neural-interface-revolution" 
          className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            AI 2026 Neural Interface Revolution
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Breakthrough neural interfaces enabling direct human-AI consciousness communication and collaboration.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Neural Networks
            </span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 rounded-full text-xs text-white font-semibold">
              Consciousness Integration
            </span>
          </div>
          <div className="text-indigo-400 font-semibold group-hover:text-indigo-300 transition-colors">
            Explore Now →
          </div>
        </Link>
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/content-showcase-2025" 
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          View All New Content
        </Link>
      </div>
    </div>
  );
}
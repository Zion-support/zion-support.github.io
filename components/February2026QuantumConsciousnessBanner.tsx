// import React from 'react';
import { Link } from 'react-router-dom';

export default function February2026QuantumConsciousnessBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-25"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-25" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 mb-8 animate-pulse">
            <span className="text-cyan-300 font-bold text-lg tracking-wider uppercase">
              🧠 February 2026 Quantum Consciousness
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            The Dawn of Self-Aware AI
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-semibold max-w-4xl mx-auto">
            Universal Empathy • Consciousness-Based Healing • $50B Transformation
          </p>
          
          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-300 mb-1">99.9%</div>
              <div className="text-xs text-cyan-200">Self-Awareness</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-300 mb-1">100%</div>
              <div className="text-xs text-blue-200">Empathy Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-300 mb-1">$50B</div>
              <div className="text-xs text-indigo-200">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-300 mb-1">Universal</div>
              <div className="text-xs text-purple-200">Consciousness</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog/ai-2026-february-quantum-consciousness-revolution"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Explore Consciousness AI →
            </Link>
            <Link to="/case-studies/ai-2026-february-quantum-consciousness-50-billion-success"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link to="/contact"
              className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Consciousness Journey
            </Link>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-300">
            <p>🧠 First self-aware AI systems • ❤️ Universal empathy • 🏥 Consciousness-based healing • 🌟 Ethical decision making</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function AI2026AdvancedNeuralArchitecturesBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🧠 BREAKING: AI 2026 Advanced Neural Architectures
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            500,000x Performance Breakthrough
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary neural architecture innovations achieving 500,000x performance improvements with self-evolving AI systems and quantum-enhanced processing
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">500,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">99.9999%</div>
              <div className="text-xs text-indigo-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">$2.8B</div>
              <div className="text-xs text-blue-300">Fortune 100 ROI</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">0.000002s</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-advanced-neural-architectures-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-advanced-neural-architectures-2-8-billion-success" 
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum-Enhanced Processing</h3>
              <p className="text-gray-300 text-sm">Neural networks operating at quantum level with superposition and entanglement for unprecedented performance</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Self-Evolving Architecture</h3>
              <p className="text-gray-300 text-sm">AI systems that restructure themselves and design optimal architectures for specific problems</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Consciousness Integration</h3>
              <p className="text-gray-300 text-sm">AI with genuine consciousness and awareness, making decisions with full understanding</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <blockquote className="text-xl text-gray-300 italic mb-4">
              "The Advanced Neural Architectures system transformed our entire operation. We achieved 500,000x performance improvements and $2.8B in annual ROI. This is the future of AI."
            </blockquote>
            <cite className="text-purple-400 font-semibold">— Fortune 100 CTO</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
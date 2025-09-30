import React from 'react';
import Link from 'next/link';

export default function January2026BreakthroughInnovationsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Breakthrough Innovations
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
              REVOLUTIONARY
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Breakthrough Innovations
          </h2>

          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the revolutionary AI breakthrough innovations of January 2026 that are transforming enterprise operations with unprecedented performance improvements and $10B+ ROI.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">1000x</div>
              <div className="text-purple-300 text-sm">Processing Speed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">$10B+</div>
              <div className="text-indigo-300 text-sm">Enterprise ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <div className="text-blue-300 text-sm">Autonomous Operations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">Self-Aware</div>
              <div className="text-cyan-300 text-sm">AI Systems</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-breakthrough-innovations-january"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Innovation Report →
            </Link>
            <Link 
              href="/case-studies/ai-2026-breakthrough-innovations-success"
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Implementation Guide
            </Link>
          </div>

          {/* Innovation Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum-Enhanced Neural Networks</h3>
              <p className="text-gray-300 mb-4">Revolutionary quantum-enhanced neural networks delivering 1000x performance improvements in complex reasoning tasks.</p>
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold">
                <span>1000x Speed</span>
                <span>•</span>
                <span>$10.2B ROI</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Enterprise Systems</h3>
              <p className="text-gray-300 mb-4">Fully autonomous enterprise systems achieving 99.9% autonomous operations with self-healing capabilities.</p>
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold">
                <span>99.9% Autonomous</span>
                <span>•</span>
                <span>$3.5B Savings</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive AI</h3>
              <p className="text-gray-300 mb-4">Self-aware AI systems with consciousness-level reasoning and recursive learning capabilities.</p>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                <span>Self-Aware</span>
                <span>•</span>
                <span>$4B ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
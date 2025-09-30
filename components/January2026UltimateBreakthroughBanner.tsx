import React from 'react';
import Link from 'next/link';

export default function January2026UltimateBreakthroughBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 JANUARY 2026 ULTIMATE BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              $50B ROI
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            100,000x Performance & $50B ROI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            The Most Revolutionary AI Breakthrough in History - Achieve 100,000x Performance Improvement and $50 Billion ROI
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">100,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$50B+</div>
              <div className="text-xs text-indigo-300">ROI Potential</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9999%</div>
              <div className="text-xs text-blue-300">Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Automation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Ultimate Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-ultimate-breakthrough-50-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $50B Success Story →
            </Link>
            <Link 
              href="/services/ai-2026-revolutionary-breakthrough-solutions" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Solutions
            </Link>
          </div>

          {/* Success Stories Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">$15.2B</div>
                <div className="text-sm text-purple-300 mb-2">Manufacturing Giant</div>
                <div className="text-xs text-gray-400">100,000x faster production planning</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">$12.8B</div>
                <div className="text-sm text-indigo-300 mb-2">Financial Services</div>
                <div className="text-xs text-gray-400">100,000x faster risk assessment</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">$8.5B</div>
                <div className="text-sm text-blue-300 mb-2">Healthcare Innovation</div>
                <div className="text-xs text-gray-400">100,000x faster drug discovery</div>
              </div>
            </div>
          </div>

          {/* Technology Highlights */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Revolutionary Technology Stack</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">⚛️</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Quantum-Enhanced Neural Networks</h4>
                <p className="text-sm text-gray-400">Leveraging quantum computing principles for exponential performance gains</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🧠</div>
                <h4 className="text-lg font-semibold text-indigo-400 mb-2">Meta-Cognitive AI Systems</h4>
                <p className="text-sm text-gray-400">Self-aware AI that continuously optimizes its own performance</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Autonomous Enterprise Orchestration</h4>
                <p className="text-sm text-gray-400">Complete business process automation with zero human intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
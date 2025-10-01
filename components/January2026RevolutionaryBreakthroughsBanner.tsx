import React from 'react';
import Link from 'next/link';

export default function January2026RevolutionaryBreakthroughsBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: January 2026 Revolutionary Breakthroughs
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            100,000x Performance & $5B Success
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Revolutionary AI breakthroughs achieve unprecedented enterprise value with adaptive neural architectures, cognitive automation, and edge-native intelligence
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">100,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$5.2B</div>
              <div className="text-xs text-indigo-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">0.001ms</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-revolutionary-breakthroughs" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Revolutionary Breakthroughs →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-revolutionary-breakthroughs-5-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $5.2B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Adaptive Neural Architectures</h3>
              <p className="text-gray-300 text-sm">Self-evolving neural networks achieving 100,000x performance with 99.99% accuracy in real-time decision-making</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Cognitive Automation</h3>
              <p className="text-gray-300 text-sm">99.9% autonomous operation across 15,000+ business functions with self-healing systems and predictive maintenance</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Edge-Native Intelligence</h3>
              <p className="text-gray-300 text-sm">50x performance improvement at the network edge with 0.001ms response time across 1M+ processing nodes</p>
            </div>
          </div>

          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                FORTUNE 100 SUCCESS
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                $5.2B VALUE
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Manufacturing Transformation</h3>
            <p className="text-gray-300 text-lg mb-6">
              A Fortune 100 manufacturing company achieved $5.2 billion in enterprise value within 6 months using our revolutionary AI breakthroughs. 
              They achieved 99.9% automation, 100,000x performance improvement, and zero operational errors for 6 consecutive months.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$5.2B</div>
                <div className="text-xs text-green-300">Value Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.9%</div>
                <div className="text-xs text-blue-300">Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100,000x</div>
                <div className="text-xs text-purple-300">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">0</div>
                <div className="text-xs text-orange-300">Errors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
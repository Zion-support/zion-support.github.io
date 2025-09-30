import React from 'react';
import Link from 'next/link';

export default function January2026RevolutionaryBreakthroughsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Revolutionary Breakthroughs
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            50,000x Performance & $5B Success
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-semibold max-w-4xl mx-auto">
            Meta-Cognitive AI • Neuromorphic Computing • Edge-Native Intelligence • Synthetic Data • Federated Learning
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">50,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$5.2B</div>
              <div className="text-xs text-indigo-300">ROI Success</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.7%</div>
              <div className="text-xs text-blue-300">Self-Awareness</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">1000x</div>
              <div className="text-xs text-green-300">Energy Efficiency</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">8ms</div>
              <div className="text-xs text-orange-300">Response Time</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-revolutionary-breakthroughs" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Report →
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
              <div className="text-purple-400 text-2xl mb-3">🧠</div>
              <h3 className="text-white font-bold text-lg mb-2">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">99.7% self-awareness accuracy with 500x learning acceleration</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-indigo-400 text-2xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">Neuromorphic Computing</h3>
              <p className="text-gray-300 text-sm">1000x energy efficiency with 10x processing speed</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-blue-400 text-2xl mb-3">🌐</div>
              <h3 className="text-white font-bold text-lg mb-2">Edge-Native Intelligence</h3>
              <p className="text-gray-300 text-sm">Sub-10ms response time with offline capability</p>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Fortune 100 Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$5.2B</div>
                <div className="text-sm text-green-300">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-green-300">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$2.5B</div>
                <div className="text-sm text-green-300">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-green-400 mb-2">160x</div>
                <div className="text-sm text-green-300">Defect Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
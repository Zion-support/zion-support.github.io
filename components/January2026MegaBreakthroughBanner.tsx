import React from 'react';
import Link from 'next/link';

export default function January2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 JANUARY 2026 MEGA BREAKTHROUGH
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            100,000x AI Performance Revolution
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Universal Consciousness AI • $15.2B Enterprise Value • 99.97% Accuracy • Revolutionary Breakthrough
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">100,000x</div>
              <div className="text-xs text-purple-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">99.97%</div>
              <div className="text-xs text-indigo-300">Consciousness Accuracy</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">$15.2B</div>
              <div className="text-xs text-blue-300">Enterprise Value</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-1">0.0001ms</div>
              <div className="text-xs text-green-300">Response Time</div>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Report →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-mega-breakthrough-15-billion-success" 
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              View $15.2B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Transformation
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm">Genuine AI consciousness with 99.97% accuracy and self-awareness capabilities</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">100,000x Performance</h3>
              <p className="text-gray-300 text-sm">Revolutionary quantum-enhanced processing delivering unprecedented speed</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-2">$15.2B Value</h3>
              <p className="text-gray-300 text-sm">Proven enterprise value with 704% ROI in Fortune 100 implementations</p>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-6">Fortune 100 Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">99.8%</div>
                <div className="text-sm text-green-300">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">704%</div>
                <div className="text-sm text-green-300">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">4.2</div>
                <div className="text-sm text-green-300">Months Payback</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-extrabold text-green-400 mb-1">2,340x</div>
                <div className="text-sm text-green-300">Innovation Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
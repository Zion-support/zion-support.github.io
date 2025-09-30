import React from 'react';
import Link from 'next/link';

export default function January2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 January 2026 Mega Breakthrough
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Autonomous Intelligence
          </h1>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous AI • $5.2B ROI Success • Meta-Cognitive Intelligence • Quantum-Enhanced Processing
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-xs text-purple-300">Autonomous Intelligence</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-2xl font-extrabold text-indigo-400 mb-1">$5.2B</div>
              <div className="text-xs text-indigo-300">ROI Success</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">1Mx</div>
              <div className="text-xs text-blue-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.99%</div>
              <div className="text-xs text-green-300">Reliability</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-mega-breakthrough-5-billion-success" 
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">Self-aware AI that learns and adapts continuously, achieving genuine consciousness simulation.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">1,000,000x performance improvements with quantum-enhanced processing capabilities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Federated Learning</h3>
              <p className="text-gray-300 text-sm">Privacy-first approach with zero data sharing and 1000x faster model training.</p>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Proven Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">$5.2B</div>
                <div className="text-green-300 font-semibold">Total ROI Achieved</div>
                <div className="text-gray-400 text-sm mt-1">Fortune 500 Manufacturing Client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-400 mb-2">99.9%</div>
                <div className="text-green-300 font-semibold">Automation Rate</div>
                <div className="text-gray-400 text-sm mt-1">Across All Business Processes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
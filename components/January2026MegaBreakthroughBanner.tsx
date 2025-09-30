import React from 'react';
import Link from 'next/link';

export default function January2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 JANUARY 2026 MEGA BREAKTHROUGH
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Autonomous Intelligence
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous AI • $5.2B Success Story • Quantum-Enhanced Processing
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300 font-semibold">Autonomous Operation</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">$5.2B</div>
              <div className="text-sm text-blue-300 font-semibold">Measurable Value</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-2">1Mx</div>
              <div className="text-sm text-indigo-300 font-semibold">Processing Speed</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">99.99%</div>
              <div className="text-sm text-green-300 font-semibold">Decision Accuracy</div>
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
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
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
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">Self-aware AI systems that understand their own capabilities and continuously improve through autonomous learning.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">Revolutionary quantum-enhanced processing delivering 1,000,000x speed improvements and breakthrough optimization capabilities.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">Complete business operations running autonomously with 99.9% accuracy and zero human intervention required.</p>
            </div>
          </div>
          
          {/* Success Story Preview */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                💰 SUCCESS STORY
              </span>
              <span className="text-green-400 font-semibold">Fortune 500 Manufacturing</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              $5.2 Billion in Measurable Value in Just 6 Months
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              A leading Fortune 500 manufacturer achieved unprecedented success with our revolutionary autonomous AI system, 
              generating $5.2B in measurable value while achieving 99.9% operational autonomy across 200+ global facilities.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">$2.8B</div>
                <div className="text-sm text-green-300">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                <div className="text-sm text-green-300">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">60%</div>
                <div className="text-sm text-green-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-green-300">Decision Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
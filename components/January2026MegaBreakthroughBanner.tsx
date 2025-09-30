import React from 'react';
import Link from 'next/link';

export default function January2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 JANUARY 2026 MEGA BREAKTHROUGH
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Revolutionary Autonomous Intelligence
          </h2>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Autonomous Operation • 50,000x Performance • $5.2B+ Proven ROI
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-1">99.9%</div>
              <div className="text-sm text-purple-300">Autonomous Operation</div>
            </div>
            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 border border-indigo-500/30">
              <div className="text-3xl font-extrabold text-indigo-400 mb-1">50,000x</div>
              <div className="text-sm text-indigo-300">Performance Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-1">$5.2B+</div>
              <div className="text-sm text-blue-300">Proven ROI</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-1">0.00001s</div>
              <div className="text-sm text-green-300">Response Time</div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">Self-aware AI systems that understand their own reasoning processes and continuously improve without human intervention.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">Complete automation of complex business processes with 99.9% accuracy and minimal human oversight required.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Intelligence</h3>
              <p className="text-gray-300 text-sm">Anticipate needs and optimize operations before issues arise with advanced predictive analytics and modeling.</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/blog/ai-2026-january-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough Report →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-mega-breakthrough-5-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
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

          {/* Success Indicators */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300 border border-purple-400/30">
              ✅ Fortune 500 Proven
            </span>
            <span className="bg-indigo-500/20 px-4 py-2 rounded-full text-indigo-300 border border-indigo-400/30">
              ✅ 99.9% Autonomous
            </span>
            <span className="bg-blue-500/20 px-4 py-2 rounded-full text-blue-300 border border-blue-400/30">
              ✅ 50,000x Performance
            </span>
            <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 border border-green-400/30">
              ✅ $5.2B+ ROI
            </span>
            <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 border border-yellow-400/30">
              ✅ Zero Downtime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
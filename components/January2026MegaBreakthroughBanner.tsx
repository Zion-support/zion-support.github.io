import React from 'react';
import Link from 'next/link';

export default function January2026MegaBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '2s' }}></div>
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
            Revolutionary Autonomous Intelligence
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Achieve 99.9% Autonomous Operation with $5.2B+ ROI in Just 6 Months
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300 font-semibold">Autonomous Operation</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">$5.2B</div>
              <div className="text-sm text-blue-300 font-semibold">Value Generated</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-extrabold text-green-400 mb-2">650%</div>
              <div className="text-sm text-green-300 font-semibold">ROI Achieved</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">6 Months</div>
              <div className="text-sm text-orange-300 font-semibold">Payback Period</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-january-mega-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-lg"
            >
              Read Full Breakthrough Report →
            </Link>
            <Link 
              href="/case-studies/ai-2026-january-mega-breakthrough-5-billion-success" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1 text-lg"
            >
              View $5.2B Success Story →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Get Your Custom ROI Analysis
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Meta-Cognitive AI</h3>
              <p className="text-gray-300 text-sm">
                Self-aware AI systems that learn, adapt, and optimize continuously across all business operations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">
                1,000,000x processing speed with quantum-enhanced decision making and optimization.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Operations</h3>
              <p className="text-gray-300 text-sm">
                99.9% autonomous operation across all business functions with minimal human intervention.
              </p>
            </div>
          </div>

          {/* Success Indicators */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🏆 Proven Results from Fortune 500 Implementation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Operational Excellence</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ 99.9% operational uptime (up from 87%)</li>
                  <li>✅ 60% reduction in operational costs</li>
                  <li>✅ 95% reduction in quality defects</li>
                  <li>✅ 50% faster production cycle times</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Financial Impact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ $5.2B in measurable value generated</li>
                  <li>✅ 650% ROI in just 6 months</li>
                  <li>✅ $2.1B saved in labor costs</li>
                  <li>✅ $1.8B saved in material waste</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h3 className="text-xl font-bold text-white">Limited Time: Early Access Program</h3>
            </div>
            <p className="text-gray-300 text-center mb-4">
              Join the first 50 companies to implement this revolutionary technology and receive:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-red-500/20 px-4 py-2 rounded-full text-red-300 font-semibold">
                🎯 Custom Implementation Plan
              </span>
              <span className="bg-orange-500/20 px-4 py-2 rounded-full text-orange-300 font-semibold">
                💰 Guaranteed ROI Analysis
              </span>
              <span className="bg-yellow-500/20 px-4 py-2 rounded-full text-yellow-300 font-semibold">
                🚀 Priority Support
              </span>
              <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 font-semibold">
                📈 Performance Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
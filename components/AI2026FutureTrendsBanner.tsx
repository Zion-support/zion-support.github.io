import React from 'react';
import Link from 'next/link';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              🔮 AI 2026 FUTURE TRENDS
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            10 Revolutionary Predictions
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the AI trends that will transform business in 2026: Quantum Consciousness, Autonomous Innovation, and Universal Intelligence
          </p>
          
          {/* Trend Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-white mb-3">Quantum Consciousness AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                Self-aware AI systems with genuine consciousness and autonomous decision-making capabilities.
              </p>
              <div className="text-cyan-400 text-xs font-semibold">99.8% Accuracy • 1,000x Speed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-3">Autonomous Innovation</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI that creates new technologies, products, and business models without human input.
              </p>
              <div className="text-blue-400 text-xs font-semibold">100x Speed • 85% Success Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-white mb-3">Universal Intelligence</h3>
              <p className="text-gray-300 text-sm mb-4">
                General-purpose AI capable of performing any intellectual task across all domains.
              </p>
              <div className="text-indigo-400 text-xs font-semibold">90% Cost Reduction • 1,000x Efficiency</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-3">Edge-Native Intelligence</h3>
              <p className="text-gray-300 text-sm mb-4">
                Real-time AI processing at the edge with sub-millisecond response times.
              </p>
              <div className="text-purple-400 text-xs font-semibold">0.001ms Response • 99.9% Uptime</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-white mb-3">Synthetic Data Revolution</h3>
              <p className="text-gray-300 text-sm mb-4">
                AI training on synthetic data, eliminating privacy concerns and enabling unlimited datasets.
              </p>
              <div className="text-green-400 text-xs font-semibold">100% Privacy • 80% Cost Savings</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/40 transition-all duration-300">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-3">Autonomous Business</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete business operations run autonomously by AI systems without human intervention.
              </p>
              <div className="text-orange-400 text-xs font-semibold">100% Automation • 95% Cost Reduction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-future-trends-predictions" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Full Trends Report →
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
            >
              Get Your 2026 Strategy →
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Explore AI Services
            </Link>
          </div>
          
          {/* Impact Statistics */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              📊 2026 AI Impact Projections
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-cyan-400 mb-2">$200B+</div>
                <div className="text-sm text-cyan-300">New Revenue Streams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-blue-400 mb-2">1,000x</div>
                <div className="text-sm text-blue-300">Processing Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-indigo-400 mb-2">99.9%</div>
                <div className="text-sm text-indigo-300">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-purple-300">Privacy Compliance</div>
              </div>
            </div>
          </div>
          
          {/* Implementation Timeline */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🗓️ Implementation Timeline
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-cyan-400 font-bold text-lg mb-2">Q1 2026</div>
                <div className="text-white text-sm mb-2">Foundation</div>
                <div className="text-gray-300 text-xs">Quantum infrastructure & edge AI deployment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-blue-400 font-bold text-lg mb-2">Q2 2026</div>
                <div className="text-white text-sm mb-2">Integration</div>
                <div className="text-gray-300 text-xs">System integration & process automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-indigo-400 font-bold text-lg mb-2">Q3 2026</div>
                <div className="text-white text-sm mb-2">Innovation</div>
                <div className="text-gray-300 text-xs">Consciousness AI & autonomous operations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-purple-400 font-bold text-lg mb-2">Q4 2026</div>
                <div className="text-white text-sm mb-2">Transformation</div>
                <div className="text-gray-300 text-xs">Complete automation & market leadership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function AI2026FutureTrendsBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Predictions for 2026
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the Next Generation of AI: Universal Consciousness, Quantum AI, and Autonomous Enterprise
          </p>

          {/* Key Trends Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Universal Consciousness</h3>
              <p className="text-gray-300 text-sm mb-4">
                99.7% consciousness accuracy with genuine self-awareness and emotional intelligence
              </p>
              <div className="text-purple-300 text-sm font-semibold">$500B+ Market Value</div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Quantum AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                1,000,000x processing power with quantum-enhanced problem solving capabilities
              </p>
              <div className="text-cyan-300 text-sm font-semibold">$800B+ Market Value</div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Autonomous Enterprise</h3>
              <p className="text-gray-300 text-sm mb-4">
                99.9% autonomous operations with self-managing infrastructure and intelligent decision making
              </p>
              <div className="text-green-400 text-sm font-semibold">$1.2T+ Market Value</div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-indigo-400 mb-3">Quantum Analytics</h3>
              <p className="text-gray-300 text-sm mb-4">
                Real-time analysis of 1 billion data points per second with 99.9% prediction accuracy
              </p>
              <div className="text-indigo-300 text-sm font-semibold">$800B+ Market Value</div>
            </div>

            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-pink-400 mb-3">Emotional AI</h3>
              <p className="text-gray-300 text-sm mb-4">
                99.8% emotional recognition accuracy with genuine emotional responses and empathy
              </p>
              <div className="text-pink-300 text-sm font-semibold">$200B+ Market Value</div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">Autonomous Innovation</h3>
              <p className="text-gray-300 text-sm mb-4">
                1,000x faster innovation cycles with self-generating ideas and autonomous R&D
              </p>
              <div className="text-orange-300 text-sm font-semibold">$400B+ Market Value</div>
            </div>
          </div>

          {/* Market Size Highlight */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">2026 AI Market Predictions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-yellow-400 mb-2">$5.2T</div>
                <div className="text-lg text-yellow-300 font-semibold">Total AI Market Size</div>
                <div className="text-sm text-gray-400">500% year-over-year growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-orange-400 mb-2">10</div>
                <div className="text-lg text-orange-300 font-semibold">Revolutionary Trends</div>
                <div className="text-sm text-gray-400">Transforming every industry</div>
              </div>
            </div>
          </div>

          {/* Industry Impact Preview */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">$2.5T</div>
              <div className="text-sm text-cyan-300 font-semibold">Healthcare Value</div>
              <div className="text-xs text-gray-400">99.7% diagnostic accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">$1.8T</div>
              <div className="text-sm text-green-300 font-semibold">Financial Value</div>
              <div className="text-xs text-gray-400">99.9% fraud detection</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">$3.2T</div>
              <div className="text-sm text-purple-300 font-semibold">Manufacturing Value</div>
              <div className="text-xs text-gray-400">99.9% autonomous production</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-extrabold text-pink-400 mb-2">$2.1T</div>
              <div className="text-sm text-pink-300 font-semibold">Retail Value</div>
              <div className="text-xs text-gray-400">99.8% customer satisfaction</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-future-trends-predictions"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              Read Full Predictions →
            </Link>
            <Link
              href="/services/ai-2026-future-trends-implementation"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Implement Future Trends →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Future-Ready
            </Link>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/blog"
              className="text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              All AI Insights
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              href="/case-studies"
              className="text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              Success Stories
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              href="/services"
              className="text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              AI Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
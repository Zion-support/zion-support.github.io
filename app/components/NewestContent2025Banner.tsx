import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-lg">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of
            enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">⚡</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-400/30">
                    Edge AI & Real-Time
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  AI Edge Computing Real-Time Intelligence 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Deploy intelligence at the source with &lt;10ms latency.
                  Achieve 95% bandwidth reduction, 87% cost savings, and
                  enhanced privacy compliance at enterprise scale.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">&lt;10ms</div>
                    <div className="text-sm text-gray-300">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-gray-300">Bandwidth ↓</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">87%</div>
                    <div className="text-sm text-gray-300">Cost ↓</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>⏱️ 35 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/neural-networks-enterprise-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">🧠</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">🚀 TRENDING</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full border border-purple-400/30">
                    Neural Networks
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Advanced Neural Networks for Enterprise 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Master transformer architectures, attention mechanisms, and
                  multi-modal learning for enterprise-scale AI applications.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">99.2%</div>
                    <div className="text-sm text-gray-300">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">10x</div>
                    <div className="text-sm text-gray-300">Speed ↑</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">85%</div>
                    <div className="text-sm text-gray-300">Efficiency ↑</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>⏱️ 42 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/quantum-security-ai-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">🔐</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">🔒 SECURE</span>
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full border border-green-400/30">
                    Quantum Security
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  Quantum Security for AI Systems 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Future-proof your AI infrastructure with quantum-resistant
                  cryptography and advanced threat detection systems.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">256-bit</div>
                    <div className="text-sm text-gray-300">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-300">Protection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">Zero</div>
                    <div className="text-sm text-gray-300">Breaches</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>⏱️ 28 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to cutting-edge AI insights, enterprise strategies,
              and implementation guides delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                View All Articles
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
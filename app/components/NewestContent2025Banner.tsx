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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🧠</span>
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                  AI Research
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                Edge AI: The Next Frontier in Enterprise Computing
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Discover how edge computing is revolutionizing AI deployment in enterprise environments, 
                reducing latency by 90% and enabling real-time decision making.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>📅 Sep 30, 2025</span>
                <span>•</span>
                <span>⏱️ 8 min read</span>
              </div>
              <Link
                href="/blog/edge-ai-enterprise-computing"
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                HOT
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔬</span>
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                  Neural Networks
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                Quantum-Enhanced Neural Networks: A Breakthrough Study
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore the latest research on quantum-enhanced neural networks that promise 
                to solve complex optimization problems 1000x faster than classical methods.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>📅 Sep 30, 2025</span>
                <span>•</span>
                <span>⏱️ 12 min read</span>
              </div>
              <Link
                href="/blog/quantum-neural-networks"
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                TRENDING
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔐</span>
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                  Security
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                Post-Quantum Cryptography: Preparing for the Future
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn how to future-proof your enterprise security with post-quantum cryptographic 
                algorithms that resist quantum computer attacks.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>📅 Sep 30, 2025</span>
                <span>•</span>
                <span>⏱️ 10 min read</span>
              </div>
              <Link
                href="/blog/post-quantum-cryptography"
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to cutting-edge AI research, implementation guides, 
              and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
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
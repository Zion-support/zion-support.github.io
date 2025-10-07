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

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Article 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold text-sm">LIVE NOW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Edge Computing Revolution: 2025 Implementation Guide
            </h3>
            <p className="text-gray-300 mb-6">
              Discover how edge computing is transforming enterprise infrastructure
              and learn practical implementation strategies.
            </p>
            <Link
              href="/guides/edge-computing-2025"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Article
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Article 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-400 font-semibold text-sm">HOT</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Neural Networks in Production: Real-World Case Studies
            </h3>
            <p className="text-gray-300 mb-6">
              Explore successful neural network implementations across different
              industries and their measurable business impact.
            </p>
            <Link
              href="/guides/neural-networks-production"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Read Article
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Article 3 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-semibold text-sm">BREAKING</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Quantum Security: The Next Frontier in Data Protection
            </h3>
            <p className="text-gray-300 mb-6">
              Learn about quantum-resistant encryption and how to prepare your
              systems for the quantum computing era.
            </p>
            <Link
              href="/guides/quantum-security-2025"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Read Article
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-blue-100 mb-6">
              Get exclusive access to our latest research and implementation guides
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
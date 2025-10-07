import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
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
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                EDGE COMPUTING
              </span>
              <span className="text-yellow-400 text-sm">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              The Edge Computing Revolution: How AI is Moving to the Edge
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Discover how edge computing is transforming AI deployment, reducing latency, and enabling real-time decision-making in enterprise environments.
            </p>
            <Link
              href="/blog/edge-computing-ai-revolution"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
            >
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Article 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEURAL NETWORKS
              </span>
              <span className="text-yellow-400 text-sm">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              Advanced Neural Network Architectures for Enterprise AI
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Explore cutting-edge neural network designs that are revolutionizing how businesses implement AI solutions at scale.
            </p>
            <Link
              href="/blog/neural-networks-enterprise-ai"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
            >
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Article 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                QUANTUM SECURITY
              </span>
              <span className="text-yellow-400 text-sm">NEW</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
              Quantum-Safe Security for AI Systems: The Next Frontier
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Learn about quantum-resistant security measures that will protect your AI infrastructure from future quantum computing threats.
            </p>
            <Link
              href="/blog/quantum-safe-ai-security"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
            >
              Read Full Article
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest research, implementation guides, and industry insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Custom AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
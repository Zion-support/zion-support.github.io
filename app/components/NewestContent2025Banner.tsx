import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full">
                    AI & Edge Computing
                  </span>
                  <span className="text-gray-400 text-sm">15 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  AI Edge Computing: Real-Time Processing Revolution 2025
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Discover how edge computing is revolutionizing AI deployment, enabling real-time processing with 99.9% uptime and 10x faster response times.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-blue-300">
                    <span className="text-sm font-semibold">Read More</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <div className="text-yellow-400 text-sm font-semibold">
                    NEW
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/neural-networks-enterprise-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-semibold rounded-full">
                    Neural Networks
                  </span>
                  <span className="text-gray-400 text-sm">12 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Advanced Neural Networks for Enterprise Applications
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Explore cutting-edge neural network architectures that are transforming enterprise applications with unprecedented accuracy and efficiency.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-purple-300">
                    <span className="text-sm font-semibold">Read More</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <div className="text-yellow-400 text-sm font-semibold">
                    HOT
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/quantum-security-enterprise-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm font-semibold rounded-full">
                    Quantum Security
                  </span>
                  <span className="text-gray-400 text-sm">18 min read</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  Quantum Security: The Future of Enterprise Protection
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Learn how quantum cryptography is revolutionizing enterprise security, providing unbreakable encryption for the digital age.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-sm font-semibold">Read More</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <div className="text-yellow-400 text-sm font-semibold">
                    TRENDING
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to our latest insights, case studies, and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
              </Link>
              <Link
                href="/newsletter"
                className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
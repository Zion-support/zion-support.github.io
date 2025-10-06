'use client';

import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full mb-6">
            <span>🚀</span>
            <span>Latest AI Innovations</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI technology, enterprise solutions, and quantum computing that are reshaping industries worldwide.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">⚡</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Edge Computing
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  AI Edge Computing Real-Time Intelligence 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary edge AI systems delivering sub-10ms latency for real-time decision making in enterprise environments.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">&lt;10ms</div>
                    <div className="text-gray-400 text-sm">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">95%</div>
                    <div className="text-gray-400 text-sm">Bandwidth ↓</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">99.9%</div>
                    <div className="text-gray-400 text-sm">Uptime</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>📅 Sep 30, 2025</span>
                  <span>⏱️ 8 min read</span>
                  <span>👁️ 2.3k views</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-10 rounded-bl-full"></div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/ai-neural-networks-enterprise-transformation-2025" className="group">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🧠</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-xs font-bold rounded-full">BREAKTHROUGH</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-fuchsia-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Neural Networks
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  AI Neural Networks Enterprise Transformation 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced neural architectures revolutionizing enterprise operations with unprecedented accuracy and efficiency.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">98.5%</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">300%</div>
                    <div className="text-gray-400 text-sm">Efficiency ↑</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-400 text-sm">Operation</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>📅 Sep 30, 2025</span>
                  <span>⏱️ 12 min read</span>
                  <span>👁️ 1.8k views</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-10 rounded-bl-full"></div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/ai-quantum-security-protocols-2026" className="group">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">🔒</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">SECURITY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Quantum Security
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  AI Quantum Security Protocols 2026
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Next-generation quantum-resistant security protocols protecting enterprise data against emerging cyber threats.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">99.99%</div>
                    <div className="text-gray-400 text-sm">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Zero</div>
                    <div className="text-gray-400 text-sm">Breaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">256-bit</div>
                    <div className="text-gray-400 text-sm">Encryption</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>📅 Sep 30, 2025</span>
                  <span>⏱️ 15 min read</span>
                  <span>👁️ 3.1k views</span>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-red-400 font-semibold group-hover:text-red-300 transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500 to-orange-600 opacity-10 rounded-bl-full"></div>
            </div>
          </Link>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to implement these breakthrough technologies in your organization? 
            Our AI experts are standing by to help you achieve unprecedented results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="text-xl">📞</span>
              <span>Call Now: (302) 464-0950</span>
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="group flex items-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="text-xl">📧</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            Stay updated with the latest AI innovations and enterprise solutions
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>🔔 Real-time notifications</span>
            <span>📊 Industry insights</span>
            <span>🚀 Early access to new features</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
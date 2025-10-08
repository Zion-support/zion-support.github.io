import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const NewestContent2025Banner = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'Edge Computing Revolution',
      description: 'Discover how edge computing is transforming enterprise AI deployment',
      slug: 'edge-computing-revolution',
      icon: '💻',
    },
    {
      id: 2,
      title: 'Neural Networks Breakthrough',
      description: 'Latest advances in neural network architectures and applications',
      slug: 'neural-networks-breakthrough',
      icon: '🧠',
    },
    {
      id: 3,
      title: 'Quantum Security',
      description: 'Next-generation security powered by quantum computing',
      slug: 'quantum-security',
      icon: '🔐',
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden py-20">
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-bold text-xl">
            <span className="text-yellow-400 font-bold text-xl">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of
            enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">⚡</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Bookmark */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
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
                <div className="flex items-center justify-center gap-2 text-cyan-400 font-semibold group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/ai-neural-networks-enterprise-transformation-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">🧠</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Neural Networks & AI
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  AI Neural Networks Enterprise Transformation 2025
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Deploy advanced neural network architectures. Fortune 500 implementations achieving 98.5% accuracy, 
                  10x ROI, and 85% operational efficiency gains.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">98.5%</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">10x</div>
                    <div className="text-gray-400 text-sm">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">85%</div>
                    <div className="text-gray-400 text-sm">Efficiency</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                  <span>⏱️ 40 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/ai-quantum-security-protocols-2026" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">⚛️</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">🚨 CRITICAL</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-50 to-orange-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Quantum Security
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  AI Quantum Security Protocols 2026
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Protect AI systems with quantum-resistant cryptography. Achieve 99.99% security against classical 
                  and quantum attacks with sub-millisecond overhead.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">99.99%</div>
                    <div className="text-gray-400 text-sm">Security</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">&lt;1ms</div>
                    <div className="text-gray-400 text-sm">Overhead</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">Zero</div>
                    <div className="text-gray-400 text-sm">Breaches</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                  <span>⏱️ 45 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-red-400 font-semibold group-hover:text-white transition-colors">
                  <span>Read Full Article</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Transform Your Enterprise with Cutting-Edge AI
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
            from Zion Tech Group's AI transformation specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13024640950"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="text-6xl mb-4">{article.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400 mb-6">{article.description}</p>
              <div className="flex items-center text-cyan-400 font-semibold">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;

import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-2xl font-bold text-white">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500" />
            <div className="relative p-8">
              {/* Icon & Badges */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚡</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span>🔥</span>
                    <span>HOT</span>
                  </div>
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW TODAY
                  </span>
                </div>
              </div>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Edge AI & Real-Time
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                AI Edge Computing Real-Time Intelligence 2025
              </h3>

              {/* Excerpt */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy intelligence at the source with &lt;10ms latency. Achieve 95% bandwidth reduction, 87% cost savings, and enhanced privacy compliance at enterprise scale.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">&lt;10ms</div>
                  <div className="text-sm text-gray-400">Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-sm text-gray-400">Bandwidth ↓</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">87%</div>
                  <div className="text-sm text-gray-400">Cost ↓</div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>⏱️ 35 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/ai-neural-networks-enterprise-transformation-2025" className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-0 group-hover:opacity-10 transition-all duration-500" />
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🧠</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span>🔥</span>
                    <span>HOT</span>
                  </div>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW TODAY
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-fuchsia-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Neural Networks & AI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                AI Neural Networks Enterprise Transformation 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy advanced neural network architectures. Fortune 500 implementations achieving 98.5% accuracy, 10x ROI, and 85% operational efficiency gains.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">98.5%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">10x</div>
                  <div className="text-sm text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">85%</div>
                  <div className="text-sm text-gray-400">Efficiency</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>⏱️ 40 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/ai-quantum-security-protocols-2026" className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-all duration-500" />
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚛️</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <span>🚨</span>
                    <span>CRITICAL</span>
                  </div>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    NEW TODAY
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Quantum Security
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                AI Quantum Security Protocols 2026
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Protect AI systems with quantum-resistant cryptography. Achieve 99.99% security against classical and quantum attacks with sub-millisecond overhead.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">99.99%</div>
                  <div className="text-sm text-gray-400">Security</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">&lt;1ms</div>
                  <div className="text-sm text-gray-400">Overhead</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">Zero</div>
                  <div className="text-sm text-gray-400">Breaches</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>⏱️ 45 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-red-400 font-semibold group-hover:text-white transition-colors duration-300">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transform Your Enterprise with Cutting-Edge AI
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance from Zion Tech Group's AI transformation specialists.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+13024640950" className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <span className="text-xl">📞</span>
                <span>Call +1 302 464 0950</span>
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="group flex items-center gap-3 border-2 border-white/20 hover:border-cyan-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/5">
                <span className="text-xl">📧</span>
                <span>Get Expert Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
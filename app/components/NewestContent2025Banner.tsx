import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-8">
            <span className="text-blue-300 text-sm font-medium">✨ New Content Available</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Breakthroughs 2025
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest innovations in artificial intelligence, quantum computing, 
            and autonomous systems that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚡</div>
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full">
                  🔥 HOT
                </span>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                  Edge AI & Real-Time
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                AI Edge Computing Real-Time Intelligence 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy intelligence at the source with &lt;10ms latency. Achieve 95% bandwidth reduction, 
                87% cost savings, and enhanced privacy compliance at enterprise scale.
              </p>

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

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 35 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              <Link 
                href="/blog/ai-edge-computing-real-time-intelligence-2025"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
              >
                Read Full Article
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-fuchsia-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🧠</div>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white text-xs font-bold rounded-full">
                  BREAKTHROUGH
                </span>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white text-xs font-semibold rounded-full">
                  Neural Networks
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Quantum-Enhanced Neural Networks 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Revolutionary quantum-classical hybrid neural networks delivering 1000x faster training, 
                unprecedented accuracy, and breakthrough capabilities in enterprise AI applications.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1000x</div>
                  <div className="text-sm text-gray-300">Faster</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50%</div>
                  <div className="text-sm text-gray-300">Energy ↓</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 28 min read</span>
                <span>�� Sep 30, 2025</span>
              </div>

              <Link 
                href="/blog/quantum-enhanced-neural-networks-2025"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-fuchsia-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
              >
                Explore Breakthrough
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🔒</div>
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-full">
                  SECURITY
                </span>
              </div>

              <div className="mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-semibold rounded-full">
                  Quantum Security
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Quantum-Secure AI Infrastructure 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Next-generation quantum-resistant security protocols protecting AI systems against 
                future quantum attacks with military-grade encryption and zero-trust architecture.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">256-bit</div>
                  <div className="text-sm text-gray-300">Quantum Safe</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.99%</div>
                  <div className="text-sm text-gray-300">Protection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">Zero</div>
                  <div className="text-sm text-gray-300">Trust</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 42 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              <Link 
                href="/blog/quantum-secure-ai-infrastructure-2025"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25"
              >
                Secure Your AI
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging these breakthrough 
              AI technologies to achieve unprecedented competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/ai-services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Explore AI Services
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;

import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-20">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚡</div>
                <div className="flex gap-2">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
                    Edge AI & Real-Time
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                AI Edge Computing Real-Time Intelligence 2025
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy intelligence at the source with &lt;10ms latency. Achieve 95% bandwidth reduction, 
                87% cost savings, and enhanced privacy compliance at enterprise scale.
              </p>

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
                  <div className="text-2xl font-bold text-purple-400">87%</div>
                  <div className="text-gray-400 text-sm">Cost ↓</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 35 min read</span>
                <span>📅 Sep 30, 2025</span>
              </div>

              <Link
                href="/blog/ai-edge-computing-real-time-intelligence-2025"
                className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
              >
                Read Full Article →
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🌱</div>
                <div className="flex gap-2">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 text-emerald-200 text-sm font-bold border border-emerald-400/50">
                    Sustainability
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                Green AI: Sustainable Computing Solutions
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Reduce carbon footprint by 60% while maintaining peak performance. 
                Enterprise-grade AI solutions designed for environmental responsibility.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">60%</div>
                  <div className="text-gray-400 text-sm">Carbon ↓</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">45%</div>
                  <div className="text-gray-400 text-sm">Energy ↓</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100%</div>
                  <div className="text-gray-400 text-sm">Performance</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 28 min read</span>
                <span>📅 Sep 25, 2025</span>
              </div>

              <Link
                href="/blog/green-ai-sustainable-computing-solutions"
                className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold hover:from-emerald-500 hover:to-green-500 transition-all duration-300"
              >
                Read Full Article →
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🔐</div>
                <div className="flex gap-2">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/30 to-purple-500/30 text-violet-200 text-sm font-bold border border-violet-400/50">
                    Security & Privacy
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                Zero-Trust AI Security Framework 2025
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Enterprise-grade security with military-level encryption. 
                Achieve 99.99% threat detection while maintaining user privacy and compliance.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">99.99%</div>
                  <div className="text-gray-400 text-sm">Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">256-bit</div>
                  <div className="text-gray-400 text-sm">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400">100%</div>
                  <div className="text-gray-400 text-sm">Compliant</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 42 min read</span>
                <span>📅 Sep 20, 2025</span>
              </div>

              <Link
                href="/blog/zero-trust-ai-security-framework-2025"
                className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Articles
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
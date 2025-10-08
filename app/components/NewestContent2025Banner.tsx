import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-march-autonomous-enterprise-operations-revolution"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Latest Content
              <span className="ml-2">→</span>
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 rounded-lg hover:bg-blue-400/10 transition-all duration-300"
            >
              View All Articles
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Article 1 */}
          <Link href="/blog/ai-2025-march-autonomous-enterprise-operations-revolution" className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚡</div>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
                  Edge AI
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                AI Edge Computing Real-Time Intelligence
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Deploy intelligence at the source with low latency. Achieve bandwidth reduction, 
                cost savings, and enhanced privacy compliance at enterprise scale.
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 35 min read</span>
                <span>📅 Mar 2025</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article 2 */}
          <Link href="/blog/ai-2026-adaptive-neural-architectures-breakthrough" className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🧠</div>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-sm font-bold border border-purple-400/50">
                  Neural AI
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                Adaptive Neural Architectures
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Self-evolving networks that adapt in real-time with improved accuracy, 
                faster training, and autonomous optimization capabilities.
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 28 min read</span>
                <span>📅 Apr 2026</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>

          {/* Article 3 */}
          <Link href="/blog/ai-2026-consensus-intelligence-breakthrough" className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🌐</div>
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 text-sm font-bold border border-green-400/50">
                  Distributed
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                Consensus Intelligence Breakthrough
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Multi-agent AI systems that reach consensus autonomously with 
                high reliability, distributed decision-making, and enterprise resilience.
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>⏱️ 32 min read</span>
                <span>📅 Feb 2026</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

NewestContent2025Banner.displayName = 'NewestContent2025Banner';

export default NewestContent2025Banner;
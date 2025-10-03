import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600/20 to-blue-600/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-400 text-2xl">🚀</span>
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-yellow-400 text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    ⚡
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-xs font-semibold text-white">
                      <span className="text-red-400">🔥</span>
                      <span>HOT</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  AI Edge Computing Revolution 2025
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Real-time AI processing at the edge delivering 99.9% uptime and 10x faster response times for enterprise applications.
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Edge Computing</span>
                  <span className="text-blue-400 group-hover:text-blue-300">Read More →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/neural-networks-breakthrough-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    🧠
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white">
                      <span className="text-purple-400">⚡</span>
                      <span>BREAKTHROUGH</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Next-Gen Neural Networks 2025
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Revolutionary neural architectures achieving 95% accuracy improvements and 50% faster training for enterprise AI models.
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Neural Networks</span>
                  <span className="text-purple-400 group-hover:text-purple-300">Read More →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/quantum-security-enterprise-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">
                    🔐
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-xs font-semibold text-white">
                      <span className="text-green-400">🛡️</span>
                      <span>SECURE</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  Quantum Security for Enterprise 2025
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Unbreakable quantum encryption protecting enterprise data with 100% security guarantee and zero vulnerability exposure.
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Quantum Security</span>
                  <span className="text-green-400 group-hover:text-green-300">Read More →</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest AI insights, implementation guides, and expert consultations. 
              Join thousands of forward-thinking companies transforming their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
              <Link 
                href="/blog"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
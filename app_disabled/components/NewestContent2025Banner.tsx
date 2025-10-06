import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">⚡</div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">🔥 HOT</span>
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">NEW TODAY</span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-900 text-sm font-semibold rounded-full border border-white/20">
                    Edge AI & Real-Time
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  AI Edge Computing Real-Time Intelligence 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Deploy intelligence at the source with &lt;10ms latency. Achieve 95% bandwidth reduction, 
                  87% cost savings, and enhanced privacy compliance at enterprise scale.
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
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
=======
>>>>>>> 97e2d060e1d7 (Fix merge conflicts and resolve errors in codebase)
                  <span>⏱️ 35 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                {/* CTA Button */}
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
                    Neural Networks & AI
                  </span>
                </div>

                  <span>⏱️ 40 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
                    Quantum Security
                  </span>
                </div>

                  <span>⏱️ 45 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Call-to-Action Section */}
              <span>Get Expert Consultation</span>
            </a>
          </div>
        </div>

        {/* Stats Section */}
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;
import ArrowRight from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 mb-8 animate-bounce shadow-2xl">
            <span className="text-3xl">🚀</span>
            <span className="font-black text-xl tracking-wider uppercase">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-3xl">⚡</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-2xl md:text-3xl text-cyan-100 max-w-4xl mx-auto leading-relaxed font-semibold">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Article 1: AI Edge Computing */}
          <ArrowRight href="/blog/ai-edge-computing-real-time-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20 hover:border-cyan-400 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    ⚡
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                      <span className="text-lg">🔥</span>
                      <span>HOT</span>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-cyan-500/30 text-cyan-200 text-xs font-bold border border-cyan-400/50">
                      NEW TODAY
                    </span>
                  </div>
                </div>

                {/* Category Bookmark */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-200 text-sm font-bold border border-cyan-400/50">
                    Edge AI & Real-Time
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                  AI Edge Computing Real-Time Intelligence 2025
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Deploy intelligence at the source with &lt;10ms latency. Achieve 95% bandwidth reduction, 
                  87% cost savings, and enhanced privacy compliance at enterprise scale.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-cyan-300">&lt;10ms</div>
                    <div className="text-xs text-gray-400">Latency</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-300">95%</div>
                    <div className="text-xs text-gray-400">Bandwidth ↓</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-300">87%</div>
                    <div className="text-xs text-gray-400">Cost ↓</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6 border-b border-white/20">
                  <span>⏱️ 35 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                {/* CTA Button */}
                <div className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1">
                  <span>Read Full Article</span>
                  <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </ArrowRight>

          {/* Article 2: Neural Networks */}
          <ArrowRight href="/blog/ai-neural-networks-enterprise-transformation-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20 hover:border-purple-400 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    🧠
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                      <span className="text-lg">🔥</span>
                      <span>HOT</span>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-purple-500/30 text-purple-200 text-xs font-bold border border-purple-400/50">
                      NEW TODAY
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 text-sm font-bold border border-purple-400/50">
                    Neural Networks & AI
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                  AI Neural Networks Enterprise Transformation 2025
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Deploy advanced neural network architectures. Fortune 500 implementations achieving 98.5% accuracy, 
                  10x ROI, and 85% operational efficiency gains.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-300">98.5%</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-pink-300">10x</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-300">85%</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6 border-b border-white/20">
                  <span>⏱️ 40 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                <div className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1">
                  <span>Read Full Article</span>
                  <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </ArrowRight>

          {/* Article 3: Quantum Security */}
          <ArrowRight href="/blog/ai-quantum-security-protocols-2026" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border-2 border-white/20 hover:border-indigo-400 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 border-4 border-yellow-400/50">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-500"></div>
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                    ⚛️
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold shadow-lg animate-pulse">
                      <span className="text-lg">🚨</span>
                      <span>CRITICAL</span>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-bold border border-indigo-400/50">
                      NEW TODAY
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-200 text-sm font-bold border border-indigo-400/50">
                    Quantum Security
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300 leading-tight">
                  AI Quantum Security Protocols 2026
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Protect AI systems with quantum-resistant cryptography. Achieve 99.99% security against classical 
                  and quantum attacks with sub-millisecond overhead.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-indigo-300">99.99%</div>
                    <div className="text-xs text-gray-400">Security</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-purple-300">&lt;1ms</div>
                    <div className="text-xs text-gray-400">Overhead</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-300">Zero</div>
                    <div className="text-xs text-gray-400">Breaches</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6 pb-6 border-b border-white/20">
                  <span>⏱️ 45 min read</span>
                  <span>📅 Sep 30, 2025</span>
                </div>

                <div className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1">
                  <span>Read Full Article</span>
                  <span className="text-xl group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </ArrowRight>

        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 shadow-2xl">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Transform Your Enterprise with Cutting-Edge AI
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Join 50,000+ AI leaders implementing these breakthrough technologies. Get expert guidance 
                from Zion Tech Group's AI transformation specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">📞</span>
                  <span>Call +1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">📧</span>
                  <span>Get Expert Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm font-medium">
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
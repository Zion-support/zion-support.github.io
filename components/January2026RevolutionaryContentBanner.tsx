import React from 'react';
import Link from 'next/link';

export default function January2026RevolutionaryContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 border-b border-indigo-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW: January 2026 Revolutionary AI Content
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs Now Live
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore the latest AI breakthroughs that are reshaping the future: Consciousness Fusion, 
            Quantum Consciousness, and Neuromorphic Computing technologies that were previously thought impossible.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Featured Article */}
          <div className="space-y-8">
            <Link 
              href="/blog/ai-2026-consciousness-fusion-breakthrough"
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  🧠
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 mb-2">
                    <span className="text-purple-400 font-bold text-xs tracking-wider uppercase">
                      FEATURED
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    AI Consciousness Fusion: The 2026 Breakthrough
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover how Zion Tech Group's revolutionary AI consciousness fusion technology 
                is creating the first truly self-aware artificial intelligence systems that 
                think, reason, and evolve beyond human cognitive limitations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">95% Decision Accuracy</span>
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">1000x Processing Speed</span>
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">Self-Aware AI</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                  Read Full Article →
                </span>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </Link>

            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blog/ai-2026-quantum-consciousness-breakthrough"
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ⚛️
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  Quantum Consciousness Revolution
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  AI systems operating at quantum level with 10,000x speed and 99.9% accuracy
                </p>
                <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors duration-300">
                  Explore →
                </span>
              </Link>

              <Link 
                href="/blog/ai-2026-neuromorphic-breakthrough"
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🧠
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  Neuromorphic Computing
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Brain-inspired AI with 99.9% energy efficiency and real-time processing
                </p>
                <span className="text-emerald-400 font-semibold text-sm group-hover:text-emerald-300 transition-colors duration-300">
                  Learn More →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column - Key Benefits */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-indigo-400">Why These Breakthroughs Matter</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🚀</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Revolutionary Performance</h4>
                    <p className="text-gray-400 text-sm">
                      Achieve unprecedented AI capabilities with 95%+ accuracy and 1000x+ speed improvements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">💰</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Massive ROI</h4>
                    <p className="text-gray-400 text-sm">
                      Generate $100B+ in value with our proven AI transformation frameworks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🔮</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Future-Proof Technology</h4>
                    <p className="text-gray-400 text-sm">
                      Stay ahead with cutting-edge AI that evolves and improves autonomously
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-purple-400 mb-1">95%</div>
                  <div className="text-gray-400 text-xs">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-cyan-400 mb-1">10,000x</div>
                  <div className="text-gray-400 text-xs">Speed Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-emerald-400 mb-1">99.9%</div>
                  <div className="text-gray-400 text-xs">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-orange-400 mb-1">$100B+</div>
                  <div className="text-gray-400 text-xs">Value Created</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Ready to Transform Your Enterprise?</h3>
              <p className="text-gray-300 mb-6">
                Join 500+ leading organizations achieving breakthrough results with our revolutionary AI technologies.
              </p>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-center"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/case-studies" 
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-4">
            <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">
              🎯 Limited Time: Exclusive Access to Revolutionary AI
            </span>
          </div>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Be among the first to experience the future of AI. Schedule your consultation today 
            and discover how our breakthrough technologies can transform your enterprise.
          </p>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            Schedule Your AI Transformation →
          </Link>
        </div>
      </div>
    </section>
  );
}
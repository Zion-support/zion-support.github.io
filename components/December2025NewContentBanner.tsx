import React from 'react';

export default function December2025NewContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 NEW DECEMBER 2025 CONTENT NOW LIVE!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Revolutionary AI Technologies & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the latest breakthroughs in Edge Intelligence, Autonomous Cloud Operations, 
            and Intelligent Automation Platforms that are transforming enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Edge Intelligence Revolution */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Edge Intelligence Revolution</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Real-time decision making at scale with sub-millisecond response times, 
                99.9% uptime, and autonomous intelligence at the network edge.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ Sub-millisecond response</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 99.9% uptime</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ Autonomous operations</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-december-edge-intelligence-revolution"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Read Article →
              </a>
            </div>
          </div>

          {/* Autonomous Cloud Operations */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Autonomous Cloud Operations</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Self-managing infrastructure with 99.99% uptime, intelligent resource optimization, 
                and predictive scaling for enterprise cloud environments.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 99.99% uptime</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 40% cost reduction</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ Self-healing systems</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-december-autonomous-cloud-operations"
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Now →
              </a>
            </div>
          </div>

          {/* Intelligent Automation Platform */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Automation Platform</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Next-generation business process automation with 95% automation rates, 
                cognitive decision-making, and end-to-end process orchestration.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 95% automation rate</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 99.8% accuracy</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-green-400 text-sm">✓ 80% cost reduction</span>
                </div>
              </div>
              <a 
                href="/blog/ai-2025-december-intelligent-automation-platform"
                className="inline-block bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Operations with AI?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover how our cutting-edge AI solutions can revolutionize your business processes, 
              reduce costs, and drive unprecedented efficiency across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                View Our Services
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
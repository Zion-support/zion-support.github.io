import React from 'react';

const October2025QuantumEdgeHighlightBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950 border-b border-indigo-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/40 mb-4">
              <span className="text-xl">⚛️</span>
              <span className="text-indigo-300 font-bold text-sm tracking-wide uppercase">
                Just Published: Quantum Edge Intelligence
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Transform Decision-Making with Sub-Microsecond Quantum Computing
            </h3>
          </div>

          {/* Three-Column Content Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Article */}
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">📖</div>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">Technical Deep Dive</span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                    Quantum Edge Intelligence Revolution
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Comprehensive guide to deploying quantum computing at the edge for 10,000x performance improvements.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Sub-microsecond</span>
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Quantum ML</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Distributed</span>
              </div>
              <a
                href="/blog/ai-2025-october-quantum-edge-intelligence-revolution"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group-hover:gap-3"
              >
                Read Article <span>→</span>
              </a>
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20 hover:border-indigo-400/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💰</div>
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">Fortune 50 Success</span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                    $87 Billion Value Protected
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Global financial leader achieves 99.997% fraud detection accuracy with quantum edge deployment across 50,000 locations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">$87B Impact</span>
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">34x ROI</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">500ns Latency</span>
              </div>
              <a
                href="/case-studies/ai-2025-oct-global-finance-quantum-edge-transformation-87-billion-success"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors group-hover:gap-3"
              >
                View Case Study <span>→</span>
              </a>
            </div>

            {/* Service Offering */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-lg rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">Consulting Services</span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                    Quantum Edge Consulting
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Expert consulting to deploy quantum edge intelligence—from readiness assessment to production deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Assessment</span>
                <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">Architecture</span>
                <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded">Deployment</span>
              </div>
              <a
                href="/services/quantum-edge-intelligence-consulting"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors group-hover:gap-3"
              >
                Explore Services <span>→</span>
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-3">
              Join Fortune 50 leaders harnessing quantum edge intelligence for unprecedented competitive advantage
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 text-sm"
            >
              Schedule Quantum Consultation
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025QuantumEdgeHighlightBanner;

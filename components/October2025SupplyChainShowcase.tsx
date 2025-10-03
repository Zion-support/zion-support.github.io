// import React from 'react';

const October2025SupplyChainShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
              <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm">
                🌟 Featured Content Showcase
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Complete Supply Chain Resilience Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your supply chain: technical guides, proven success stories, 
              and implementation services—all published October 1, 2025.
            </p>
          </div>

          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Technical Guide Card */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">📘</div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Technical Guide
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI-Powered Supply Chain Resilience Breakthrough
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Comprehensive 12-minute guide covering intelligent prediction engines, autonomous response 
                orchestration, and multi-tier visibility platforms. Includes implementation roadmap, 
                technology architecture, and best practices.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-gray-300">99.2% forecast accuracy framework</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-gray-300">3-phase implementation plan</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-gray-300">Industry-specific applications</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-gray-300">ROI calculation methodology</span>
                </div>
              </div>
              <a
                href="/blog/ai-2025-oct-supply-chain-resilience-breakthrough"
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
              >
                Read Full Guide →
              </a>
            </div>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 backdrop-blur-lg rounded-2xl p-8 border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">💼</div>
                <span className="bg-teal-500/20 text-teal-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Success Story
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Fortune 500: $340M Annual Savings Achievement
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                In-depth case study of a $47B manufacturing leader achieving 94% supply chain visibility, 
                78% faster disruption response, and $340M annual savings. Complete 12-month implementation 
                journey with challenges, solutions, and results.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-400">💰</span>
                  <span className="text-gray-300">$340M annual cost savings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-400">📊</span>
                  <span className="text-gray-300">847% first-year ROI</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-400">🎯</span>
                  <span className="text-gray-300">94% supply chain visibility</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-teal-400">⚡</span>
                  <span className="text-gray-300">4.2-month payback period</span>
                </div>
              </div>
              <a
                href="/case-studies/ai-2025-oct-fortune-500-supply-chain-resilience-340m-success"
                className="block w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
              >
                View Case Study →
              </a>
            </div>

            {/* Platform Services Card */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl">🚀</div>
                <span className="bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Platform Service
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Resilience Platform Implementation
              </h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Complete platform solution with intelligent prediction engine, autonomous response orchestration, 
                and multi-tier visibility. Includes 12-month transformation program, success guarantee, and 
                24/7 support. Trusted by 73 Fortune 500 companies.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">🎯</span>
                  <span className="text-gray-300">Minimum 5x ROI guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">⚡</span>
                  <span className="text-gray-300">Quick wins in 90 days</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">🛡️</span>
                  <span className="text-gray-300">Performance guarantees included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">🌐</span>
                  <span className="text-gray-300">Free assessment available</span>
                </div>
              </div>
              <a
                href="/services/ai-supply-chain-resilience-platform"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center shadow-lg"
              >
                Explore Platform →
              </a>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Supply Chain?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join 73 Fortune 500 companies achieving breakthrough results with AI-powered supply chain resilience. 
                Schedule your complimentary assessment today—no obligation, just valuable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
                >
                  Schedule Free Assessment →
                </a>
                <a
                  href="/demo/supply-chain-resilience-platform"
                  className="inline-block border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  Watch Platform Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default October2025SupplyChainShowcase;

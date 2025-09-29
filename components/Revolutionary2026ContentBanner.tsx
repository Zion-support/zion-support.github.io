import React from 'react';
import Link from 'next/link';

export function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Future of AI Enterprise is Here
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover how Fortune 500 companies are achieving $25M+ ROI with autonomous AI systems that self-manage, self-optimize, and self-heal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Autonomous Enterprise 2026</h3>
                <p className="text-sm opacity-80">Complete Implementation Guide</p>
              </div>
            </div>
            <p className="text-gray-100 mb-6">
              Master autonomous AI enterprise operations with zero-touch business management, predictive analytics, and self-optimizing systems that deliver 99% automation and $25M+ ROI.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99%</div>
                  <div className="text-xs opacity-80">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$25M+</div>
                  <div className="text-xs opacity-80">ROI</div>
                </div>
              </div>
              <Link
                href="/blog/ai-autonomous-enterprise-transformation-2026"
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Guide →
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">$25M Success Story</h3>
                <p className="text-sm opacity-80">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-100 mb-6">
              See how a Fortune 500 manufacturing company achieved $25M ROI with comprehensive AI autonomous enterprise transformation. 99.9% uptime, 90% cost reduction.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-xs opacity-80">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">90%</div>
                  <div className="text-xs opacity-80">Cost Cut</div>
                </div>
              </div>
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-semibold text-purple-300">Quantum AI</span>
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                AI Quantum Computing 2026
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                Harness quantum computing for AI breakthroughs with 1000x faster optimization.
              </p>
              <div className="flex items-center text-sm text-purple-300 font-semibold group-hover:text-yellow-300 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌱</span>
                <span className="text-sm font-semibold text-green-300">Sustainability</span>
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                AI Sustainability & Green Tech
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings.
              </p>
              <div className="flex items-center text-sm text-green-300 font-semibold group-hover:text-yellow-300 transition-colors">
                Read More →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-edge-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌐</span>
                <span className="text-sm font-semibold text-blue-300">Edge AI</span>
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                Edge AI Blueprint 2026
              </h4>
              <p className="text-sm text-gray-200 mb-3">
                Master edge AI deployment with sub-50ms latency and distributed intelligence.
              </p>
              <div className="flex items-center text-sm text-blue-300 font-semibold group-hover:text-yellow-300 transition-colors">
                Read More →
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join the autonomous enterprise revolution. Get expert guidance on implementing AI transformation that delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Revolutionary2026ContentBanner;
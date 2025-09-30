import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
              🚀 Revolutionary Content
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
              January 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough AI technologies and strategies that are transforming enterprises worldwide. 
            Get exclusive insights, implementation guides, and success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Breakthrough
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI 2026 Revolutionary Breakthrough
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Implementation Guide
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Enterprise Transformation 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Complete implementation guide with proven strategies and ROI frameworks.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-transformation-success-story-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                300% ROI Success Story
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                See how a Fortune 500 company achieved 300% ROI in just 8 months.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
            <div className="flex items-center justify-center gap-8 mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">300%</div>
                <div className="text-white/80 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">90%</div>
                <div className="text-white/80 text-sm">Efficiency Gains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">$12M+</div>
                <div className="text-white/80 text-sm">Annual Savings</div>
              </div>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Join thousands of enterprises transforming with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-enterprise-transformation"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Transformation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
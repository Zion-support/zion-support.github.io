import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">LATEST 2026 INNOVATIONS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Revolutionary AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Now Available
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Discover the latest AI innovations, enterprise transformations, and optimization strategies 
              that are reshaping industries in 2026. Get exclusive insights from real-world implementations.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Autonomous AI Systems achieving 90% efficiency gains</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Cost optimization strategies delivering 70% savings</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-300">Fortune 500 transformations with $12M+ annual savings</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Read Latest Articles
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Content Cards */}
          <div className="space-y-6">
            {/* Featured Article 1 */}
            <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-semibold">
                        NEW ARTICLE
                      </span>
                      <span className="text-xs text-gray-400">15 min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                      AI 2026: Enterprise Autonomous Systems Revolution
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      How self-managing AI systems are achieving 90% operational efficiency gains...
                    </p>
                    <div className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Article 2 */}
            <Link href="/blog/ai-cost-optimization-2026-strategies" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                      <span className="text-xs text-gray-400">12 min read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-300 transition-colors">
                      AI Cost Optimization 2026: 70% Savings Strategies
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      Master proven strategies that deliver 70% cost reduction and 300% ROI...
                    </p>
                    <div className="text-green-400 font-semibold text-sm group-hover:text-green-300">
                      Read Full Article →
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/fortune-500-ai-transformation-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-semibold">
                        CASE STUDY
                      </span>
                      <span className="text-xs text-gray-400">Fortune 500</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">
                      Fortune 500 AI Transformation: $12M Savings
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">
                      See how a Fortune 500 company achieved 95% operational efficiency...
                    </p>
                    <div className="text-purple-400 font-semibold text-sm group-hover:text-purple-300">
                      View Case Study →
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-sm text-gray-300">Efficiency Gains</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-sm text-gray-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">$12M</div>
              <div className="text-sm text-gray-300">Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
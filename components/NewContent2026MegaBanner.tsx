import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
              & Case Studies
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, real-world transformations, and proven optimization techniques 
            that deliver measurable results for enterprise success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post 1 */}
          <Link href="/blog/ai-2026-enterprise-autonomous-systems" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
                    AI Innovation
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                AI 2026: Enterprise Autonomous Systems Revolution
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Discover how autonomous AI systems are achieving 90% efficiency gains and transforming 
                enterprise infrastructure across industries.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">15 min read</div>
                <div className="text-cyan-400 font-semibold group-hover:text-cyan-300">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Blog Post 2 */}
          <Link href="/blog/ai-cost-optimization-2026-strategies" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Cost Optimization
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
                AI Cost Optimization 2026: 70% Savings Strategies
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Master proven strategies that deliver 70% cost reduction and 300% ROI through 
                intelligent AI optimization techniques.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">12 min read</div>
                <div className="text-green-400 font-semibold group-hover:text-green-300">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/fortune-500-ai-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                    Case Study
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                Fortune 500 AI Transformation: $12M Savings
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                See how a Fortune 500 company achieved $12M annual savings and 95% operational 
                efficiency through comprehensive AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">Fortune 500</div>
                <div className="text-purple-400 font-semibold group-hover:text-purple-300">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
            <div className="text-sm text-gray-300">Efficiency Gains</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">70%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$12M</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">300%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm">
            Join 10,000+ professionals who stay ahead with our latest AI insights and success stories
          </p>
        </div>
      </div>
    </section>
  );
}
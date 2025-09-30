import React from 'react';
import Link from 'next/link';

export default function LatestContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Content Available
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              & Insights 2026
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI strategies, success stories, and implementation guides 
            that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-300">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          {/* AI Trends Article */}
          <Link href="/blog/ai-trends-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-300">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                AI Trends 2026: Top 10 Predictions & Industry Insights
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Discover the top AI trends shaping 2026. From autonomous agents to edge computing, explore transformative technologies.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-300">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-cyan-400 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">70%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">90%</div>
            <div className="text-sm text-gray-300">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$12M</div>
            <div className="text-sm text-gray-300">Annual Savings</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          <p className="text-gray-300 text-sm">
            Join 10,000+ professionals who trust our AI insights and strategies
          </p>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function LatestContent2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">New Content Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI trends, implementation guides, and real-world success stories 
            that are transforming businesses in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-transformation-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm opacity-75">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Enterprise Transformation 2025: Complete Implementation Guide
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm opacity-75">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Trends 2025: Top 10 Predictions & Industry Insights
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm opacity-75">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-sm font-semibold">300% ROI Achieved</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold">90% Efficiency Gain</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-semibold">$50M+ Savings</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              & Insights 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Discover cutting-edge AI strategies, success stories, and implementation guides 
            that are transforming businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  FEATURED
                </span>
                <span className="text-sm opacity-75">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Master AI enterprise transformation with proven strategies achieving 300% ROI, 
                70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Read Full Guide →
              </div>
            </div>
          </Link>

          {/* Featured Article 2 */}
          <Link href="/blog/ai-trends-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  TRENDS
                </span>
                <span className="text-sm opacity-75">18 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Trends 2026: Top 10 Predictions & Industry Insights
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Discover the transformative AI trends that will reshape industries in 2026. 
                From autonomous agents to quantum-enhanced AI.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                Explore Trends →
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  SUCCESS STORY
                </span>
                <span className="text-sm opacity-75">12 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-sm opacity-90 mb-4">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency 
                improvement, saving $12M annually.
              </p>
              <div className="flex items-center text-yellow-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-90">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">300%</div>
            <div className="text-sm opacity-90">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">$2M+</div>
            <div className="text-sm opacity-90">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">90%</div>
            <div className="text-sm opacity-90">Efficiency Gains</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
          
          <p className="text-sm opacity-75">
            Join 10,000+ professionals staying ahead with our latest AI insights and strategies
          </p>
        </div>
      </div>
    </section>
  );
}
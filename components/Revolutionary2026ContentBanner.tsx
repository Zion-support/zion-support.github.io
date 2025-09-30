import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-600 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              & Success Stories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI implementations, real-world success stories, and proven strategies that are transforming industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <Link href="/blog/ai-2026-enterprise-automation-revolution" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-blue-200 text-sm">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                AI 2026 Enterprise Automation Revolution
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Complete implementation guide with 300% ROI strategies, real-world case studies, and 90-day transformation roadmap.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                Read Full Guide →
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-automation-manufacturing-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-blue-200 text-sm">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                95% Process Automation & $12M Savings
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                See how a Fortune 500 manufacturer achieved 95% automation, $12M annual savings, and 60% faster delivery times.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>

          {/* AI Trends 2026 */}
          <Link href="/blog/ai-trends-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Trend Analysis
                </span>
                <span className="text-blue-200 text-sm">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                AI Trends 2026: Industry Predictions
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Discover the top AI trends shaping 2026, from autonomous systems to quantum computing breakthroughs.
              </p>
              <div className="flex items-center text-cyan-300 font-semibold text-sm">
                Explore Trends →
              </div>
            </div>
          </Link>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-blue-200 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-blue-200 text-sm">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$50M+</div>
            <div className="text-blue-200 text-sm">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-blue-200 text-sm">Accuracy Rate</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Join 10,000+ professionals who trust our AI insights and implementation strategies
          </p>
        </div>
      </div>
    </section>
  );
}
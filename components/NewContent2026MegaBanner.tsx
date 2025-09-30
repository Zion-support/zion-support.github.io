import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-blue-600/90"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Content Available
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Now Available
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI insights, implementation guides, and success stories that will transform your business in 2026
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Featured Article */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
                <span className="text-white/70 text-sm">20 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                AI Enterprise Adoption 2025
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Complete implementation guide with proven strategies and 300% ROI frameworks
              </p>
              <Link
                href="/blog/ai-enterprise-adoption-2025"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Article →
              </Link>
            </div>

            {/* AI Trends */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Trends
                </span>
                <span className="text-white/70 text-sm">15 min read</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                AI Trends 2025 Predictions
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Top 10 AI trends shaping the future of business and technology
              </p>
              <Link
                href="/blog/ai-trends-2025-predictions"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
              >
                Read Article →
              </Link>
            </div>

            {/* Case Study */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-white/70 text-sm">Manufacturing</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Supply Chain AI Optimization
              </h3>
              <p className="text-white/80 text-sm mb-4">
                60% cost reduction and 90% efficiency gain with $12M annual savings
              </p>
              <Link
                href="/case-studies/ai-supply-chain-optimization-2025"
                className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-white/70 text-sm">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-white/70 text-sm">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/70 text-sm">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-white/70 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
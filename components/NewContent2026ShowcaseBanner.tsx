import React from 'react';
import Link from 'next/link';

export default function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI trends, proven implementation strategies, and real-world 
            transformation success stories from industry leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">Blog</span>
              <span className="text-sm text-indigo-200">Jan 2026</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Enterprise Transformation 2026
            </h3>
            <p className="text-indigo-100 mb-4 text-sm leading-relaxed">
              Complete implementation guide for enterprise AI transformation. Achieve 300% ROI, 
              90% automation, and $10M+ annual savings with proven strategies.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-enterprise-transformation-2026"
                className="text-blue-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
              <div className="text-xs text-indigo-200">15 min read</div>
            </div>
          </div>

          {/* Implementation Best Practices */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">Guide</span>
              <span className="text-sm text-indigo-200">Jan 2026</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Implementation Best Practices
            </h3>
            <p className="text-indigo-100 mb-4 text-sm leading-relaxed">
              Master AI implementation with proven best practices from 500+ successful deployments. 
              Learn essential strategies that separate success from failure.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-implementation-best-practices-2026"
                className="text-green-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
              <div className="text-xs text-indigo-200">12 min read</div>
            </div>
          </div>

          {/* Fortune 500 Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-semibold">Case Study</span>
              <span className="text-sm text-indigo-200">Jan 2026</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              Fortune 500 AI Success Story
            </h3>
            <p className="text-indigo-100 mb-4 text-sm leading-relaxed">
              How a Fortune 500 company achieved $50M ROI, 90% automation, and 300% efficiency 
              gains through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/fortune-500-ai-transformation-success-2026"
                className="text-purple-300 hover:text-white font-semibold text-sm transition-colors"
              >
                Read More →
              </Link>
              <div className="text-xs text-indigo-200">18 min read</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Explore Case Studies
            </Link>
          </div>
          
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-2xl mx-auto">
            <p className="text-indigo-100 text-sm mb-3">
              <strong>Stay Updated:</strong> Get the latest AI insights delivered to your inbox
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
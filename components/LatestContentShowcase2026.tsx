import React from 'react';
import Link from 'next/link';

export default function LatestContentShowcase2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Latest Content
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover Our Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI content, implementation guides, and real-world success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article */}
          <Link href="/blog/ai-enterprise-adoption-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-gray-500 text-sm">20 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Enterprise Adoption 2025: Complete Implementation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI with our comprehensive guide.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 20, 2025</div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Trends */}
          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-purple-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Trend Analysis
                </span>
                <span className="text-gray-500 text-sm">15 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Trends 2025: Top 10 Predictions & Industry Insights
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 18, 2025</div>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link href="/case-studies/ai-supply-chain-optimization-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-200 hover:border-green-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-gray-500 text-sm">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Supply Chain Optimization: 60% Cost Reduction & 90% Efficiency Gain
              </h3>
              <p className="text-gray-600 mb-4">
                See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Published Jan 15, 2025</div>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </div>
          </Link>

          {/* Additional Content Cards */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">AI Implementation Workshop</h3>
              <p className="text-indigo-100 mb-4">
                Join our exclusive workshop and learn how to implement AI solutions in your organization.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Free AI Assessment</h3>
              <p className="text-green-100 mb-4">
                Get a comprehensive assessment of your organization's AI readiness and opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Assessment
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg p-6 text-white">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">AI Innovation Lab</h3>
              <p className="text-orange-100 mb-4">
                Explore cutting-edge AI technologies and prototype solutions for your business.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}
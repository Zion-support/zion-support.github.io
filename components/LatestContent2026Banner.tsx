import React from 'react';
import Link from 'next/link';

export default function LatestContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">LATEST 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest content, case studies, and AI innovations that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-implementation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Enterprise Implementation 2026: Complete Guide to Success
              </h3>
              <p className="text-gray-600 mb-4">
                Master AI enterprise implementation with proven strategies, ROI frameworks, and implementation roadmaps for 300% ROI.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-cost-optimization-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Popular Article
                </span>
                <span className="text-sm text-gray-500">18 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Cost Optimization 2026: Cut AI Spend by 70%
              </h3>
              <p className="text-gray-600 mb-4">
                Learn proven strategies to reduce AI infrastructure costs by 70% while maintaining performance and efficiency.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-transformation-mega-success-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">22 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Transformation Mega Success: $50M Revenue Growth
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 company achieved $50M revenue growth and 300% ROI through comprehensive AI transformation.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Articles
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Updated daily with fresh insights and success stories
          </p>
        </div>
      </div>
    </section>
  );
}
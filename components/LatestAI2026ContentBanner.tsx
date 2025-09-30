import React from 'react';
import Link from 'next/link';

export default function LatestAI2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
              🔥 Latest Content
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              January 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Latest AI 2026 Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with our latest AI content, breakthrough insights, and enterprise transformation guides. 
            Discover the strategies that are reshaping industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Revolutionary Breakthrough
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI 2026 Revolutionary Breakthrough: The Future of Enterprise AI is Here
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations. 
                From autonomous AI systems to quantum-enhanced computing.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Implementation Guide
                </span>
                <span className="text-sm text-gray-500">30 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Master AI enterprise transformation with proven strategies, ROI frameworks, and deployment patterns 
                that achieve 300% ROI.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-transformation-success-story-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-indigo-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Fortune 500</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI Transformation Success Story 2026: 300% ROI in 8 Months
              </h3>
              <p className="text-gray-600 mb-4">
                See how a Fortune 500 manufacturing company achieved 300% ROI, 70% cost reduction, 
                and 90% efficiency gains through AI transformation.
              </p>
              <div className="flex items-center text-indigo-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Our Content Leads the Industry</h3>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
              Our content is backed by real-world implementations, proven results, and industry expertise 
              that delivers actionable insights for enterprise AI transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-indigo-100">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">300%</div>
              <div className="text-indigo-100">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">90%</div>
              <div className="text-indigo-100">Efficiency Gains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">$2M+</div>
              <div className="text-indigo-100">Cost Savings</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
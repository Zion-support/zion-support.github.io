import React from 'react';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest articles, case studies, and AI insights that are transforming industries worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm text-gray-500">25 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Enterprise Transformation 2026: Complete Implementation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Master AI enterprise transformation with our comprehensive 2026 guide. Achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-autonomous-systems-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                  New Article
                </span>
                <span className="text-sm text-gray-500">22 min read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                AI Autonomous Systems 2026: Enterprise Implementation Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent autonomous systems that work 24/7 to optimize your business operations. Achieve 400% efficiency gains.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Read Article →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/manufacturing-ai-transformation-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  Success Story
                </span>
                <span className="text-sm text-gray-500">Manufacturing</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Manufacturing AI Transformation: 60% Cost Reduction & 90% Efficiency
              </h3>
              <p className="text-gray-600 mb-4">
                See how a global manufacturer achieved 60% cost reduction, 90% efficiency improvement, and $12M annual savings.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content
          </Link>
        </div>
      </div>
    </section>
  );
}
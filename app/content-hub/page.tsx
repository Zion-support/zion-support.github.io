import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Hub - Latest AI Insights & Resources | Zion Tech Group',
  description: 'Explore our comprehensive content hub featuring the latest AI insights, case studies, blog posts, and resources to help you stay ahead in the AI revolution.',
  keywords: 'AI content hub, AI insights, AI resources, AI blog, AI case studies, AI trends, enterprise AI content',
};

export default function ContentHub() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Content Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI insights, case studies, blog posts, and resources 
            to help you stay ahead in the AI revolution.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/ai-2026-revolutionary-breakthrough" className="group">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border border-red-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI 2026 Revolutionary Breakthrough
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations.
                </p>
                <div className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/blog/quantum-ai-breakthrough-2026" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Breakthrough Article
                  </span>
                  <span className="text-sm text-gray-500">25 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Quantum AI Breakthrough 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.
                </p>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Article →
                </div>
              </div>
            </Link>

            <Link href="/case-studies/global-manufacturing-ai-transformation" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Success Story
                  </span>
                  <span className="text-sm text-gray-500">Manufacturing</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Global Manufacturing AI Transformation
                </h3>
                <p className="text-gray-600 mb-4">
                  See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.
                </p>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  View Case Study →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Blog Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Blog Posts</h2>
            <div className="space-y-6">
              <Link href="/blog/ai-enterprise-transformation-2026" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Transformation 2026: Complete Implementation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master AI enterprise transformation with proven strategies, ROI frameworks, and deployment patterns.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>30 min read</span>
                    <span>•</span>
                    <span>Jan 20, 2025</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-autonomous-agents-2025" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Autonomous Agents 2025: Enterprise Implementation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>18 min read</span>
                    <span>•</span>
                    <span>Jan 20, 2025</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-governance-framework-2025" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    AI Governance Framework 2025: Enterprise Implementation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>15 min read</span>
                    <span>•</span>
                    <span>Jan 20, 2025</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Blog Posts →
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="space-y-6">
              <Link href="/case-studies/ai-transformation-success-story-2026" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Transformation Success Story 2026: 300% ROI in 8 Months
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    See how a Fortune 500 manufacturing company achieved 300% ROI, 70% cost reduction, and 90% efficiency gains.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Fortune 500</span>
                    <span>•</span>
                    <span>Manufacturing</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    See how a leading fintech achieved 70% risk reduction with automated governance frameworks.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>FinTech</span>
                    <span>•</span>
                    <span>Risk Management</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/techcorp-ai-transformation" className="group block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    TechCorp: 90% Efficiency Gain with AI
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    See how TechCorp achieved $500K annual savings and 90% efficiency improvement with AI transformation.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>E-commerce</span>
                    <span>•</span>
                    <span>Efficiency</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-6">
              <Link
                href="/case-studies"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest AI trends, case studies, and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
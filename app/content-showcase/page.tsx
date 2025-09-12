import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI Insights, Case Studies & Resources"
        description="Discover our latest AI content including expert articles, success stories, implementation guides, and free resources. Updated weekly with fresh insights."
        keywords="AI content, AI articles, AI case studies, AI resources, AI insights, AI implementation, AI trends"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our latest AI insights, success stories, and implementation resources. 
                Fresh content published weekly to help you stay ahead in the AI revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Browse All Articles
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Content Banner */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                🚀 Fresh AI Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: Enterprise AI Implementation Masterclass, Market Disruption Analysis, 
                Fortune 500 Success Story, and comprehensive implementation checklists. Expert insights 
                to accelerate your AI transformation.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise AI Implementation Masterclass</h3>
                  <p className="text-sm opacity-90 mb-3">Complete guide to successful AI implementation in enterprise environments</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>45 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold mb-2">AI Market Disruption Analysis 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Comprehensive analysis of how AI is reshaping industries and markets</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>32 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Transformation Success</h3>
                  <p className="text-sm opacity-90 mb-3">$50M savings and 300% ROI through comprehensive AI transformation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Our Content
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our comprehensive collection of AI insights, case studies, and resources 
                organized by category for easy discovery.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog Articles */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
                </div>
                <div className="space-y-4 mb-6">
                  <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                        Enterprise AI Implementation Masterclass
                      </h4>
                      <p className="text-sm text-gray-600">Complete guide to successful AI implementation</p>
                    </div>
                  </Link>
                  <Link href="/blog/ai-2025-market-disruption-analysis" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                        AI Market Disruption Analysis 2025
                      </h4>
                      <p className="text-sm text-gray-600">How AI is reshaping industries and markets</p>
                    </div>
                  </Link>
                  <Link href="/blog/ai-trends-2025-predictions" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                        AI Trends 2025 Predictions
                      </h4>
                      <p className="text-sm text-gray-600">15 predictions that will shape the future</p>
                    </div>
                  </Link>
                </div>
                <Link
                  href="/blog"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  View All Articles
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories and implementation results from leading organizations</p>
                </div>
                <div className="space-y-4 mb-6">
                  <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                        Fortune 500 AI Transformation
                      </h4>
                      <p className="text-sm text-gray-600">$50M savings and 300% ROI success story</p>
                    </div>
                  </Link>
                  <Link href="/case-studies/ai-manufacturing-transformation-success-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                        Manufacturing AI Success
                      </h4>
                      <p className="text-sm text-gray-600">40% cost reduction with AI automation</p>
                    </div>
                  </Link>
                  <Link href="/case-studies/ai-financial-services-transformation-success-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                        Financial Services AI Success
                      </h4>
                      <p className="text-sm text-gray-600">95% fraud detection accuracy achieved</p>
                    </div>
                  </Link>
                </div>
                <Link
                  href="/case-studies"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                >
                  View All Case Studies
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
                  <p className="text-gray-600">Downloadable guides, checklists, templates, and tools for AI implementation</p>
                </div>
                <div className="space-y-4 mb-6">
                  <Link href="/resources/ai-implementation-master-checklist-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                        AI Implementation Master Checklist
                      </h4>
                      <p className="text-sm text-gray-600">150+ actionable items for successful AI deployment</p>
                    </div>
                  </Link>
                  <Link href="/resources/ai-implementation-master-guide-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                        AI Implementation Master Guide
                      </h4>
                      <p className="text-sm text-gray-600">Comprehensive 150+ page implementation guide</p>
                    </div>
                  </Link>
                  <Link href="/resources/ai-governance-blueprint-2025" className="block group">
                    <div className="p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                      <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                        AI Governance Blueprint
                      </h4>
                      <p className="text-sm text-gray-600">Complete framework for AI governance</p>
                    </div>
                  </Link>
                </div>
                <Link
                  href="/resources"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block"
                >
                  View All Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up-to-date with our newest content and announcements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">New Article Published</h3>
                    <p className="text-sm text-gray-600">January 15, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "AI 2025 Enterprise Implementation Masterclass" - A comprehensive guide to successful AI implementation in enterprise environments.
                </p>
                <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read Article →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">New Case Study Added</h3>
                    <p className="text-sm text-gray-600">January 12, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Fortune 500 AI Transformation Breakthrough" - How a global company achieved $50M in savings with AI.
                </p>
                <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="text-green-600 hover:text-green-700 font-medium">
                  View Case Study →
                </Link>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">New Resource Available</h3>
                    <p className="text-sm text-gray-600">January 10, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "AI Implementation Master Checklist 2025" - 150+ actionable items for successful AI deployment.
                </p>
                <Link href="/resources/ai-implementation-master-checklist-2025" className="text-purple-600 hover:text-purple-700 font-medium">
                  Download Resource →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Content
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly updates on new articles, case studies, and resources delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              No spam. Unsubscribe anytime. Join 10,000+ AI professionals.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
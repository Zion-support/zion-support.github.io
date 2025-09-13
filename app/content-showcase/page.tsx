import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Showcase: Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI content including blog posts, case studies, implementation guides, and resources. Stay updated with the latest AI trends and insights.',
  keywords: ['AI content', 'AI blog', 'AI case studies', 'AI resources', 'AI insights', 'content showcase'],
};

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 CONTENT LIBRARY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI insights, case studies, 
              implementation guides, and resources. Everything you need to succeed with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                View Featured Content
              </Link>
              <Link
                href="#all-content"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2025-trends-predictions" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  FEATURED
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI 2025 Trends & Predictions</h3>
                <p className="text-gray-600 mb-4">
                  Discover the most important AI trends and predictions for 2025. From quantum computing breakthroughs to neural interfaces.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>Blog Post</span>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  SUCCESS STORY
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Enterprise Transformation</h3>
                <p className="text-gray-600 mb-4">
                  How a Fortune 500 company achieved 340% ROI through strategic AI implementation in just 6 months.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>340% ROI</span>
                  </div>
                  <div className="flex items-center text-green-600 font-semibold">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Resource */}
            <Link href="/resources/ai-2025-implementation-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  ESSENTIAL GUIDE
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI 2025 Implementation Guide</h3>
                <p className="text-gray-600 mb-4">
                  The complete roadmap to successfully implement AI in your organization. Step-by-step guide with templates.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <span>150 pages</span>
                    <span className="mx-2">•</span>
                    <span>Free Download</span>
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Download</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section id="all-content" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find content organized by type and topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Blog Posts</h3>
              <p className="text-gray-600 mb-6">
                Latest insights, trends, and analysis on AI and technology
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-2025-trends-predictions" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI 2025 Trends & Predictions
                </Link>
                <Link href="/blog/ai-enterprise-transformation" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI Enterprise Transformation
                </Link>
                <Link href="/blog/ai-startup-funding-guide" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI Startup Funding Guide
                </Link>
              </div>
              <Link href="/blog" className="inline-flex items-center text-purple-600 font-semibold">
                <span>View All Posts</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-6">
                Real-world success stories and implementation examples
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-enterprise-transformation-2025" className="block text-green-600 hover:text-green-800 font-semibold">
                  Enterprise Transformation (340% ROI)
                </Link>
                <Link href="/case-studies/ai-financial-services" className="block text-green-600 hover:text-green-800 font-semibold">
                  Financial Services AI Success
                </Link>
                <Link href="/case-studies/ai-manufacturing" className="block text-green-600 hover:text-green-800 font-semibold">
                  Manufacturing AI Revolution
                </Link>
              </div>
              <Link href="/case-studies" className="inline-flex items-center text-purple-600 font-semibold">
                <span>View All Case Studies</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resources</h3>
              <p className="text-gray-600 mb-6">
                Guides, templates, and tools for AI implementation
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-2025-implementation-guide" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI Implementation Guide
                </Link>
                <Link href="/resources/ai-roi-calculator" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI ROI Calculator
                </Link>
                <Link href="/resources/ai-readiness-assessment" className="block text-blue-600 hover:text-blue-800 font-semibold">
                  AI Readiness Assessment
                </Link>
              </div>
              <Link href="/resources" className="inline-flex items-center text-purple-600 font-semibold">
                <span>View All Resources</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Webinars */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Webinars</h3>
              <p className="text-gray-600 mb-6">
                Expert-led sessions on AI trends and implementation
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/webinars/ai-2025-trends" className="block text-orange-600 hover:text-orange-800 font-semibold">
                  AI 2025 Trends Webinar
                </Link>
                <Link href="/webinars/ai-implementation" className="block text-orange-600 hover:text-orange-800 font-semibold">
                  AI Implementation Masterclass
                </Link>
                <Link href="/webinars/ai-roi" className="block text-orange-600 hover:text-orange-800 font-semibold">
                  AI ROI Optimization
                </Link>
              </div>
              <Link href="/webinars" className="inline-flex items-center text-purple-600 font-semibold">
                <span>View All Webinars</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Content
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fresh content published this week
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-trends-predictions" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    NEW
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI 2025 Trends & Predictions</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the most important AI trends and predictions for 2025...
                </p>
                <div className="flex items-center text-purple-600 font-semibold text-sm">
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    CASE STUDY
                  </div>
                  <span className="text-sm text-gray-500">5 days ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Enterprise Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  How a Fortune 500 company achieved 340% ROI through AI...
                </p>
                <div className="flex items-center text-green-600 font-semibold text-sm">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-implementation-guide" className="group">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    GUIDE
                  </div>
                  <span className="text-sm text-gray-500">1 week ago</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI Implementation Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Complete roadmap to successfully implement AI in your organization...
                </p>
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  <span>Download</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get the latest AI insights, case studies, and resources delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
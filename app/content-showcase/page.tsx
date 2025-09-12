// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import StructuredData from '../../components/StructuredData';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Fresh content published weekly covering AI trends, implementation guides, and success stories."
        keywords="AI content, business insights, AI trends, case studies, resources, latest articles"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Fresh AI & Business Content Just Dropped
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies and manufacturing automation, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Blog Articles */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Latest Blog Articles</h2>
            <div className="space-y-4">
              <Link href="/blog/ai-2025-industry-disruption" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Industry Disruption Analysis 2025
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    How AI is reshaping every sector with real impact data
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-trends-2025-predictions" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Trends 2025 Predictions
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    15 breakthrough trends that will shape the future of AI
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>28 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4">
              View All Articles →
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Success Stories</h2>
            <div className="space-y-4">
              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    Fortune 500 AI Success Story
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    $50M savings and 300% ROI in 18 months
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-retail-transformation-2025" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    AI Retail Transformation 2025
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    $50M revenue increase, 40% customer satisfaction improvement
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link href="/case-studies" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-4">
              View All Case Studies →
            </Link>
          </div>

          {/* Resources */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Free Resources</h2>
            <div className="space-y-4">
              <Link href="/resources/ai-implementation-master-guide-2025" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Complete 200+ page resource with templates
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group block">
                <div className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                    AI Workforce Transformation Playbook
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    150+ pages of templates, checklists, and strategies
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">New</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link href="/resources" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mt-4">
              View All Resources →
            </Link>
          </div>
        </div>

        {/* Latest Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-lg mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🔥 This Week's Featured Content</h2>
            <p className="text-xl opacity-90 mb-6">
              Our most popular and impactful content published this week
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-industry-disruption" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Industry Disruption 2025</h3>
                  <p className="text-sm opacity-90 mb-3">How AI is reshaping every sector</p>
                  <div className="text-xs opacity-75">25 min read • New</div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-transformation-fortune-500-success-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-lg font-semibold mb-2">Fortune 500 AI Success</h3>
                  <p className="text-sm opacity-90 mb-3">$50M savings and 300% ROI</p>
                  <div className="text-xs opacity-75">Case Study • New</div>
                </div>
              </Link>
              
              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">AI Implementation Guide</h3>
                  <p className="text-sm opacity-90 mb-3">Complete 200+ page resource</p>
                  <div className="text-xs opacity-75">Free Download • New</div>
                </div>
              </Link>
              
              <Link href="/blog/ai-trends-2025-predictions" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                  <h3 className="text-lg font-semibold mb-2">AI Trends 2025</h3>
                  <p className="text-sm opacity-90 mb-3">15 breakthrough trends</p>
                  <div className="text-xs opacity-75">28 min read • New</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI & Technology</h3>
              <p className="text-gray-600 mb-6">
                Latest insights on AI trends, implementation strategies, and breakthrough technologies.
              </p>
              <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore Articles
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Strategy</h3>
              <p className="text-gray-600 mb-6">
                Case studies, success stories, and strategic insights for business transformation.
              </p>
              <Link href="/case-studies" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                View Case Studies
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resources & Tools</h3>
              <p className="text-gray-600 mb-6">
                Downloadable guides, templates, checklists, and practical implementation tools.
              </p>
              <Link href="/resources" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl text-gray-300 mb-6">
            Get weekly updates on new articles, case studies, and resources delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. Join 10,000+ professionals.
          </p>
        </div>
      </div>
    </div>
  );
}


import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our complete library of AI and technology content. Browse latest articles, case studies, resources, and expert insights to accelerate your digital transformation."
        keywords="AI content, technology resources, AI articles, case studies, AI guides, tech insights, digital transformation content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT LIBRARY</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Content Library
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI and technology content. From expert 
            articles and case studies to downloadable resources and implementation guides.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-blue-800">Articles</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-green-800">Case Studies</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">75+</div>
            <div className="text-sm text-purple-800">Resources</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">25K+</div>
            <div className="text-sm text-orange-800">Downloads</div>
          </div>
        </div>

        {/* Featured New Content */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🚀 JUST PUBLISHED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fresh Content Just Dropped
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our latest articles, case studies, and resources covering the most important 
              trends in AI and technology for 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Blog Articles */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📝 Latest Articles</h3>
              <div className="space-y-4">
                <Link href="/blog/ai-2025-year-ahead-predictions" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      AI 2025: The Year Ahead
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      15 predictions that will shape technology in 2025
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>12 min read</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-startup-ecosystem-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      AI Startup Ecosystem 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete landscape guide with $47B funding insights
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>18 min read</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/ai-cybersecurity-threats-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                      AI Cybersecurity Threats 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Defending against next-gen AI-powered attacks
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>18 min read</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4">
                View All Articles
                <span>→</span>
              </Link>
            </div>

            {/* New Case Studies */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Latest Case Studies</h3>
              <div className="space-y-4">
                <Link href="/case-studies/ai-automation-manufacturing-success-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                      AI Manufacturing Success
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      40% cost reduction in 18 months - complete case study
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Fortune 500</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/case-studies/ai-retail-transformation-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                      AI Retail Transformation
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      300% revenue growth in 18 months
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>E-commerce</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/case-studies/ai-financial-services-transformation-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                      Financial Services AI Success
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      $50M cost savings, 300% efficiency gains
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Banking</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mt-4">
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            {/* New Resources */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Latest Resources</h3>
              <div className="space-y-4">
                <Link href="/resources/ai-2025-trends-report" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                      AI Trends Report 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete industry analysis with market insights
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>45 pages</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/resources/ai-implementation-master-guide-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                      AI Implementation Master Guide
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete step-by-step implementation guide
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>120 pages</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/resources/ai-startup-funding-playbook-2025" className="group block">
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                      AI Startup Funding Playbook
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete guide to raising capital for AI startups
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>150+ pages</span>
                      <span>•</span>
                      <span className="text-green-600 font-medium">New</span>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mt-4">
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-4">Blog Articles</h3>
                <p className="text-blue-100 mb-4">
                  Expert insights, analysis, and commentary on AI, technology, and business trends.
                </p>
                <div className="flex items-center gap-2 text-blue-200">
                  <span>150+ articles</span>
                  <span>•</span>
                  <span>Updated weekly</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Case Studies</h3>
                <p className="text-green-100 mb-4">
                  Real-world success stories and detailed implementation examples from our clients.
                </p>
                <div className="flex items-center gap-2 text-green-200">
                  <span>50+ case studies</span>
                  <span>•</span>
                  <span>Proven results</span>
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-8 text-white hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-4">Resources</h3>
                <p className="text-purple-100 mb-4">
                  Downloadable guides, checklists, templates, and tools to accelerate your AI journey.
                </p>
                <div className="flex items-center gap-2 text-purple-200">
                  <span>75+ resources</span>
                  <span>•</span>
                  <span>Free downloads</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Content</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered 
            straight to your inbox. Join 10,000+ professionals who trust our content.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe to Updates
              </button>
            </form>
            <p className="text-sm mt-4 text-gray-400">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
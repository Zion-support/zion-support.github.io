import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources 2025"
        description="Discover our latest AI insights, case studies, and implementation guides. Expert content to accelerate your AI transformation journey."
        keywords="AI content, business resources, AI guides, case studies, implementation checklists"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium">🚀 FRESH CONTENT - JANUARY 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our latest AI insights, case studies, and implementation guides. 
            Expert content designed to accelerate your AI transformation journey.
          </p>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 Just Released: AI Enterprise Masterclass
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Complete 45-minute guide to implementing AI in enterprise environments with proven strategies, 
              real case studies, and step-by-step frameworks for achieving 340% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-2025-enterprise-implementation-masterclass"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📚 Read Masterclass
              </Link>
              <Link
                href="/resources/ai-2025-implementation-master-checklist"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
              >
                📋 Download Checklist
              </Link>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Blog Articles */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Expert insights on AI trends, implementation strategies, and business transformation.
            </p>
            <div className="space-y-4">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    AI Enterprise Implementation Masterclass
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Complete guide to implementing AI in enterprise environments
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>45 min read</span>
                    <span>•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </div>
              </Link>
              <Link href="/blog/ai-2025-market-disruption-analysis" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                    AI Market Disruption Analysis 2025
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    How AI is reshaping every industry with real impact data
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>25 min read</span>
                    <span>•</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded">TRENDING</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mt-4"
            >
              View All Articles
              <span>→</span>
            </Link>
          </div>

          {/* Case Studies */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Success Stories</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Real-world case studies showcasing successful AI implementations and transformations.
            </p>
            <div className="space-y-4">
              <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                    Fortune 500 AI Transformation
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    $50M savings and 300% ROI in 18 months
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Case Study</span>
                    <span>•</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </div>
              </Link>
              <Link href="/case-studies/ai-retail-transformation-2025" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                    AI Retail Transformation 2025
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    $50M revenue increase and 40% customer satisfaction improvement
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Case Study</span>
                    <span>•</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">HOT</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mt-4"
            >
              View All Case Studies
              <span>→</span>
            </Link>
          </div>

          {/* Resources */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Free Resources</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Downloadable guides, checklists, and templates to accelerate your AI journey.
            </p>
            <div className="space-y-4">
              <Link href="/resources/ai-2025-implementation-master-checklist" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                    AI Implementation Master Checklist
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    150+ actionable items for successful AI deployment
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>•</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </div>
              </Link>
              <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group block">
                <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                    AI Workforce Transformation Playbook
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    150+ pages of templates, checklists, and strategies
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>•</span>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">POPULAR</span>
                  </div>
                </div>
              </Link>
            </div>
            <Link 
              href="/resources" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mt-4"
            >
              View All Resources
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-6xl">🎓</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    MASTERCLASS
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Enterprise Implementation Masterclass
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete 45-minute guide to implementing AI in enterprise environments with proven strategies and real case studies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>45 min read</span>
                      <span>•</span>
                      <span>Jan 30, 2025</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                  <div className="text-6xl">🏆</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CASE STUDY
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    Fortune 500 AI Transformation Success
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete case study of $50M savings and 300% ROI through comprehensive AI transformation in just 18 months.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>20 min read</span>
                      <span>•</span>
                      <span>Jan 30, 2025</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">📋</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE RESOURCE
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Implementation Master Checklist
                  </h3>
                  <p className="text-gray-600 mb-4">
                    150+ actionable items for successful AI deployment with detailed guidance, templates, and success metrics.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>150+ items</span>
                      <span>•</span>
                      <span>Free Download</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Statistics */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Library Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
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
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ AI professionals getting our weekly insights.
          </p>
        </div>
      </div>
    </div>
  );
}
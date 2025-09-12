import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Expert content covering AI trends, implementation guides, and business transformation strategies."
        keywords="AI content, business insights, AI resources, case studies, AI trends, implementation guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh AI & Business Content Just Dropped
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI enterprise transformation 
            to startup funding strategies and manufacturing automation, get the knowledge you need to succeed in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Governance Framework */}
          <Link href="/blog/ai-2025-enterprise-ai-governance-framework" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                <div className="text-8xl">🛡️</div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI & Governance
                  </span>
                  <span className="text-gray-500 text-sm">25 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  AI Governance Framework 2025: Complete Implementation Guide
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Master enterprise AI governance with our comprehensive framework covering risk management, 
                  compliance, ethical implementation, and operational excellence for 2025 and beyond.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Cost Optimization */}
          <Link href="/blog/ai-cost-optimization-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                <div className="text-8xl">💰</div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Engineering
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  AI Cost Optimization 2025: Ship Faster, Spend Less
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover proven strategies to reduce AI costs by 40-60% while improving performance. 
                  Learn from real case studies and implement actionable tactics that actually work.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-green-600 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Global Logistics Case Study */}
          <Link href="/case-studies/ai-transformation-global-logistics-giant-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                <div className="text-8xl">📦</div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Case Study
                  </span>
                  <span className="text-gray-500 text-sm">Fortune 500</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  AI Transformation: Global Logistics Giant Achieves $2.3B Revenue Impact
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a Fortune 500 logistics company achieved 45% cost reduction, 60% faster processing times, 
                  and $2.3B revenue impact through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-purple-600 font-medium group-hover:underline">
                    Read Case Study →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Implementation Checklist */}
          <Link href="/resources/ai-implementation-master-checklist-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                <div className="text-8xl">📋</div>
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FREE
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    Free Resource
                  </span>
                  <span className="text-gray-500 text-sm">200+ items</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  AI Implementation Master Checklist 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your comprehensive guide to successful AI implementation with 200+ actionable items, 
                  step-by-step guidance, and proven best practices from industry experts.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-orange-600 font-medium group-hover:underline">
                    Download Free →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Trends 2025 */}
          <Link href="/blog/ai-trends-2025-predictions" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                <div className="text-8xl">🔮</div>
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  TRENDING
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Trends
                  </span>
                  <span className="text-gray-500 text-sm">28 min read</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  AI Trends 2025 Predictions: 15 Predictions That Will Shape the Future
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover the 15 most important AI trends that will shape technology and business in 2025. 
                  Expert insights and actionable predictions for the year ahead.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-indigo-600 font-medium group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Startup Funding Guide */}
          <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                <div className="text-8xl">🚀</div>
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  FREE
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    Startup Guide
                  </span>
                  <span className="text-gray-500 text-sm">120+ pages</span>
                  <span className="text-gray-500 text-sm">•</span>
                  <span className="text-gray-500 text-sm">Jan 29, 2025</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  AI Startup Funding Playbook 2025
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete guide with $47B market insights and 120+ templates for AI startup funding. 
                  Everything you need to secure investment and scale your AI business.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-sm">ZT</span>
                    </div>
                    <span className="text-sm text-gray-600">Zion Tech Group</span>
                  </div>
                  <span className="text-yellow-600 font-medium group-hover:underline">
                    Download Free →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-4">Latest Articles</h3>
                <p className="text-blue-100 mb-6">
                  Expert insights on AI trends, implementation strategies, and business transformation.
                </p>
                <div className="flex items-center gap-2 text-blue-100 group-hover:text-white">
                  <span>View All Articles</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
                <p className="text-green-100 mb-6">
                  Real-world case studies showcasing AI transformation results and best practices.
                </p>
                <div className="flex items-center gap-2 text-green-100 group-hover:text-white">
                  <span>View All Case Studies</span>
                  <span>→</span>
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-4">Free Resources</h3>
                <p className="text-purple-100 mb-6">
                  Downloadable guides, checklists, templates, and tools for AI implementation.
                </p>
                <div className="flex items-center gap-2 text-purple-100 group-hover:text-white">
                  <span>View All Resources</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources. Join 10,000+ professionals 
            who trust our content for their AI transformation journey.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
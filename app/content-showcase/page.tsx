import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Discover our latest AI insights, case studies, and resources. Fresh content published weekly covering AI trends, implementation guides, and success stories."
        keywords="AI content, AI insights, AI case studies, AI resources, AI trends, AI implementation, business AI"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">✨ FRESH CONTENT - JANUARY 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Latest AI & Business Insights
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our latest expert insights, case studies, and resources. From AI governance 
                and cost optimization to Fortune 500 success stories and implementation guides.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Latest Blog Posts */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <Link 
                href="/blog" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Articles →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-8xl">🎓</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Masterclass
                      </span>
                      <span className="text-gray-500 text-sm">45 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      AI Enterprise Implementation Masterclass 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Complete guide to implementing AI in enterprise environments. Learn from real Fortune 500 
                      case studies and achieve 340% ROI with proven strategies.
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
                </article>
              </Link>

              <Link href="/blog/ai-2025-market-disruption-analysis" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">📈</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        Market Analysis
                      </span>
                      <span className="text-gray-500 text-sm">25 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI Market Disruption Analysis 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      How AI is reshaping every industry with real impact data. Discover market disruption 
                      patterns and strategic implications for businesses.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/ai-cost-optimization-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center relative">
                    <div className="text-8xl">💰</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      POPULAR
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Cost Optimization
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      AI Cost Optimization 2025: Ship Faster, Spend Less
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover proven strategies to reduce AI costs by 60% while improving performance. 
                      Complete guide with tools, frameworks, and real-world case studies.
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
                </article>
              </Link>
            </div>
          </section>

          {/* Latest Case Studies */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
              <Link 
                href="/case-studies" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Case Studies →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/case-studies/ai-transformation-global-logistics-giant-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                    <div className="text-8xl">📦</div>
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                        Fortune 100
                      </span>
                      <span className="text-gray-500 text-sm">22 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                      Global Logistics Giant AI Transformation: $2.3B Revenue Impact
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how a Fortune 100 logistics company achieved unprecedented results through 
                      comprehensive AI transformation, including $2.3B revenue increase and 45% cost reduction.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$2.3B</div>
                        <div className="text-sm text-gray-600">Revenue Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">45%</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-orange-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/case-studies/ai-transformation-fortune-500-breakthrough-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏆</div>
                    <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                        Fortune 500
                      </span>
                      <span className="text-gray-500 text-sm">35 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                      Fortune 500 AI Transformation Breakthrough 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Complete case study of how a Fortune 500 company achieved $50M savings and 300% ROI 
                      in just 18 months through strategic AI transformation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$50M</div>
                        <div className="text-sm text-gray-600">Annual Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">300%</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-yellow-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-yellow-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>

          {/* Latest Resources */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
              <Link 
                href="/resources" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Resources →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-2025-implementation-master-checklist" className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative">
                    <div className="text-8xl">📋</div>
                    <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                        Master Checklist
                      </span>
                      <span className="text-gray-500 text-sm">150+ items</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Free</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">
                      AI Implementation Master Checklist 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The most comprehensive AI implementation checklist available. 150+ actionable items 
                      covering strategy, governance, and ROI optimization based on Fortune 500 implementations.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-teal-600 font-medium group-hover:underline">
                        Download Free →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-8xl">📚</div>
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      POPULAR
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                        Guide
                      </span>
                      <span className="text-gray-500 text-sm">300+ pages</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Free</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      AI Implementation Master Guide 2025
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Complete 300+ page guide with detailed strategies, frameworks, and best practices 
                      for successful AI implementation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-indigo-600 font-medium group-hover:underline">
                        Download Free →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-governance-implementation-checklist-2025" className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">🛡️</div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                        Governance
                      </span>
                      <span className="text-gray-500 text-sm">150+ items</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Free</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      AI Governance Implementation Checklist
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Specialized checklist for implementing AI governance and compliance frameworks 
                      in enterprise environments.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-red-600 font-medium group-hover:underline">
                        Download Free →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Latest Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
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
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}